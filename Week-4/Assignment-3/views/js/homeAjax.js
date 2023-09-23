const signUpButton = document.getElementById("signup-submit");
const loginButton = document.getElementById("login-submit");
let alreadyExist = false;

signUpButton.addEventListener("click", () => {
  const signUpForm = document.getElementById("signup-form");
  const signUpEmail = document.getElementById("signup-email").value;
  const signUpPassword = document.getElementById("signup-password").value;

  const signUpRequest = new XMLHttpRequest();
  const url = "/home/signup";

  signUpRequest.open("POST", url, true);
  signUpRequest.setRequestHeader(
    "Content-type",
    "application/x-www-form-urlencoded"
  );

  signUpRequest.onreadystatechange = function () {
    //Call a function when the state changes.
    if (
      signUpRequest.readyState == 4 &&
      signUpRequest.status == 200 &&
      signUpRequest.responseText === "alreadyExist"
    ) {
      signUpForm.innerHTML += "<p>Account already exists, please log in</p>";
    }
  };
  signUpRequest.send(`
  {
    email:${signUpEmail},
    password:${signUpPassword}
  }
  `);
});

loginButton.addEventListener("click", () => {
  const loginForm = document.getElementById("login-form");
  const loginEmail = document.getElementById("login-email").value;
  const loginPassword = document.getElementById("login-password").value;

  const loginRequest = new XMLHttpRequest();
  const url = "/home/login";

  loginRequest.open("POST", url, true);
  loginRequest.setRequestHeader(
    "Content-type",
    "application/x-www-form-urlencoded"
  );

  loginRequest.onreadystatechange = function () {
    //Call a function when the state changes.
    if (
      loginRequest.readyState == 4 &&
      loginRequest.status == 200 &&
      loginRequest.responseText === "login fail"
    ) {
      loginForm.innerHTML += "<p>Login fail, wrong email or password</p>";
    }
  };
  loginRequest.send(`
    {
      email:${loginEmail},
      password:${loginPassword}
    }
    `);
});
