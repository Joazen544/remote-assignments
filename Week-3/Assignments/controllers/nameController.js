module.exports = (req, res, next) => {
  console.log("Name controller workiong");
  res.sendFile(`myName.html`, { root: "public" });
};
