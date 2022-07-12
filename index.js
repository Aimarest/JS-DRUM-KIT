'use strict';
const keys = document.querySelectorAll('.key');
// Así conseguimos la keyCode de cada letra:

window.addEventListener('keydown', (event)=>{
    console.log(event)
});

//Guardamos en una constante cada tecla del array de teclas y añadimos el evento a cada tecla:

const key = keys.forEach(key => key.addEventListener('keydown',handlePlay ))

function handlePlay (e){
console.log(e)
};

