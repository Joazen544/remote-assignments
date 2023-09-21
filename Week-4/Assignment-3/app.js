const path = require("path");
const express = require("express");
const dotenv = require("dotenv");
const userRouter = require("./routes/userRoutes");
const sendMemberPage = require("./controllers/sendMemberPage");
dotenv.config();
const app = express();

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));
//app.use(express.static(path.join(__dirname, "public")));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/home", userRouter);
app.use("/member", sendMemberPage);
app.use("/", (req, res, next) => {
  res.redirect("/home");
});

const port = process.env.PORT;
const server = app.listen(port, () => {
  console.log(`APP running on port ${port}`);
});
