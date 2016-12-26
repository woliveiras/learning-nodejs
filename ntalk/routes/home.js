module.exports = (app) => {
  let home = app.controllers.home;
  app.get('/', home.index);
};