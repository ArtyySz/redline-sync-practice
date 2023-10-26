const readlineSync = require('readline-sync');
const celsiusToFahrenheit = () => {
    const celsius = readlineSync.question("Введите температуру в градусах цельсия: ")
    return (celsius * 9/5) + 32;
};
console.log(celsiusToFahrenheit());