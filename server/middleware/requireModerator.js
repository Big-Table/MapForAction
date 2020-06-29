module.exports = (req, res, next) => {
  if (!req.user) {
    return res.status(401).send({ error: "You must be logged in." });
  }

  if(req.user.moderator === false){
    return res.status(401).send({ error: "You must be a moderator to view this information." });
  }

  next();
};
