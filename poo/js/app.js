"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Ejemplo de Clase - que muestra error
/*class Submarino {
    nombre: string;
    mostrarNombre():void {
        console.log('Nombre', this.nombre);
    }
}*/
// Ejemplo de Clase con constructor
var Submarino = /** @class */ (function () {
    function Submarino(nuevoNombre) {
        this.nombre = nuevoNombre;
    }
    Submarino.prototype.mostrarNombre = function () {
        console.log('Nombre', this.nombre);
    };
    return Submarino;
}());
var objeto1 = new Submarino('Nautilus');
objeto1.mostrarNombre();
// Ejemplo de Clase con encapsulamiento
var Submarino2 = /** @class */ (function () {
    function Submarino2(color) {
        this.color = color;
    }
    return Submarino2;
}());
var Sub3 = /** @class */ (function () {
    function Sub3(color) {
        this.color = color;
    }
    return Sub3;
}());
var sub2 = new Submarino2('azul');
var sub3 = new Sub3('azul');
// sub2 = sub3;
// Ejemplo de Clase con herencia
var Delta = /** @class */ (function (_super) {
    __extends(Delta, _super);
    function Delta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Delta.prototype.abrirEscotilla = function () {
        console.log('Abrir Escotilla');
    };
    return Delta;
}(Submarino));
var delta = new Delta('D5');
delta.mostrarNombre(),
    delta.abrirEscotilla();
// Ejemplo de Clase con polimorfismo
var Submarino3 = /** @class */ (function () {
    function Submarino3(nuevoNombre, color) {
        this.nombre = nuevoNombre;
        this.color = color;
    }
    return Submarino3;
}());
var Delta2 = /** @class */ (function (_super) {
    __extends(Delta2, _super);
    function Delta2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Delta2.prototype.abrirEscotilla = function () {
        console.log('Abrir Escotilla');
    };
    return Delta2;
}(Submarino3));
var Vanguard = /** @class */ (function (_super) {
    __extends(Vanguard, _super);
    function Vanguard() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Vanguard;
}(Submarino3));
function getColor(submarino) {
    console.log(submarino.color);
}
var delta2 = new Delta2('D5', 'azul');
var vanguard = new Vanguard('D5', 'azul');
getColor(delta2);
getColor(vanguard);
/* si en el tipo de la funcion colocamos otra clase como Delta2
    se obtiene un error, funcionaria si Delta2 y vanguard compartieran
    las mismas propiedades y métodos, para evitarlo se trabaja con la clase
    de la cual ambos heredan (sería la base para ambos)
*/
