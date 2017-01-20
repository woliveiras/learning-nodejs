module.exports = (app) => {
  const Schema = require('mongoose').Schema;

  const contact = Schema({
    name : String,
    mail : String
  });

  const user = Schema({
    name : { type : String, required : true },
    mail :  { type : String, required : true },
    index : { type : Number, unique : true },
    contacts : [contact]
  });

  return db.model('users', user);
};