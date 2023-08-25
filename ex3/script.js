// Using querySelectorAll to select all elements that match a CSS selector
const listItems = document.querySelectorAll("#list li");
console.log(listItems);
listItems.forEach((item) => {
  item.style.fontWeight = "bold";
});
listItems[0].style.fontSize = "200px";