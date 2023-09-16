if (document.cookie != "") {
  document.querySelector("main h1").innerHTML = "I know who you are!";
  document.querySelector(
    "main div"
  ).innerHTML = `<p>You are ${document.cookie.slice(5)}</p>`;
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
