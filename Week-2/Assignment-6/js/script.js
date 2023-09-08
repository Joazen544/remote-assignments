let welcomeMessage = document.getElementById("js_welcome_message");

welcomeMessage.addEventListener("click", () => {
  welcomeMessage.innerHTML = "Have a Good Time!";
});

let callAction = document.getElementById("js_call_action");
let section_two = document.querySelector(".js_second_section");

callAction.addEventListener("click", () => {
  section_two.style.display = "block";
});
