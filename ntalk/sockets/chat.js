module.exports = (io) => {
  const crypto = require('crypto');
  const   sockets = io.sockets;
  let onlines = {};

  sockets.on('connection', (client) => {
    let session = client.handshake.session;
    let user = session.user;
    onlines[user.mail] = user.mail;

    for (let mail in onlines) {
      client.emit('notify-onlines', mail);
      client.broadcast.emit('notify-onlines', mail);
    }

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
      const room = session.room;
      const msg = `<b>${user.name} saiu.</b><br>`;
      client.broadcast.emit('notify-offlines', user.mail);
      sockets.in(room).emit('send-client', msg);

      delete onlines[user.mail];

      client.leave(room);
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