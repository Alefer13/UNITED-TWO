//Hola Mundo en JavaScript
console.log("Hola Mundo");

/*Declaracion de variables:
let nombreVariable = "valor";
full Name= nombre completo.
*/
let fullName = "Alexandra Fernandez"; //declaracion de variables
console.log(fullName);  //imprime el valor   


//TIPOS DE DATOS:
/*1.undefined= cuando una variable no tiene un valor asignado
   Se declara una variable sin asignarle un valor.
*/
let person;
console.log(person); 
console.log(typeof (person)); 

/*2.boolean= es un tipo de dato que solo puede tener dos valores: true o false.
   Se usa para representar valores lógicos.
*/
let valorVerdadero = true;
console.log(valorVerdadero);
console.log(typeof (valorVerdadero)); 

let esMayor = false;
console.log(esMayor);
console.log(typeof (esMayor)); 

/*3.Number= representa números enteros o decimales.
*/ 
//NumeroS enteros
let edad = 24;
console.log(edad);
console.log(typeof (edad));
//NumeroS decimales (son con punto no coma)
let estatura = 1.61;
console.log(estatura);
console.log(typeof (estatura));

/*4.String= van a representar texto ya sea letra o parrafo, se definen con comillas simples o dobles.
*/
let pelicula = "Era de Hieo";
let serie = "Más Allá del Jardín";
console.log(serie);
console.log(typeof (serie));

// COMENTARIO DE UNA SOLA LINEA
// EMPIEZA CON DOS BARRAS

/*COMENTARIO MULTILINEA
ES IGUAL QUE LOS COMENTARIOS EN CSS 
ABARCA VARIAS LINEAS
*/

/*yo agrego esto OPERACONES
*/ 
let numero1 = 25;
numero1 = numero1 + 1;    //operacion de suma
console.log (numero1);    //console muestra el resultado en la consola

let texto1 = "Juan ";  //luego de juan hay un espacio para que al concatenar no quede pegado
texto1 = texto1 + "Perez"; 
console.log (texto1); 

let isWorking = true; 
console.log(isWorking);