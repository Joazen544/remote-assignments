module.exports = (req, res, next) => {
  res.cookie("name", req.query.name);
  res.send(`redirect`);
};
