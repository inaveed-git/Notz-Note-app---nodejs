require('dotenv').config();

const express = require("express");
const PORT = 8080 || process.env.PORT;
const connectToDatabase = require('./config/db');
const expressLayout = require('express-ejs-layouts');
const methodOverride = require('method-override');
const app = express();
const flash = require('connect-flash');
const passport = require("passport");
const session = require("express-session");
const MongoStore = require('connect-mongo');
const path = require("path");
const ExpressError = require("./utils/ExpressError.js");

connectToDatabase();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const store = MongoStore.create({
  mongoUrl: process.env.DB_CONNECT,
  crypto: {
    secret: "mysecretcode",
  },
  touchAfter: 24 * 3600,
});

app.use(session({
  store,
  secret: "keyboard cat",
  resave: false,
  saveUninitialized: true,
  cookie: {
    expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
    maxAge: 7 * 24 * 60 * 60 * 1000,
    httpOnly: true,
  },
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(flash());

app.use((req, res, next) => {
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  next();
});

app.use(express.static(path.join(__dirname, "public")));
app.set("views", path.join(__dirname, "views"));
app.use(expressLayout);
app.set('layout', './layouts/main');
app.set('view engine', 'ejs');

app.use(methodOverride('_method'));

const auth = require("./server/routers/auth.js");
const dashboard = require("./server/routers/dashbord.js");
const mainRoute = require("./server/routers/index");

app.use("/", auth);
app.use("/", dashboard);
app.use("/", mainRoute);

app.all("*", (req, res, next) => {
  next(new ExpressError(404, "Page Not Found"));
});

app.use((err, req, res, next) => {
  const { statusCode = 500, message = "Internal Server Error" } = err;
  res.status(statusCode).render("partials/error.ejs", { message });
});

app.listen(PORT , ()=>{
    console.log(`your are listing on port ${PORT}`)
})
