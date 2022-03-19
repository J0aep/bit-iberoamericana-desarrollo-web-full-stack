console.log("Hola");

/*let num = 6;

while (num < 11) {
    console.log(num);
    num ++;
}

//num = 0;

do{
    console.log("se ejecutá...")
}while (num < 5)*/

//ejemplo
num = 1
//11 pq recordadr que empieza a contar desde 0, creo q es por eso no se
while (num > 11) {
    const resto = num % 2;
    // ese porcentaje es el residuo de la divicion
    //incrememnta de a una unidad a ese valor
    //console.log("resto:", resto);
    //console.log(num + "%2 =" + resto);
    if (resto === 0) {
        console.log(num + "es un número par")
    } else{
        console.log(num + "es un número impar")
    }
    num ++;
}
