module.exports = (io) => {
  const   sockets = io.sockets;

  sockets.on('connection', (client) => {
    let session = client.handshake.session;
    let user = session.user;

    client.on('send-server', (msg) => {
      let message = "<b>" + user.name + ": </b>" + msg + "<br>";
      client.emit('send-client', message);
      client.broadcast.emit('send-client', message);
    });
  });
};