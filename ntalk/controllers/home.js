"use strict";

module.exports = (app) => {
  const User = app.models.user;

  const HomeController = {
    index(req, res) {
      res.render('home/index');
    },
    login(req, res) {
      const query = { mail : req.body.user.mail };

      User.findOne(query)
        .select('name mail')
        .exec((error, user) => {
            if(user) {
              req.session.user = user;
              res.redirect('/contacts');
            } else {
              const user = req.body.user;
              User.create(user, (error, user) => {
                if(error){
                  res.redirect('/');
                } else {
                  req.session.user = user;
                  res.redirect('/contacts');
                }
              })
            }
        })
    },
    logout(req, res) {
      req.session.destroy();
      res.redirect('/');
    }
  };
  return HomeController;
};