const express = require('express');
const load = require('express-load');
const app = express();

app.set('views',  __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

load('models')
  .then('controllers')
  .then('routes')
  .into(app);

app.listen(3000, () => {
  console.log("Ntalk is running on localhost:3000");
});