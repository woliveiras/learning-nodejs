module.exports = (app) => {
  const ChatController = {
    index(req, res) {
      let params = {
        user: req.session.user
      };

      res.render('chat/index', params);
    }
  };

  return ChatController;
};