// estructuras de datos
const arreglo = ["amarillo", "azul", "rojo"]

var variable1 = "Var"
let variable2 = "Let"
const constante = "Const"

// Ciclos
    
for (let index = 0; index < arreglo.length; index++) {
    //console.log(index)
    console.log(arreglo)
    // poniendo "arreglo" me va a imprimir la estructura tal cual como la puse
    // si yo quisiera imprimir los valores que puse yo tocaria poner: console.log(index1);
}

/*for (let index = 0; index < 100.length; index++) {
    console.log("hola")
}
ahi lo ejecutaria 100 veces, pero como lo puse solo lo ejecuta 3 veces porque el arreglo vale 3
*/
console.log(arreglo[1])
//se empieza a contar desde 0 importante

//Condicionales
const edad = 20;
if (edad > 18) {
 //console.log("Es mayor de edad");   
} else {
    //console.log("No es mayor de edad");
}

//Ejemplo
/* const name es diferente a const Name y a const NAME IMPORTANTE*/ 
/*const paises = ["Colombia", "Francia", "Senegal"]
 for (let index = 0; idex < paises.length; index++) {
   if (paises[index] === "Colombia") {
       console.log("es Colombia");
   } else (paises[index] === "Francia") {
       console.log("es Francia")
   }*/

   //operadores
const name = "Pepito"
const apellido = "Pérez"

//const concatenar = name + apellido;
const concatenar = name + apellido + edad
console.log(concatenar)

const num1 = "1";
const num2 = 1;

const suma1 = num1 + num2;
console.log(suma1)
//concatenar=juntar
   //const suma = 2+2
   //console.log(suma);

// funciones
//en esta primera manera de funcion primero puedo llamarla antes de declararla, en la segunda forma de declarar no puedo intecambiar esos procesos.
function mifuncion1() {
    console.log("ejecutando mifuncion1");
}
//este proceso es 1. declarar 2. llamar la funcion
mifuncion1();

const mifuncion2 = () => {
    console.log("ejecutando mifuncion2");
}

mifuncion2();
//ambas son maneras de declarar funciones

//funciones que reciben argumentos
function operar(val1, val2, operacion)  {
    //console.log(val1, val2, operacion);
    /*if (operacion === "suma") {
        console.log(val1 + val2);        
    }*/
    switch (operacion) {
        case "suma":
            console.log(val1 + val2);
            break;
            case "resta":
                console.log(val1 - val2);
            /*break;
            case "multiplicacion":
                console.log(val1 * val2)
            break;*/ //en este caso no valdria porque "multiplicacion" no está contemplada en las opciones yo puse "multiplicar"    
        default:
            console.log("esta operacion no está contemplada")
            break;
    }
}

operar (8, 6, "suma"); 
operar (8, 6, "resta");
operar (8, 6, "multiplicar");