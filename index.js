import inquirer from 'inquirer';
const answer = await inquirer.prompt([
    {
        type: "input",
        name: "first",
        message: 'Enter Your First Integer...',
    },
    {
        type: "input",
        name: "second",
        message: 'Enter Your First Integer...',
    },
    {
        type: "list",
        name: "Operation",
        choices: [
            'Addition',
            'Subtraction',
            'Multiplication',
            'Division'
        ],
    },
]);
if (answer.Operation === 'Addition') {
    console.log('Addition  = ', Number(answer.first) + Number(answer.second));
}
else if (answer.Operation === 'Subtraction') {
    console.log('Substraction  = ', Number(answer.first) - Number(answer.second));
}
else if (answer.Operation === 'Multiplication') {
    console.log('Multiplication  = ', Number(answer.first) * Number(answer.second));
}
else if (answer.Operation === 'Division') {
    console.log('Division  = ', Math.floor(Number(answer.first) / Number(answer.second)));
}
else {
    console.log('Better Luck Next time. Try Again');
}
