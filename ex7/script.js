const myForm = document.getElementById("myForm");

myForm.addEventListener("submit", function(event) {
  event.preventDefault();
  alert("Form submitted!");
});
