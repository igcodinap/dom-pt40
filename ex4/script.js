const button = document.getElementById("clickMe");

button.addEventListener("click", function (papasFritas){
    console.log(papasFritas.target.id);
});

// RECORDAR: en el DOM es el usuario el que dispara los eventos, no el programador.
function eventClick(event){
    console.log(event.target.id);
}

eventClick({target: {id: "clickMe"}});



