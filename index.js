'use strict';
const keys = document.querySelectorAll('.key');
console.log(keys);

// Así conseguimos la keyCode de cada letra:
/*
window.addEventListener('keydown', (event)=>{
    console.log(event)
});*/

//Funciones manejadoras:

function handlePlay (event){
    console.log(event.keyCode)
const audio = document.querySelector(`audio[data-key = "${event.keyCode}"]`);
const key = document.querySelector(`div[data-key = "${event.keyCode}"]`);
console.log(audio, key)
};

//Le añadimos al teclado el evento:

window.addEventListener('keydown', handlePlay);
//Le añadimos el evento a cada tecla:

//keys.forEach(key => key.addEventListener('click',handlePlay  ));



