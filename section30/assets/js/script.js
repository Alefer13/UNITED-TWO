//OBJETOS en javascript
/*ejemplo de un objeto de persona*/

let person = {
    name: "Alexandra Fernández",
    age: 25,
    cellphone: "902191846",                              // con comillas a pesar de ser numeros
    hobbies: ["pasear", "leer", "cocinar"],

};
console.log(person);

/* Accediendo al valor de los atributos de mi objeto,
hay 2 formas: */
//acceder con notacion de punto
console.log(person.name);
console.log(person.age);
console.log(person.cellphone);
console.log(person.hobbies);

//acceder con notacion de corchetes
console.log(person["name"]);
console.log(person["age"]);
console.log(person["cellphone"]);
console.log(person["hobbies"]);

//Mostrar todos los atributos de tu objeto
console.log(person.cellphone);
console.log(person.hobbies);
console.log(person.hobbies[0]);
console.log(person.hobbies[1]);

//Actualizar el valor de un objeto
person.cellphone = "93388810";
console.log(person.cellphone);
person.age = 19;
console.log(person.age);

//Agregar un nuevo atributo
person.birthday = "13-02-2006";
person.hobbies = "jugar voleyball";
console.log(person.birthday);
console.log(person.hobbies);

//JSON - JavaScript Object Notation

let heroes = {
    squadName: "Super hero squad",
    homeTown: "Metro City",
    formed: 2016,
    secretBase: "Super tower",
    active: true,
    members: [ 
      {
        name: "Molecule Man",
        age: 29,
        secretIdentity: "Dan Jukes",
        powers: ["Radiation resistance","Turning tiny","Radiation blast" ]
      },
      {
        name: "Madame Uppercut",
        age: 39,
        secretIdentity: "Jane Wilson",
        powers: ["Million tonne punch", "Damage resistance", "Superhuman reflexes" ]
      },
      {
        name: "Eternal Flame",
        age: 1000000,
        secretIdentity: "Unknown",
        powers: [  "Immortality", "Heat Immunity",  "Inferno", "Teleportation",  "Interdimensional travel"   ]
      }
    ]
  }

  console.log(heroes);
  console.log(heroes.formed); //mostrar el valor 2016
  console.log(heroes.active);

  //Mostrar el atributo
  console.log(heroes.members);

  //Indexar heroes.members
  console.log("Primer elemento de heroes.members :");
  //como es un arreglo, lo puedo indexar
  console.log(heroes.members[0]);
  //iacceder a los atributos de heroes.members[0] ya q es un objeto
  console.log(heroes.members[0].name);
  console.log(heroes.members[0].secretIdentity);
  //heroes.members[0].powers es un arreglo, puedo indexar
  console.log(heroes.members[0].powers[1]);

  








