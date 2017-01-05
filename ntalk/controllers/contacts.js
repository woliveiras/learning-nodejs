"use strict";

module.exports = (app) => {
  const ContactsController = {
    index(req, res) {
        let user = req.session.user;
        let contacts = user.contacts;
        let params = {
          user : user,
          contacts : contacts
        };

        res.render('contacts/index', params);
    },
    create(req, res) {
      let contact = req.body.contact;
      let user = req.session.user;
      user.contacts.push(contact);
      res.redirect('/contacts');
    },
    show(req, res) {
      let id = req.params.id;
      let contact = req.session.user.contacts[id];
      let params = {
        contact : contact,
        id : id
      }
      res.render('contacts/edit', params);
    },
    edit(req, res) {
      let id = req.params.id;
      let user = req.session.user;
      let contact = user.contacts[id];
      let params = {
        user : user,
        contact : contact,
        id : id
      };
      res.render('contacts/edit', params);
    },
    update(req, res) {
      let contact = req.body.contact;
      let user = req.session.user;
      user.contacts[req.params.id] = contact;
      res.redirect('/contacts');
    },
    destroy(req, res) {
      let user = req.session.user;
      let id = req.params.id;
      user.contacts.splice(id, 1);
      res.redirect('/contacts');
    }
  };
  return ContactsController;
};