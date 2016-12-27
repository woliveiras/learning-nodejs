module.exports = (app) => {
  const HomeController = {
    index: (req, res) => {
      res.render('home/index');
    },
    login: (req, res) => {
      let mail = req.body.user.mail;
      let name = req.body.user.name;

      if(mail && name) {
        let user = req.body.user;
        user['contacts'] = [];

        req.session.user = user;
        res.redirect('/contacts');
      } else {
        res.redirect('/');
      }
    },
    logout: (req, res) => {
      req.session.destroy();
      res.redirect('/');
    }
  };
  return HomeController;
};