module.exports = (req, res, next) => {
  console.log("track name controller working");
  res.cookie("name", req.query.name);
  res.send(`redirect`);
};
