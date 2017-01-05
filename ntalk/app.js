const express = require('express');
const load = require('express-load');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const expressSession = require('express-session');
const methodOverride = require('method-override');
const error = require('./middlewares/error');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

app.set('views',  __dirname + '/views');
app.set('view engine', 'ejs');
app.use(cookieParser('ntalk'));
app.use(expressSession({
    secret: "123",
    resave: true,
    saveUninitialized: true
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(express.static(__dirname + '/public'));

load('models')
  .then('controllers')
  .then('routes')
  .into(app);

io.sockets.on('connection', (client) => {
  client.on('send-server', (data) => {
    let msg = "<b>" + data.name + ": </b>" + data.msg + "<br>";
    client.emit('send-client', msg);
    client.broadcast.emit('send-client', msg);
  });
});

app.use(error.notFound);
app.use(error.serverError);

server.listen(4000, () => console.log("Ntalk is running on localhost:4000"));