//console.log("testing");

if (document.cookie != "") {
  console.log("Name Ajax no cookie working");
  document.querySelector("main h1").innerHTML = "I know who you are!";
  document.querySelector(
    "main div"
  ).innerHTML = `<p>You are ${document.cookie.slice(5)}</p>`;
} else {
  console.log("Name ajax yes cookie working");
  document.getElementById("submitButton").addEventListener("click", () => {
    const nameInput = document.querySelector("#name");
    //console.log(nameInput.value);
    const name = nameInput.value;

    var postNameRequest = new XMLHttpRequest();

    postNameRequest.onreadystatechange = function () {
      if (postNameRequest.readyState === 4) {
        console.log("XML function working");
        window.location.href = "http://localhost:3000/myName";
        //Location.href = "http://localhost:3000/myName";
      }
    };

    postNameRequest.open("GET", "http://localhost:3000/trackName?name=" + name);
    postNameRequest.send();
  });
}
