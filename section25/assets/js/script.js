console.log("Hola mundo!");
// SUMA
let sumando1= 8;
let sumando2= 4;

console.log(sumando1);
console.log(sumando2);
console.log(sumando1 + sumando2);
//tambien podemos almacenar el resultado de la operacion dentro de otra variable
let resultadoSuma = sumando1 + sumando2;
console.log("RESULTADO SUMA")
console.log(resultadoSuma);

// RESTA
let minuendo= 5;
let sustraendo= 20;
let resta = minuendo - sustraendo;

console.log("RESULTADO RESTA")
console.log(resta);

// MULTIPLICACION
let factor1 = 20;
let factor2 = 34;
let producto = factor1 * factor2;

console.log("RESULTADO MULTIPLICACION")
console.log(producto);

// DIVISION = no olvides que el divisor no puede ser 0
let dividendo = 12;
let divisor = 8;
let cociente = dividendo / divisor;

console.log("RESULTADO DIVISION")
console.log(cociente);

//Operacion combinada
console.log("OPERACION COMBINADA");
console.log (15 + 43 / (4 +8) * 2);

/*
Modulo O RESIDUO %
ME devuelve el RESIDUO de una division
*/ 
let moduloNum1 = 12;
let moduloNum2 = 5;
let resultadoModulo = moduloNum1 % moduloNum2;

console.log("RESULTADO MODULO")
console.log(resultadoModulo);

/*
Potencia **
a**b = eleva el numero "a" la potencia "b"
*/
let base = 2;
let exponente = 5;
let resultadoPotencia = base ** exponente;

console.log("RESULTADO POTENCIA")
console.log(resultadoPotencia);

console.log("======================================")
console.log("OPERADORES DE COMPARACION:")

/*OPERADORES DE COMPARACION
sirve para comparar dos valores. Siempre devuelve un valor booleano (true o false)
*/
let valor1 = 8;
let valor2 = 1;
let mayorQue = valor1 > valor2;  //comparamos

console.log(mayorQue);        //SALDRA TRUE
console.log(valor1 < valor2); //SALDRA FALSE
console.log(valor1 >= valor2); //SALDRA TRUE
console.log(valor1 <= valor2); //SALDRA FALSE

console.log("========================================")

/*
== --> operador de igualdad, me indica si dos valores son iguales. No importa el tipo de dato.
=== --> operador de identidad, me indica si dos valores son IDENTICOS. Verifica que el valor y el tipo de dato sean los mismos.
*/
let datoNumber = 1; //number
let datoString = "1"; //string

//IGUALDAD
console.log(datoNumber == datoString); //true
//IDENTIDAD
console.log(datoNumber === datoString); //false

//DIFERENTES (NEGACION DE IGUALDAD O IDENTIDAD)
console.log(datoNumber != datoString); //false
console.log(datoNumber !== datoString); //true

console.log("========================================")
console.log("OPERADORES LOGICOS:")
/* OPERADORES LOGICOS
Realizan operaciones logicas entre valores booleanas.
&& --> ( y, AND) --> devuelve true si ambos operandos son true (verdaderos)
|| --> (o,OR) --> devuelve false cuando ambos operandos son false (falsos)
! --> (negacion,NO) --> Negacion
*/
// AND
console.log("AND");
console.log(true && true);  // true
console.log(true && false);  // false
console.log(false && false);  // false
// OR
console.log("OR");
console.log(true || true);  // true
console.log(true || false);  // true
console.log(false || false);  // false
// NOT
console.log("NOT");
console.log(!true);  // false
console.log(!false);  // true 

console.log("========================================") 
console.log("STRINGS:")
//STRINGS
//van siempre entre comillas: simples o dobles o backticks
let dobles = "String entre comillas dobles";
console.log(dobles);
let simples = 'String entre comillas simples';
console.log(simples);
let backticks = `String entre backticks o comillas invertidas`;
console.log(backticks);

//Las comillas invertidas (backticks)
/*Me permiten INTERPOLAR STRINGS. Puedo ingresar variables directamente dentro de la string
${nombreVariable} */
let nombreCompleto = `Alexandra Fernandez`;
let edad = 19;
let saludo = `Hola, me llamo ${nombreCompleto}! Temgo ${edad} años. `;
console.log(saludo);

/*Me permiten escrribir un string multilinea, en varias lineas
 */
let frase = `Hola,
como estas? 
Estoy aprendiendo JavaScript.`;
console.log(frase);

// Metacaracteres--> Representan caracteres especiales dentro de un string
/* \n --> salto de linea*/
frase = "Holi, \nEstoy aprendiendo JavaScript.\nEstoy en la sesion 25.";
console.log(frase);

// Escapar caracteres -> Hace referencia a hacer que un caracter especial no funcione como originalmente lo hacía
// Se escapan poniendo un backlash \
let miguelGrau = "Miguel Grau \"El Caballero de los Mares\" ";
console.log(miguelGrau);

let prueba2 = 'It\'s me';
console.log(prueba2);

// INDEXACION -> Hace referencia a tomar caracteres de una string por su posición (indice)
// Los indices siempre son NUMEROS ENTEROS
// Podemos acceder de la siguiente manera string[indice]
let palabra = "hola";
console.log(palabra);
console.log("Indexando");

// Accedemos al elemento en la primera posicion, es decir indice 0
console.log(palabra[0]);   // 0 es la primera posicion osea la h de hola

//STRING.LENGTH
/* Tamaño de una string -> string.length */
console.log(`Tamaño de la string ${palabra} = ${palabra.length}`);      //con comillas invertidas
/*emplo mio de string.length*/
let texto= "Yamile Fernandez";
console.log("El texto Yamile Fernandez tiene" ,  texto.length , "caracteres" , "\n y su ultima letra es", texto[texto.length -1] );  //con comillas dobles

/* Accediendo al ultimo caracter (length - 1) */
console.log(`Último caracter -> ${palabra[palabra.length - 1]}`);


//Manejo de cadenas

let nom1='Juan "manuel"'
let nom2="M aria"
const frase1="El que madruga\ndios le ayuda"
const frase2="mas vale pajaro en mano que ver cientos volando"

console.log("primera letra de nom2 :", nom2[0] )     //indexacion de un string tambien cuenta los espacios
console.log("segunda letra de nom2 :", nom2[1] )
console.log("tercera letra de nom2 :", nom2[2] )
console.log("cuarta letra de nom2 :", nom2[3] )
console.log("quinta letra de nom2 :", nom2[4] )
console.log("sexta letra de nom2 :", nom2[5] )

console.log("la frase1 uno tiene:", frase1.length, "caracteres")      //string.length tamaño de un string osea la cantidad de caracteres incluyendo espacios y saltos de linea
console.log("la palabra dios comienza en la posicion ", frase1.indexOf("dios"))   //indexOf() busca la posicion de un caracter o palabra dentro de una string
console.log(frase1)








                                                                                                                                                                                                                                                                                                                     