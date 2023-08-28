const hoverDiv = document.getElementById("hoverDiv");

hoverDiv.addEventListener("mouseover", function() {
  this.style.backgroundColor = "blue";
});

hoverDiv.addEventListener("mouseout", function() {
  this.style.backgroundColor = "transparent";
});