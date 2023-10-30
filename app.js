//paquete importado
require("colors");

//referencia el modulo math a traves de la constante math 
const math = require("./modules/mate.js")

/*console.log(math);*/
// Definición de la función principal como una función asíncrona
const  main = async() => {
    console.clear(); // Limpia la consola

    // Genera dos números aleatorios utilizando la función getRandomInt del objeto math
    let a= (math.getRandomInt(10)); // Genera el primer número aleatorio
    let b=(math.getRandomInt(10)); // Genera el segundo número aleatorio

    // Imprime una serie de líneas de asteriscos en azul
    console.log("***************************************".blue);
    console.log("*     ".blue,"funciones matematicas".bgBlue,
    "     *".blue);
    console.log("***************************************\n".blue);
    console.log("***************************************".red);

    // Imprime los valores de los números aleatorios generados
    console.log("         numeros aleatorios: "+ a + " " + b );
    console.log("*******************************************\n".blue);

    // Imprime una serie de líneas de asteriscos en azul
    console.log("*******************************************".blue);

    // Imprime líneas que muestran las operaciones matemáticas con los números aleatorios generados
    console.log("//".blue +"                                       "+" //".blue);
    console.log("//".blue +"        add:" + math.add(a,b) + "           "+"              //".blue); // Imprime la suma de los números aleatorios
    console.log("//".blue +"        substract:" + math.substract(a,b) +"      "+"            //".blue); // Imprime la resta de los números aleatorios
    console.log("//".blue +"        multiply:" + math.multiply (a,b) +"        "+"             //".blue); // Imprime el producto de los números aleatorios
    console.log("//".blue +"        divide:" + math.divide (a,b) + "            "+"     //".blue);       // Imprime el cociente de los números aleatorios, maneja la división entre cero

    // Imprime una serie de líneas de asteriscos en azul
    console.log("*******************************************\n".blue);
}

// Ejecuta la función principal
main();