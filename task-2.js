import readline from 'node:readline/promises';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const answer = Math.floor(Math.random() * 100);
console.log('Загаданое число от 0 до 100');

rl.on('line', (input) => {
    const inputNumber = Number(input);

    if (inputNumber === answer) {
        console.log(`Отгаданое число ${answer}`);
        rl.close();
    } else if (inputNumber > answer) {
        console.log('Меньше');
    } else if (inputNumber < answer) {
        console.log('Больше');
    } else {
        console.log(`Число не введено`);
    }
});