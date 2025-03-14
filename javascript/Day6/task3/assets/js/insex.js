function testNumberArgument(number1, number2) {
    if (arguments.length != 2) {
        throw "must be 2 nums";
    } else return number1 + number2;
}

function sumNumbers(...args) {
    var sum = 0;
    if (arguments.length === 0) {
        throw "No parameters";
    }

    for (var i = 0; i < arguments.length; i++) {
        if (typeof args[i] !== "number") {
            throw `Invalid data type`;
        }
    }
    for (var i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}


console.log(testNumberArgument());
console.log(testNumberArgument(10, 5));
console.log(testNumberArgument(10, 5, 2));

console.log(sumNumbers(1, 2, 2));
console.log(sumNumbers(1, "2", 3));
console.log(sumNumbers());