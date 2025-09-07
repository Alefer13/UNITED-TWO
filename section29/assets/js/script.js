//ARRAYS (ARREGLOS)

// Al igual que con una string, podemos acceder a los elementos por indice, ademas de obtener el tamaño (length) de un array
// console.log(`El tamaño del array es ${numbers.length}`);
// console.log(`Primer elemento del arreglo: ${numbers[0]}`);
// console.log(`Último elemento del arreglo: ${numbers[numbers.length - 1]}`);


let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numbers);

let size = numbers.length;   //al igual que con una string podemos acceeder los elementos po indice, ademas de obtener el tamaño ( length) de una array
console.log(`El tamaño del array es: ${numbers.length}`);
console.log(`Primer elemento del arreglo es: ${numbers[0]}`);
console.log(`Ultimo elemento del arreglo es: ${numbers[size-1]}`);


//RETO 1
/*Crea un arreglo que almacene nombres de frutas, 
luego muestralo en consola, Minimo 4 elementos.*/

let fruits = [`manzana`, `pera`, `uva`, `naranja`];
console.log(fruits);

let size2 = fruits.length;
console.log(`El tamaño del arreglo es: ${fruits.length}`);
console.log(`Primer elemento del arreglo es: ${fruits[0]}`);
console.log(`Ultimo elemento del arreglo es: ${fruits[size2-1]}`);
console.log(`Ultimo elemento del arreglo es: ${fruits[size2-2]}`);
console.log(`Ultimo elemento del arreglo es: ${fruits[size2-3]}`);
console.log(`Ultimo elemento del arreglo es: ${fruits[size2-4]}`);


// ===================================================
let num1 = 18; // Se declara la variable num1 y se le asigna el valor 18.

num1 = num1 + 1; // Se suma 1 al valor actual de num1 (ahora vale 19).
console.log(num1); // Muestra 19 en consola.

num1 += 5; // Se suma 5 al valor actual de num1 (ahora vale 24).
console.log(num1); // Muestra 24 en consola.

num1 -= 1; // Se resta 1 al valor actual de num1 (ahora vale 23).
console.log(num1); // Muestra 23 en consola.

// Operador de incremento
num1++; // Incrementa num1 en 1 (ahora vale 24).
console.log(num1); // Muestra 24 en consola.

num1++; // Incrementa num1 en 1 (ahora vale 25).
console.log(num1); // Muestra 25 en consola.

// Operador de decremento
num1--; // Disminuye num1 en 1 (ahora vale 24).
console.log(num1); // Muestra 24 en consola.

num1--; // Disminuye num1 en 1 (ahora vale 23).
console.log(num1); // Muestra 23 en consola.



//BUCLES
for (let i = 1; i <= 10; i++) {
    console.log(`valor de i = ${i}`);
    console.log("HOLA");
}

//imprime los numeros del 1 al 50, de 10 en 10
for (let i = 10; i <= 50; i+=10) {    //el i+=10 hace q vaya de 10 en 10, i++ hace que vaya de 1 en 1
    console.log(i);
} 

// Imprime los numeros del 10 al 100, de 10 en 10
for (let i = 10; i <= 100; i+=10) {
    console.log(i);
}

//muestra los numeros del 0 al 26, de 3 en 3
for (let i = 0; i <= 26; i+=3) {
    console.log(i);
}

//con conteos negativos , inversos y disminuyendo
console.log("Cuenta regresiva del 10 al -10");
for (let i = 10; i >=-10; i--){ 
    console.log(i);
}



//WHILE
console.log("NUMEROS DEL 1 AL 10");
let iterador = 1;

while (iterador <= 10) {
    console.log(iterador);
    iterador++;
}

console.log("Numeros del 15 al 75, de 5 en 5");
let iterador2 = 15;

while (iterador2 <= 75) {
    console.log(iterador2);
    iterador2+=5;
}

//do.. while
do{
    console.log(iterador);
    iterador++;
}while(iterador <= 10);

//ITERAR= recorrer un arreglo
let words = ["hola", "mundo", "javascript", "es", "genial"];
console.log(words);

for (let i = 0; i < words.length; i++) {
    console.log(words[i]);
}

//INVERTIR UN ARREGLO 
let auxWords = [];

for (let i = words.length -1; i >=0; i--) {
    console.log(words[i]);
    auxWords.push(words[i]);
}
console.log(auxWords);










