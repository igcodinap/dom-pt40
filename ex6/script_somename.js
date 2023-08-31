const key = document.getElementById("keyInput");

key.addEventListener("keydown", function(e) {
  console.log(`Key pressed: ${e.code}`);
  if (e.code === "Enter") {
    console.log("ENTERRRRR!");
  }
});


const testObj = {
    name: "John",
    age: 30,
    city: "New York"
}

console.log(testObj.name);
console.log(testObj["name"]);