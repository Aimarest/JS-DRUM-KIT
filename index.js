'use strict';
const keys = document.querySelectorAll('.key');

// Así conseguimos la keyCode de cada letra:
/*
window.addEventListener('keydown', (event)=>{
    console.log(event)
});*/
function handlePlay (){
    console.log('hola maricarmen')

};

//Le añadimos al teclado el evento:

window.addEventListener('keydown', handlePlay);
//Guardamos en una constante cada tecla del array de teclas y añadimos el evento a cada tecla:

const key = keys.forEach(key => key.addEventListener('click',handlePlay  ))



