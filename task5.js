const readlineSync = require('readline-sync');
const calculateDistance = () => {
    const x1 = readlineSync.question("Координат x1: ");
    const y1 = readlineSync.question("Координат y1: ");
    const x2 = readlineSync.question("Координат x2: ");
    const y2 = readlineSync.question("Координат y2: ");
    return Math.sqrt((x2 - x1)**2 + (y2 - y1)**2);
};
console.log(calculateDistance());