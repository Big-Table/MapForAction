const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const cors = require("cors");
const keys = require("./config/keys");
const bodyParser = require("body-parser");

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

//whitelist domains for cors
const corsOptions = {
  origin: ["http://localhost:5000", "http://localhost:3000"],
};

const app = express();
app.use(cors(corsOptions));

//cookie sessions for auth
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey],
  })
);

//??? fixes payload too large issue
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
//parses all request to json
app.use(express.json());

//initializes the passport middleware, middleware has access to req, res objects as well as the next
app.use(passport.initialize());
app.use(passport.session());

//routes
//switch routes to Router
app.use("/auth", require("./routes/authRoutes"));
app.use("/incidents", require("./routes/incidentRoutes"));
app.use("/actions", require("./routes/actionRoutes"));
app.use("/tweets", require("./routes/tweetRoutes"));
app.use("/stats", require("./routes/statsRoutes"));

if (process.env.NODE_ENV === "production") {
  // Express will serve up production assets
  // like our main.js file, or main.css file!
  app.use(express.static("../build"));

  // Express will serve up the index.html file
  // if it doesn't recognize the route
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve("../build/index.html"));
  });
}

//starting back-end on port 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT);
