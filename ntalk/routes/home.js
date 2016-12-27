module.exports = (app) => {
  let home = app.controllers.home;

  app.get('/', home.index);
  app.post('/login', home.login);
  app.get('/logout', home.logout);
};