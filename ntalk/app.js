const express = require('express');
const routes = require('./routes/index');
const users = require('./routes/users');
const app = express();

app.set('views',  __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.use('/', routes);
app.use('/users', users);

app.listen(3000, () => {
  console.log("Ntalk is running on localhost:3000");
});