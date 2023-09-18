if (document.cookie != "") {
  document.querySelector("main h1").innerHTML = "I know who you are!";
  document.querySelector("main div").innerHTML = `<p>You are ${getCookie(
    "name"
  )}</p>`;
} else {
  document.getElementById("submitButton").addEventListener("click", () => {
    const nameInput = document.querySelector("#name");
    const name = nameInput.value;

    var postNameRequest = new XMLHttpRequest();

    postNameRequest.onreadystatechange = function () {
      if (postNameRequest.readyState === 4) {
        window.location.href = "http://localhost:3000/myName";
      }
    };

    postNameRequest.open("GET", "http://localhost:3000/trackName?name=" + name);
    postNameRequest.send();
  });
}

function getCookie(cookieName) {
  let cookie = {};
  document.cookie.split(";").forEach(function (el) {
    let [key, value] = el.split("=");
    cookie[key.trim()] = value;
  });
  return cookie[cookieName];
}

//onload vs onreadystatechange
