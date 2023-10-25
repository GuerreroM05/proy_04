//paquete importado
require("colors");

//referencia el modulo math a traves de la constante math 
const math = require("./modules/mate.js")

/*console.log(math);*/

const  main = async() => {
    console.clear();
    let a= (math.getRandomInt(10));
    let b=(math.getRandomInt(10));
    console.log("***************************************".blue);
    console.log("*     ".blue,"funciones matematicas".bgBlue,
    "     *".blue);
    console.log("***************************************\n".blue);
    console.log("***************************************".red);
    console.log("         numeros aleatorios: "+" a "+"b" );
    console.log("*******************************************\n".blue);


    console.log("*******************************************".blue);
    console.log("//".blue +"                                       "+" //".blue);
    console.log("//".blue +"        add:" + math.add(a,b) + "           "+"              //".blue);
    console.log("//".blue +"        substract:" + math.substract(a,b) +"      "+"            //".blue);
    console.log("//".blue +"        multiply:" + math.multiply (a,b) +"        "+"             //".blue);
    console.log("//".blue +"        divide:" + math.divide (a,b) + "            "+"     //".blue);       
    console.log("*******************************************\n".blue);
   
}

main();