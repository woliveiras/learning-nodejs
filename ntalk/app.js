const KEY  = 'ntalk.sid';
const SECRET = "ntalk";

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
const cookie = cookieParser(SECRET);
const store = new expressSession.MemoryStore();
const mongoose = require('mongoose');

global.db = mongoose.connect('mongodb://localhost/ntalk');

app.set('views',  __dirname + '/views');
app.set('view engine', 'ejs');
app.use(cookie);
app.use(expressSession({
    secret: SECRET,
    name: KEY,
    resave: true,
    saveUninitialized: true,
    store: store
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(express.static(__dirname + '/public'));

load('models')
  .then('controllers')
  .then('routes')
  .into(app);

io.use((socket, next) => {
  let data = socket.request;

  cookie(data, {}, (error) => {
    let sessionID = data.signedCookies[KEY];
    store.get(sessionID, (error, session) => {
      if (error || !session) {
        return next(new Error("Acesso negado"));
      } else {
        socket.handshake.session = session;
        return next();
      }
    });
  });
});

load('sockets')
  .into(io);

app.use(error.notFound);
app.use(error.serverError);

server.listen(4000, () => console.log("Ntalk is running on localhost:4000"));