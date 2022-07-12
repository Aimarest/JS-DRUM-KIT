'use strict';
const keys = document.querySelectorAll('.key');

// Así conseguimos la keyCode de cada letra:
/*
window.addEventListener('keydown', (event)=>{
    console.log(event)
});*/

//****Funciones manejadoras*****

//Función para manejar la batería desde el teclado:

function handlePlay (event){
const audio = document.querySelector(`audio[data-key = "${event.keyCode}"]`);
const key = document.querySelector(`div[data-key = "${event.keyCode}"]`);
key.classList.add('playing');
audio.currentTime = 0;
audio.play();
};

// Función para eliminar los estilos que se ponen cuando tocamos:
function removeClass (event){
console.log(event)
if(event.propertyName !== 'transform')return;
const key= event.target;
key.classList.remove('playing');
}

//Función para manejar la batería desde el ratón:

function handleClick (ev){
 const key = ev.path[1];
 const audio = ev.path[1].lastChild.childNodes[0];
 console.log(key,audio);
 key.classList.add('playing');
 audio.currentTime = 0;
audio.play();

}
//Le añadimos al teclado el evento:

window.addEventListener('keydown', handlePlay);

//Le añadimos los eventos a cada tecla:

keys.forEach (key => key.addEventListener('transitionend', removeClass ))
keys.forEach (key => key.addEventListener('click',handleClick ));



