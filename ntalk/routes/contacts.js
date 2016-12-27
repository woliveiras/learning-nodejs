module.exports = (app) => {
  let contacts = app.controllers.contacts;
  app.get('/contacts', contacts.index);
}