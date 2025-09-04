//if..else if...else
/*Estructura de control que nos permite ejecutar diferentes bloques de codigo segun UNA CONDICION
*En caso de que se cumpla la condicion se ejecuta el bloque de codigo dentro del if  
*Si no se cumple la condicion se ejecuta el bloque de codigo dentro del else*/

//variables

let edadJuan= 15
let edadMaria= 19

// Determinar si que el usuario es mayor de edad mostrar en consola
if(edadJuan>=18){  //mayor o igual a 18, es falso xq juan tiene 15, entonces se mmostrara en la consola la condicion de else "Usuario no es mayor de Edad"
    console.log("Usuario es mayor de Edad")
}else{
    console.log("Usuario no es mayor de Edad")   
}
if(edadMaria>=18){  //mayor o igual a 18, es verdadero xq maria tiene 19, entonces se mmostrara la condicion de if en la consola "Usuario es mayor de Edad" 
    console.log("Usuario es mayor de Edad")
}else{
    console.log("Usuario no es mayor de Edad")
}

let clima = "nublado"
//si el clima es nublado usar chompa sino no usar chompa
if(clima=="nublado"){       //si es verdadero xq clima es nublado entonces se mostrara en consola la condicion de if "Usar chompa"
    console.log("Usar chompa")
}else{
    console.log("No usar chompa")
}

/*Si el usuario es mayor a 18 años es mayor de edad,
  si el usuario es mayor a 13 años es adolescente,
  si el usuario es menor a 13 años es niño.*/
let edad = -5

if (edad>=18){                           //esto es falso no se mostrara en consola
    console.log("Es mayor de edad")
}
else if(edad >=13){                      //esto es falso no se mostrara en consola
    console.log("Es adolescente")
}else if(edad >0){                       //esto es falso no se mostrara en consola
    console.log("Es niño")
}
else{                                    //esto es verdadero se mostrara en consola
    console.log("Esa edad no existe")
}

let nota = 15
//Si la nota es mayor o igual a 18 colocar excelente
//si la nota es mayor o igual a 16 colocar muy bien
//si la nota es mayor o igual a 14 colocar bien
//si la nota es  mayor o igual a 11 colocar debes mejorar
//si la nota es moyor o igual a 7 debes estdudiar
//si la nota es mayor a 2 debes pedir ayuda.

// Nota: Solo se ejecuta el primer bloque cuya condición sea verdadera.
// Si nota cumple varias condiciones verdadadera, solo se mostrará EL PRIMER BLOQUE (MENSAJE) VERDAERO QUE CUMPLA.

if(nota>=18){                            //esto es falso no se mostrara en consola
    console.log("Excelente")
}
else if(nota>=16){                       //esto es falso no se mostrara en consola
    console.log("Muy bien")
}
else if(nota>=14){                       //esto es verdadero se mostrara en consola
    console.log("Bien")
}
else if(nota>=11){                       //esto es verdadero PERO no se mostrara en consola xq la condicion anterior ya se cumplio
    console.log("Debes mejorar")
}
else if(nota>=7){                        //esto es verdadero PERO no se mostrara en consola xq la condicion anterior ya se cumplio
    console.log("Debes estudiar")          
}
else if(nota>=2){                        //esto es verdadero PERO no se mostrara en consola xq la condicion anterior ya se cumplio
    console.log("Debes pedir ayuda")
}

//OPERADORES LOGICOS "Y" (&&) "O" (||)
isRestaurantOpen = true
isMoney = false

/*ejemplo usando la &&*/ /*&&= si ambos son verdaderos entonces es verdadero, si alguno es falso entonces es falso*/
//Podemos comprar pizza                                   
if(isRestaurantOpen && isMoney){  //esto es falso xq isMoney es false, entonces se mostrara en consola la condicion de else "NO se puede comprar Pizza"
    console.log("Si puede comprar Pizza")
}else{
    console.log("NO se puede comprar Pizza")
}

isSabado=false
isDominigo=false
//si es sabado o domingo puedo salir a jugar, caso contrario debo ir a estudiar
if(isSabado || isDominigo){      //esto es falso xq isSabado e isDominigo son false, entonces se mostrara en consola la condicion de else "Debo ir a estudiar"
    console.log("Puedo salir a jugar")
}else{  
    console.log("Debo ir a estudiar")
}

//RETO 1
// Compara dos numeros y muestra cual es el mayor.
let num1 = 7;
let num2 = 7;

console.log(`Primer numero -> ${num1}`);
console.log(`Segundo numero -> ${num2}`);

if (num1 > num2) {
  console.log("El primer numero es el mayor.");
} else if (num2 > num1) {
  console.log("El segundo numero es el mayor.")
} else {
  console.log("Ambos numeros son iguales")
}
