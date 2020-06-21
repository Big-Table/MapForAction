const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const keys = require("./config/keys");

//models
require("./models/Incident");
require("./models/User");
require("./models/Tweet");
require("./models/Action");
require("./services/passport");

mongoose
  .connect(keys.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected"))
  .catch((err) => console.log(err));

const app = express();

//cookie sessions for auth
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey],
  })
);

//parses all request to json
app.use(express.json());

//initializes the passport middleware, middleware has access to req, res objects as well as the next
app.use(passport.initialize());
app.use(passport.session());

//routes
require("./routes/authRoutes")(app);
require("./routes/incidentRoutes")(app);

//starting back-end on port 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT);
