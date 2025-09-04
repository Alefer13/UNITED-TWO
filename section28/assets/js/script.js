//Funciones:
//definir una funcion
function mostrarMensajes(){
    console.log("Inicio");
    console.log("Buennas noches");
    console.log(8);
    console.log("Alexandra");
    console.log("fin");
 }
                     /*Esto hara que se repita el codigo 5 veces */
 mostrarMensajes();   //esto es una llamada a la funcion, se ejecuta la funcion en la consola
 mostrarMensajes();   //llamada 2
 mostrarMensajes();   //llamada 3
 mostrarMensajes();   //llamada 4
 mostrarMensajes();   //llamada 5

 //RETO 1: crea una funcion que imprima los numeros del 1 al 10 (1 por 1)
 function showNumbers(){
    console.log(1);
    console.log(2);
    console.log(3);
    console.log(4);
    console.log(5);
    console.log(6);
    console.log(7);
    console.log(8);
    console.log(9);
    console.log(10);
 }
 showNumbers();   //llamada 1    
 showNumbers();   //llamada 2


 //PARAMETROS:
 function addTwoNumbers (x , y){      //primer parametro x, segundo parametro y
    let result = x + y;
    console.log(`El resultado de ${x} + ${y} = ${result}`);
 }
 addTwoNumbers(2, 3);   //2= x, 3= y
 addTwoNumbers(5, 6);   //5= x, 6= y

 function addTwoNumbers (x, y){
    let result = x + y;
    console.log(`El resultado de ${x} + ${y} = ${result}`);
 }
 let num1 = 30
 let num2 = 25
 addTwoNumbers(num1, num2)


 //RETORNO DE VALORES (RETURN):
 function greet(targetName){
    let message =`Hola ${targetName}, espero tengas un buen dia.`;
    return message;   //retorno de un dato
 }

 let name= `Alexandra`;
 let greetMessage = greet(name);    //llamada a la funcion, al retornar una funcion podemos almacenarlo

 console.log(greetMessage);
 console.log(greet(name));


// ARROW FUNCTIONS (Funciones de flecha) =>
/*  Son una sintaxis distinta para escribir funciones, fueron introducidas en ECMAScript6. Se llaman asi por el simbolo de => */
// ECMAScript6 => 
let value1 = 14;
let value2 = 2;

let multiplyTwoNumbers = (a, b) => {   //14= a, 2= b
  let result = a*b;
  let message = `${a} x ${b} = ${result}`;

  return message;
};
console.log(multiplyTwoNumbers(value1, value2));

/*
function multiplyTwoNumbers(a, b) {
  console.log(`Factor 1 -> ${a}`);
  console.log(`Factor 2 -> ${b}`);

  let result = a*b;
  let message = `${a} x ${b} = ${result}`;

  return message;
}

console.log(multiplyTwoNumbers(value1, value2));

// Arrow function de una linea

let multiplyTwoNumbers = (a, b) => a*b;
*/

let word = "Holaa";
let age = 24;

// obj.method()
console.log(word.toUpperCase());  
console.log(age.toUpperCase());



 

 





 


   

    