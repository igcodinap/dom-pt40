const key = document.getElementById("keyInput");

key.addEventListener("keydown", function(event) {
  console.log(`Key pressed: ${event.code}`);
});


const testObj = {
    name: "John",
    age: 30,
    city: "New York"
}

console.log(testObj.name);
console.log(testObj["name"]);