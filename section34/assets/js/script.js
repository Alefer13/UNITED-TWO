// Métodos de arrays
let fruits = ["manzana", "naranja", "cereza", "mango", "membrillo"];
console.log(fruits);

// push(x) -> Agregar un elemento al final del arreglo
fruits.push("kiwi");
console.log(fruits);

// pop() -> Eliminar el último elemento del arreglo y retornarlo
fruits.pop();
console.log(fruits);

fruits.pop();
console.log(fruits);

// unshift(x) -> Agregar un elemento al inicio del arreglo
fruits.unshift("fresa");
console.log(fruits);

// shift() -> Eliminar el primer elemento del arreglo y retornarlo
fruits.shift();
console.log(fruits);
fruits.shift();
console.log(fruits);

// includes(x) -> Retorna true o false si el elemento x se encuentra en el arreglo
console.log(fruits.includes("manzana"));
console.log(fruits.includes("naranja"));

// indexOf(x) -> Retorna el índice del elemento x en el arreglo, si no lo encuentra retorna -1
console.log(fruits.indexOf("naranja"));
console.log(fruits.indexOf("pera"));

// join(x) -> Retorna un string con todos los elementos del arreglo separados por x
let fruitsString = fruits.join(", ");
console.log(fruitsString);
console.log(fruits.join(" - "));
console.log(fruits.join(" "));
console.log(fruits.join(""));
console.log(fruits.join(" / "));
console.log(fruits.join(" | "));
console.log(fruits.join(" * "));
console.log(fruits.join(" ~ "));
console.log(fruits.join(" <> "));
console.log(fruits.join(" ... "));
console.log(fruits.join(" ^_^ "));

let randomArray = ["hola", 12, 34.5, true, "palabra"];
console.log(randomArray.join());

// Recalcando el arreglo original
fruits = ["manzana", "naranja", "cereza", "mango", "membrillo"];
console.log("Arreglo original");
console.log(fruits);

// slice(inicio, fin) -> Retorna una copia de una parte del arreglo desde el índice "inicio" hasta el índice "fin" (no incluido)
let sliceFruits = fruits.slice(3);
console.log(sliceFruits);
console.log(fruits.slice(1, 5));

// splice(inicio, cantidad, elementos nuevos (opcional)) -> Modifica el arreglo original.
// Solo el argumento de inicio es obligatorio
//Elimina "cantidad" elementos desde el índice "inicio" y retorna un arreglo con los elementos eliminados
fruits.splice(2, 3, "kiwi", "pera", "fresa");
console.log(fruits);

console.log("============================");

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(nums);

// map(funcion) -> Crea un nuevo arreglo con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos
let numsMap = nums.map((x) => x * 2);
console.log(numsMap);

let numsToString = nums.map((x) => `Número ${x}`);
console.log(numsToString);

// filter(funcion) -> Retorna una copia del arreglo con todos los elementos que cumplan la condición implementada por la función dada
let filteredNums = nums.filter((x) => x % 2 === 0);
console.log(filteredNums);

// reduce(funcion, acumulador) -> Aplica una función a un acumulador y a cada valor de un arreglo (de izquierda a derecha) para reducirlo a un único valor
let sumOfAllElements = nums.reduce((a, b) => a + b, 0);
console.log(sumOfAllElements);

let productOfAllElements = nums.reduce((a, b) => a * b, 1);
console.log(productOfAllElements);

// Math.round(x) -> Redondea el número x al entero más cercano
console.log(Math.round(4.3));
console.log(Math.round(4.6));

// Math.ceil(x) -> Redondea el número x al entero mayor más cercano
console.log(Math.ceil(4.3));
console.log(Math.ceil(4.6));

// Math.floor(x) -> Redondea el número x al entero menor más cercano
console.log(Math.floor(4.3));
console.log(Math.floor(4.6));