module.exports = () => {
  const mongoose = require('mongoose');
  const env = {
    "test" : "mongodb://localhost/ntalk_test",
    "dev": "mongodb://localhost/ntalk"
  };
  const url = env[process.env.NODE_ENV || "dev"];
  return mongoose.connect(url);
};