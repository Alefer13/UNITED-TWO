//ARRAYS (ARREGLOS)

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

//BUCLES
for (let i = 1; i <= 10; i++) {
    console.log(`valor de i = ${i}`);
    console.log("HOLA");
}

//imprime los numeros del 1 al 50, de 10 en 10
for (let i = 10; i <= 50; i+=10) {    //el i+=10 hace q vaya de 10 en 10, i++ hace que vaya de 1 en 1
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









