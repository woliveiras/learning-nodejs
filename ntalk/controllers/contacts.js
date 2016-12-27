module.exports = (app) => {
  let ContactsController = {
    index : (req, res) => {
        let user = req.session.user;
        let params = { user : user };

        res.render('contacts/index', params);
    }
  };
  return ContactsController;
};