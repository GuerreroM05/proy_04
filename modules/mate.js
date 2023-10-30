const math = {}; // Se inicializa un objeto vacío llamado 'math'

function add(a,b) { // Se define una función de suma que toma dos parámetros 'a' y 'b'
    return a + b; // Devuelve la suma de 'a' y 'b'
}

function substract(a,b) { // Se define una función de resta que toma dos parámetros 'a' y 'b'
    return a - b; // Devuelve la resta de 'a' y 'b'
}

function multiply(a,b){ // Se define una función de multiplicación que toma dos parámetros 'a' y 'b'
    return a * b; // Devuelve el producto de 'a' y 'b'
}

function divide(a,b){ // Se define una función de división que toma dos parámetros 'a' y 'b'
    if (b == 0){ // Comprueba si 'b' es igual a cero
        return "Error no se puede dividir entre cero"; // Devuelve un mensaje de error si 'b' es cero
    } else {
        return a / b; // Devuelve el cociente de 'a' dividido por 'b' si 'b' no es cero
    }  
}

function getRandomInt(max) { // Se define una función para generar un número entero aleatorio
    return Math.floor(Math.random() * max); // Devuelve un número aleatorio entre 0 y 'max - 1'
}

// Asigna las funciones definidas anteriormente como propiedades del objeto 'math'
math.add = add;
math.substract = substract;
math.multiply = multiply;
math.divide = divide;
math.getRandomInt = getRandomInt;

// Exporta el objeto 'math' para su uso en otros archivos de JavaScript mediante la declaración 'require'
module.exports = math;