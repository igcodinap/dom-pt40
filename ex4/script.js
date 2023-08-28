// Using addEventListener to attach an event to an element
const button = document.getElementById("clickMe");
button.addEventListener("click", (event) => {
  // console.log("Button clicked");
  // console.log(event.type);
  if (event.type === "click") {
    console.log("Clicked");
  }
});
