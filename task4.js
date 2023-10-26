const readlineSync = require('readline-sync');
const calculateRectangleProperties = () => {
    const width = readlineSync.question("Ширина: ");
    const height = readlineSync.question("Высота: ");
    return [width * height, 2*width+2*height]
};
console.log(calculateRectangleProperties());