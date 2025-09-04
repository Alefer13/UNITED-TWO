//SWITCH CASE

let numDay=5
let nomDay 
/* Averiguar el dia de la semana, sabiendo que 
1 -> lunes
2 -> martes
3 -> miercoles
4 -> jueves
5 -> viernes
otro -> fin de semana
*/
switch (numDay) {
    case 1:                      //recuerda que los numeros se escriben sin comillas pero los textos o letras van entre comillas.
        nomDay="Lunes"
        break;
    case 2:
        nomDay="Martes"
        break;
    case 3:
        nomDay="Miercoles"  
        break;
    case 4:
        nomDay="Jueves"  
        break;
    case 5:
        nomDay="Viernes"  
        break;
    default:                     //"default" es el caso por defecto si ninguna opción coincide.
        nomDay="Fin de semana"  
}
console.log(nomDay)

/*En una maquina expendedora de bedidas se tienen opciones:
 A -> Cafe
 B -> Te
 C -> Cocoa
 D -> Leche
*/

let opcion="A"
let bebida
switch (opcion){
    case "A":                   //recuerda que los numeros se escriben sin comillas pero los textos o letras van entre comillas.
        bebida="Cafe"
        break;
    case "B":
        bebida="Te"
        break;
    case "C":
        bebida="Cocoa"  
        break;
    case "D":
        bebida="Leche"  
        break;
    default:                     //"default" es el caso por defecto si ninguna opción coincide.
        bebida="Opcion no valida"  
}
console.log(bebida)

let clima="lluvioso"
switch (clima){
    case "soleado":
        console.log("Vamos a salir")
        break;
    case "nublado":
        console.log("Vamos a salir pero con abrigo")
        break;
    case "lluvioso":
        console.log("No vamos a salir")
        break;
    default:                     //"default" es el caso por defecto si ninguna opción coincide.
        console.log("Tipo de clima desconocido")  
        break;
}

/* Determinar que es:
caso 1: niño es menor a 12 años
caso 2: adolecente entre 12 y 19 años
caso 3: adulto entre 18 y 60 años
default: adulto mayor mayor de 60 años
*/
let edad=19

switch (true){                        //Usamos "true" para que cada case sea una condicion logica.
                                      // NOTA: Usar switch(true) cuando los case son condiciones lógicas.
    case edad<12:
        console.log("Niño")
        break;
    case edad>=12 && edad<=19:    //&& Solo si ambas condiciones se cumplen, entra en ese case.
        console.log("Adolecente")
        break;
    case edad>=18 && edad<=60:    //&& Solo si ambas condiciones se cumplen, entra en ese case.
        console.log("Adulto")
        break;
    default:                     //"default" es el caso por defecto si ninguna opción coincide.
        console.log("Adulto mayor")  
        break;
}

// Creamos un programa que muestre el nombre de un mes de acuerdo a su numero
let numeroMes = 18;

switch (numeroMes) {
  case 1:
    console.log("Enero");
    break;
  case 2:
    console.log("Febrero");
    break;
  default:
    console.log("VALOR NO VALIDO.");
}



