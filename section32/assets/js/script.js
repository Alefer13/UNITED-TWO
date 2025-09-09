//PROGRAMACION ORIENTADA A OBJETOS:

/* Sintaxis:

class NombreClase {                           //comienza en Mayuscula y sigue con camelCase
    constructor(atributo1, atributo2) {
        this.atributo1 = atributo1;
        this.atributo2 = atributo2;
    }
    metodo1() {
        //codigo del metodo...
    }
}
*/

/*Ejemplo:
Creamos una clase de persona con atributos .
*/

class Person {
    #cellphone;   //encapsulamiento #nombreAtributo van antes del método constructor.

    constructor(firstName, lastName, age, height , weight , hobbies , cellphone) {    //estos son los atributos de la clase
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.height = height;
        this.weight = weight;
        this.hobbies = hobbies;
        this.#cellphone = cellphone;     //Encapsulamiento: #nombreAtributo privado(protegido)
    }
    sayHello(){
        console.log("Holi desde el método!")
    } 
    
    presentar(){                        //usando los atributos
        console.log (`Hola buenas noches, \nme llamo ${this.firstName} ${this.lastName} , tengo ${this.age} años , mi altura es ${this.height} y mi peso es ${this.weight}, mis hobbies son ${this.hobbies}.`);
    }
    showCellphone(){                   //Mostrando un atributo protegido con return.
        return this.#cellphone;
    }
}

// Instanciar un objeto, usamos la palabra reservada new
// let nombreObjeto = new NombreClase(atributo1, atributo2, ...);
// Almacenamos ese objeto en una variable.
let person1 = new Person("Alexandra", "Fernandez", 19, 1.60, 57 , [
    "bailar", 
    "hacer ejercicio",
    "cantar"] , "905191846");
console.log(person1);

//accediendo a los atributos (mostrando los atributos del constructor)
console.log(person1.firstName);
console.log(person1.hobbies);

//Llamando a un método
person1.sayHello();
person1.presentar();

//Mostrando un atributo protegido. desde un metodo.
/* si pones console.log(person1.#cellphone); te da error porque no se puede acceder a un atributo privado.
   si pones console.log(person1.cellphone); te da undefined en la consola
*/
console.log(person1.showCellphone());   //asi si se mostrara en la consola. 


/*HERENCIA:
Es la capacidad de una clase de poder heredar los atributos y metodos de la otra. Clase Padre -> Clase Hija */

// Vamos a crear una clase hija a partir de la clase Person
// Ejemplo
// Crea una clase de Chef a partir de Person
class Chef extends Person {
    // Si yo quiero agregar mas atributos, debo escribir el constructor de la siguiente manera
    // Debe contener TODOS los atributos de la clase padre
    constructor(firstName, lastName, age, height,weight, hobbies, cellphone, restaurant, favoriteFood){
        super(firstName, lastName, age, height, weight, hobbies, cellphone);      // Primero pasas los atributos a la clase padre -> super();

        this.restaurant = restaurant;              // Luego de super(); agregas tus atributos nuevos (restaurant, favoriteFood). ESTOS NUEVOS ATRIBUTOS NO SE PASAN A LA CLASE PADRE
        this.favoriteFood = favoriteFood;
    }
    introduce() {
        console.log( `Hola me llamo ${this.firstName} ${this.lastName} y soy chef en el restaurante ${this.restaurant}.` );
    }
    cook() {
        console.log( `El chef ${this.lastName} esta cocinando ${this.favoriteFood}...` );
    }
}
// Instanciamos un objeto de Chef
let chef1 = new Chef("Alfredo","Linguini", 24, 1.61, 65,
  ["Cocinar", "Lavar platos"],
  "987654321",
  "Guestau",
  "Lasagna"
);

console.log(chef1.firstName);
console.log(chef1.favoriteFood);
chef1.sayHello();
chef1.introduce();
chef1.cook();





