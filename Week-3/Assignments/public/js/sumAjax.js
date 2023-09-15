console.log("testing");
document.getElementById("submitButton").addEventListener("click", () => {
  const numInput = document.querySelector("#numInput");
  console.log(numInput.value);
  const number = numInput.value;

  var getSumRequest = new XMLHttpRequest();

  getSumRequest.onreadystatechange = function () {
    if (getSumRequest.readyState === 4) {
      //if(getSumRequest.status === 200){
      document.getElementById(
        "result"
      ).innerHTML = `<h3> ${getSumRequest.responseText} </h3>`;
      //}
      console.log(getSumRequest.responseText);
      console.log("1234");
    }
  };

  getSumRequest.open("GET", "http://localhost:3000/data?number=" + number);
  getSumRequest.send();
});
