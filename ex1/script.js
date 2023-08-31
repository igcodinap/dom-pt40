const titleElement = document.getElementById("title");

const obtTitleElement = {
  innerHTML: "Hello, World!",
  id: "title",
};
console.dir(titleElement);
titleElement.innerHTML = "Hello, DOM!";



const divWithChildren = document.getElementById("divWithChildren");
console.log(divWithChildren.children);