module.exports = (io) => {
  const crypto = require('crypto');
  const   sockets = io.sockets;

  sockets.on('connection', (client) => {
    let session = client.handshake.session;
    let user = session.user;

    client.on('join', (room) => {
      if(!room) {
        let timestamp = new Date().toString();
        let md5 = crypto.createHash('md5');
        let room = md5.update(timestamp).digest('hex');
      }
      session.room = room;
      client.join(room);
    });

    client.on('disconnect', () => {
      client.leave(session.room);
    });

    client.on('send-server', (msg) => {
      let room = session.room;
      let data = { mail: user.mail, room: room  };
      let message = "<b>" + user.name + ": </b>" + msg + "<br>";

      client.broadcast.emit('new-message', data);
      sockets.in(room).emit('send-client', message);
    });

  });
};