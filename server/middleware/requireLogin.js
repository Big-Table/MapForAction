module.exports = (req, res, next) => {
  if (!req.user) {
    console.log("hit")
    return res.status(401).send({ error: "You must be logged in" });
  }

  next();
};
