"use strict";

module.exports = (app) => {
  const User = app.models.user;

  const ContactsController = {
    index(req, res) {
      const _id = req.session.user._id;

      User.findById(_id, (error, user) => {
        const contacts = user.contacts;
        const result = { contacts : contacts };

        res.render('contacts/index', result);
      });
    },
    create(req, res) {
      const _id = req.session.user._id;

      User.findById(_id, (error, user) => {
        const contact = req.body.contact;
        const contacts = user.contacts;
        contacts.push(contact);

        console.log(contact);

        user.save(() => res.redirect('/contacts'));
      });
    },
    show(req, res) {
      const _id = req.session.user._id;

      User.findById(_id, (error, user) => {
        const contactID = req.params.id;
        const contact = user.contacts.id(contactID);
        const result = { contact: contact };

        res.render('contacts/show', result);
      });
    },
    edit(req, res) {
      const _id = req.session.user._id;

      User.findById(_id, (error, user) => {
        const contactID = req.params.id;
        const contact = user.contacts.id(contactID);
        const result = { contact: contact };

        res.render('contacts/edit', result);
      });
    },
    update(req, res) {
      const _id = req.session.user._id;

      User.findById(_id, (error, user) => {
        const contactID = req.params.id;
        const contact = user.contacts.id(contactID);
        contact.name = req.body.contact.name;
        contact.mail = req.body.contact.mail;

        user.save(() => res.redirect('contacts/'));
      });
    },
    destroy(req, res) {
      const _id = req.session.user._id;

      User.findById(_id, (error, user) => {
        const contactID = req.params.id;
        user.contacts.id(contactID).remove();

        user.save(() => res.redirect('contacts/'));
      });
    }
  };
  return ContactsController;
};