// Tipos de Datos

// String
let nombre : string = 'Nautilus';
const color: string = 'Rojo';

// Number
const tamano: number = 100;

// Boolean
const esRapido: boolean = true;

// Array
let lista: number[] = [1, 2, 3];
let lista2: Array<number> = [1, 2, 3];

// Tupla

// -- Declaramos el tipo de datos
let submarino :[
    string, 
    string,
    number|string,
    string
];
submarino = [
    "Nautilus", 
    "Azul", 
    500,
    "Modelo 1"
];
 
console.log("Los datos del submaribo son: ");
console.log(submarino);

// -- Declaración de tublas
let x: [string, number];

// -- Inicialización correcta
x = ["hello", 10]; // OK

// -- Inicialización incorrecta
// x = [10, "hello"]; // Error

console.log(x[0].substr(1));



// Enum

// -- sin asignación de valor
enum Color {Red, Green, Blue};
let colorEnum: Color = Color.Green;// 1

// -- Con asignación de valor
enum Color2 {Red = 1, Green = 2, Blue = 4};
let colorEnum2: Color = Color.Green; // 2

// -- También se puede acceder al nombre de los atributos
enum Color3 {Red = 1, Green, Blue};
let colorName: string = Color3[2];
console.log(colorName); // Green

// Any
let cualquierCosa: any = 4;
cualquierCosa = "maybe a string instead"; // typeof = string
cualquierCosa = false; // typeof = boolean

// Void
function naufragar(): void {
    console.log('Naufragar');
}

// Null
let n: null = null;

// Undefined
let u: undefined = undefined;


// entre otros tipos de datos ...