/*const nombre = prompt("Ingrese su nombre");
console.log(nombre);*/
const edad = prompt("Ingrese su edad");
console.log(typeof edad); /*typeof es para saber que tipo de dato es*/

function esMayorDeEdad(x) {
    if (x > 18) {
        return true
    } else {
        return false
    }
}

 const resultado = esMayorDeEdad(edad);
console.log(resultado)