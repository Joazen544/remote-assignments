const pool = require("../mysqlPool/mysqlConnect");

exports.signup = async (req, res, next) => {
  const email = req.body["email"];
  const password = req.body["password"];

  const [result] = await pool.query(
    // Try to insert user info to mysql
    `
    INSERT IGNORE INTO user (email, password) 
    VALUE (?,?)
    `,
    [email, password]
  );

  if (result["insertId"] === 0) {
    // User email already exists
    // Insert doesn't work
    const alreadyExist = true;
    return res.render("home", { alreadyExist });
  } else {
    // Signup succeed, welcome
    res.redirect("/member");
  }
};

exports.login = async (req, res, next) => {
  const email = req.body["email"];
  const password = req.body["password"];

  const [result] = await pool.query(
    `
    SELECT *
    FROM user
    WHERE email = ?
    AND password = ?
    `,
    [email, password]
  );

  if (result[0]) {
    // Login succeed
    res.redirect("/member");
  } else {
    // Login fail
    const loginFail = true;
    res.render("home", { loginFail });
  }
};
