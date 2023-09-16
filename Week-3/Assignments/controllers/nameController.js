module.exports = (req, res, next) => {
  res.sendFile(`myName.html`, { root: "public" });
};
