class Persona{

    constructor(name, lname, age){

        this.name = name;
        this.lname = lname;
        this.age = age;

        this.datos = `Me llamo ${this.name} ${this.lname} y tengo ${this.age} años.`;
    }

    saludar(){
        return `Hola, me llamo ${this.nombre} y tengo ${this.age} año.`;
    }
}

const cesar = new Persona('Cesar', 'Ponce', 24);