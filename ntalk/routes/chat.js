module.exports = (app) => {
  const auth = require('./../middlewares/auth');
  const chat = app.controllers.chat;

  app.get('/chat', auth, chat.index);
};