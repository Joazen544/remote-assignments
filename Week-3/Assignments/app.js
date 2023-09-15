const express = require("express");
const app = express();
const dataController = require("./controllers/dataController");
const nameController = require("./controllers/nameController");
const trackNameController = require("./controllers/trackNameController");

const bodyParser = require("body-parser");

const cookieParser = require("cookie-parser");

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(`${__dirname}/public`));

app.get("/", (req, res, next) => {
  res.send("<h1>Hello, My Server!</h1>");
});

app.use("/data", dataController);
app.use("/myName", nameController);
app.get("/trackName", trackNameController);

const server = app.listen("3000", () => {
  console.log(`App running on port 3000`);
});
