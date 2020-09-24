// Ejemplo de Clase - que muestra error
/*class Submarino {
    nombre: string;
    mostrarNombre():void {
        console.log('Nombre', this.nombre);
    }
}*/


// Ejemplo de Clase con constructor
class Submarino {
    nombre: string;
    constructor(nuevoNombre:string){
        this.nombre = nuevoNombre;
    }
    mostrarNombre():void {
        console.log('Nombre', this.nombre);
    }
}

const objeto1 = new Submarino('Nautilus');
objeto1.mostrarNombre();


// Ejemplo de Clase con encapsulamiento
class Submarino2 {
    private color: string;

    constructor(color: string){
        this.color = color;
    }
}

class Sub3 {
    private color: string;
    constructor(color: string) {
      this.color = color;
    }
}

let sub2 = new Submarino2('azul');
let sub3 = new Sub3('azul');
// sub2 = sub3;


// Ejemplo de Clase con herencia
class Delta extends Submarino {
    abrirEscotilla():void {
        console.log('Abrir Escotilla');
    }
}

const delta = new Delta('D5');
delta.mostrarNombre(),
delta.abrirEscotilla();

// Ejemplo de Clase con polimorfismo

class Submarino3 {
    nombre: string;
    color: string;
    constructor(nuevoNombre:string, color: string){
        this.nombre = nuevoNombre;
        this.color = color;
    }
}

class Delta2 extends Submarino3 {
    abrirEscotilla():void {
        console.log('Abrir Escotilla');
    }
}

class Vanguard extends Submarino3 {
}

function getColor( submarino: Submarino3){
    console.log(submarino.color);
}

const delta2 = new Delta2('D5', 'azul');
const vanguard = new Vanguard('D5', 'azul');
getColor(delta2);
getColor(vanguard);

/* si en el tipo de la funcion colocamos otra clase como Delta2
    se obtiene un error, funcionaria si Delta2 y vanguard compartieran
    las mismas propiedades y métodos, para evitarlo se trabaja con la clase
    de la cual ambos heredan (sería la base para ambos)
*/
