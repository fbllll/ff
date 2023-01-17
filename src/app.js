const express = require('express');
const path = require('path');
const session = require('express-session');
const flash = require('connect-flash');

const app = express();
require('./database');

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running at:\x1b[36m http://localhost:${port}\x1b[0m`));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(session({
    secret: 'mysecretapp',
    //cookie: {maxAge: 60000}, Allow the session to be 1 min active
    resave: true,
    saveUninitialized: true
}));

app.use(express.static(path.join(__dirname, 'public')));

app.use(flash());

app.use(async (req, res, next) => {    
    res.locals.danger_msg = req.flash('danger_msg');
    next();
});

app.use(require('./routes/index'));