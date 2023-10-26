
const readlineSync = require('readline-sync');
const calculateTime = () => {
    const distance = readlineSync.question("Дистанция: ");
    const speed = readlineSync.question("Скорость: ");
    const min = distance * 60 / speed; 
    return `Время в пути ${Math.floor(min / 60)}ч. ${min % 60}м.`; 
};
console.log(calculateTime());