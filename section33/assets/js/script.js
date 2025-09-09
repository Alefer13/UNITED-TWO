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
/*
Selectores por CSS, se llaman asi porque usan la sintaxis de un selector CSS para seleccionar los elementos del DOM.

querySelector("selector") -> Devuelve el primer elemento que coincida con el selector.
querySelectorAll("selector") -> Devuelve un arreglo de elementos que coincidan con el selector.
*/

let queryMainTitle = document.querySelector('#main-title');  //para id
console.log(queryMainTitle);

let queryMainTexts = document.querySelectorAll(".main-text");   //para class
console.log(queryMainTexts);



//EVENTOS
document.getElementById("main-button").addEventListener("click", 
    function (){
        console.log("Diste click en el boton");
        /*Podemos cambiar estilos*/
        let currentBackgroundColor = document.body.style.backgroundColor;

        if (currentBackgroundColor === "red") {
            document.body.style.backgroundColor = "white";
            mainButton.style.color = "white";
        } else {
            document.body.style.backgroundColor = "red";
            mainButton.style.color = "red";
        }
        let magicNumber = document.querySelector("#magic-number").value;
        console.log(`Valor ingresado en el input: ${magicNumber}`);

        // Mostramos el valor en el contenido de un elemento
        let greetParagraph = document.querySelector("#greet");

        // Validacion en caso el input esté vacío
        if (magicNumber == "" || magicNumber.length === 0) {
            greetParagraph.innerText = "NO INGRESASTE UN NOMBRE";
        } else {
            greetParagraph.innerText = `Buenas noches ${magicNumber}`;
        }
    }
);

// Evento de click en otro boton
// Selecionamos el boton
let togglerButton = document.querySelector("#toggler");
// Fijamos el contenido
togglerButton.innerText = "MOSTRAR";
// Seleccionamos el texto
let hiddenText = document.querySelector("#hidden-text");
// Lo ocultamos directamente
hiddenText.style.display = "none";

// Agregamos el event listener
togglerButton.addEventListener("click", function () {
  let currentTextDisplay = hiddenText.style.display;

  // Si el boton esta oculto
  if (currentTextDisplay == "none") {
    // Lo muestro
    hiddenText.style.display = "block";
    togglerButton.innerText = "OCULTAR";
  } else {
    // Si no esta oculto, lo oculto
    hiddenText.style.display = "none";
    togglerButton.innerText = "MOSTRAR";
  }
});

// FORMA CORRECTA DE CAMBIAR ESTILOS, USANDO CLASES
let togglerButton2 = document.querySelector("#toggler-2");
// Fijamos el contenido
togglerButton2.innerText = "MOSTRAR";
// Seleccionamos el texto
let hiddenText2 = document.querySelector("#hidden-text-2");

// Agregamos el event listener
togglerButton2.addEventListener("click", function () {
  if (hiddenText2.classList.contains("hide-text")) {
    hiddenText2.classList.remove("hide-text");
    togglerButton2.innerText = "OCULTAR";
  } else {
    console.log("ELSE");
    hiddenText2.classList.add("hide-text");
    togglerButton2.innerText = "MOSTRAR";
  }
});


