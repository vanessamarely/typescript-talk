//interface
interface Pez {
	nombre: string; 
}


// type
type PezValiente = {
	nombre: string; 
} 
type PezAmigable = string; 

type Nombre = string;
type CualidadPez = PezValiente | PezAmigable;

/*-- los Type alias no solo pueden ser tipos de datos generícos, 
también se pueden utilizar parametros como por ejemplo: */
type Container<T> = { value: T };

// -- también puede hacer referencia a sí mismo:
type Tree<T> = {
    value: T;
    left: Tree<T>;
    right: Tree<T>;
}

// Genéricos
function test<T>(arg: T) : T {
    return arg;
}

let a = test<number>(1); // El typeof es Number
let b = test<String>("Hola mundo"); // El typeof es String

