const math = {};

function add(a,b) {
    return a + b;
}

function substract(a,b) {
    return a - b;
}

function multiply(a,b){
    return a * b;
}

function divide(a,b){
    if (b == 0){
        return "Error no se puede dividir entre cero";
    }else {
        return a / b;
    }
    
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

math.add = add;
math.substract = substract;
math.multiply = multiply;
math.divide = divide;
math.getRandomInt = getRandomInt;

module.exports = math;