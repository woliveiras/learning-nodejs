"use strict";

module.exports = (app) => {
  const ChatController = {
    index(req, res) {
      let params = {
        room: req.query.room
      };
      res.render('chat/index', params);
    }
  };

  return ChatController;
};