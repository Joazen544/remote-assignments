document.getElementById("submitButton").addEventListener("click", () => {
  const numInput = document.querySelector("#numInput");
  const number = numInput.value;

  var getSumRequest = new XMLHttpRequest();

  getSumRequest.onreadystatechange = function () {
    if (getSumRequest.readyState === 4) {
      document.getElementById(
        "result"
      ).innerHTML = `<h3> ${getSumRequest.responseText} </h3>`;
    }
  };

  getSumRequest.open("GET", "http://localhost:3000/data?number=" + number);
  getSumRequest.send();
});
