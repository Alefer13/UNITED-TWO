//DOM
/*Para el ID */
let mainTitle= document.getElementById('main-title');
console.log(mainTitle);

console.log(mainTitle.innerText);  //innerText muestra el contenido de la id main-title
mainTitle.innerText="Titulo cambiado"; //Actualizamos el contenido de main-title (osea si esque quereoms cambiar el texto)
console.log(mainTitle.innerText);  //mostramos el contenido de la id main-title actuzalizado 

/* Para el class */
let mainTexts = document.getElementsByClassName('main-text');
console.log(mainTexts); //Esto se mostrara en consola como un array (arreglo), y sus elementos son elementos HTML

//Acedemos a un elemento del array de html
console.log(mainTexts[0].innerText); //Esto nos mostrara el primer elemento del array
mainTexts[0].innerText="Parrafo cambiado"; 

let subtitles = document.getElementsByTagName("h2");
console.log(subtitles); //Esto se mostrara en consola como un array (arreglo), y sus elementos son elementos HTML
console.log(subtitles[0].innerText); 
console.log(subtitles[1].innerText); 
console.log(subtitles[2].innerText); 

//selector por css

let queryMainTitle = document.querySelector('#main-title');  //para id
console.log(queryMainTitle);

let queryMainTexts = document.querySelectorAll(".main-text");   //para class
console.log(queryMainTexts);

//EVENTOS
document.getElementById("main-button").addEventListener("click", 
    function (){
        console.log("Diste click en el boton");
});
/*Podemos cambiar estilos*/
let currentBackgroundColor = document.body.style.backgroundColor;

if (currentBackgroundColor === "red") {
    document.body.style.backgroundColor = "white";
    mainButton.style.color = "white";
} else {
    document.body.style.backgroundColor = "red";
    mainButton.style.color = "red";
}
let magicNumber = document.querySelector("#magic-number");


