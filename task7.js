const readlineSync = require('readline-sync');
const countWords = () => {
    const sentence = readlineSync.question("Введите текст: ");
    return sentence.split(" ").length;
};
console.log(countWords());