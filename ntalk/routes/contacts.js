module.exports = (app) => {
  const auth = require('./../middlewares/auth');
  const contacts = app.controllers.contacts;

  app.get('/contacts', auth, contacts.index);
  app.get('/contact/:id', auth, contacts.show);
  app.post('/contact', auth, contacts.create);
  app.get('/contact/:id/edit', auth, contacts.edit);
  app.put('/contact/:id', auth, contacts.update);
  app.delete('/contact/:id', auth, contacts.destroy);
}