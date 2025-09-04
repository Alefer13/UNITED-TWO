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

let person1 = new Person("Alexandra", "Fernandez", 19, 1.60, 57 ,  [
    "bailar", 
    "hacer ejercicio",
    "cantar"
] , 3133445566);
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




