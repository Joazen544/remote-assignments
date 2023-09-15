const express = require("express");
const app = express();
const dataController = require("./controllers/dataController");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(`${__dirname}/public`));

app.get("/", (req, res, next) => {
  res.send("<h1>Hello, My Server!</h1>");
});

app.use("/data", dataController);

const server = app.listen("3000", () => {
  console.log(`App running on port 3000`);
});
