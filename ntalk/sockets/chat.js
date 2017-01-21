module.exports = (io) => {
  const crypto = require('crypto');
  const redis = require('redis').createClient();
  const   sockets = io.sockets;

  sockets.on('connection', (client) => {
    let session = client.handshake.session;
    let user = session.user;

    redis.sadd('onlines', user.mail, (error) => {
      redis.smembers('onlines', (error, mails) => {
        mails.forEach((mail) => {
          client.emit('notify-onlines', mail);
          client.broadcast.emit('notify-onlines', mail);
        });
      });
    });

    client.on('join', (room) => {
      if(!room) {
        let timestamp = new Date().toString();
        let md5 = crypto.createHash('md5');
        let room = md5.update(timestamp).digest('hex');
      }
      session.room = room;
      client.join(room);
      const msg = `<b>Usuário ${ user.name }: entrou.</b><br>`;

      console.log("join", room, msg);
      redis.lpush(room, msg, (error, res) => {
        redis.lrange(room, 0, -1, (error, msg) => {
          msg.forEach((msg) => {
            sockets.in(room).emit('send-client', msg);
          })
        });
      });
    });

    client.on('disconnect', () => {
      const room = session.room;
      const msg = `<b>${ user.name } saiu.</b><br>`;

      console.log("disconnect", room, msg);
      redis.lpush(room, msg);
      client.broadcast.emit('notify-offlines', user.mail);
      sockets.in(room).emit('send-client', msg);

      redis.srem('onlines', user.mail);

      client.leave(room);
    });

    client.on('send-server', (msg) => {
      let room = session.room;
      let data = { mail: user.mail, room: room  };
      msg = `<b>${ user.name }: </b> ${ msg }<br>`;

      console.log("send-server", room, msg);
      redis.lpush(room, msg);
      client.broadcast.emit('new-message', data);
      sockets.in(room).emit('send-client', msg);
    });
  });
};