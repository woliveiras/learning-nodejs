module.exports = (app) => {
  const ChatController = {
    index(req, res) {
      res.render('chat/index');
    }
  };

  return ChatController;
};