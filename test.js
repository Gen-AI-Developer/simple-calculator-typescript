import inquirer from 'inquirer';
async function calculate() {
    const answer = await inquirer.prompt([
        {
            type: "input",
            name: "first",
            message: 'Enter Your First Integer...',
        },
        {
            type: "input",
            name: "second",
            message: 'Enter Your Second Integer...',
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
        console.log('Subtraction  = ', Number(answer.first) - Number(answer.second));
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
    const app = await inquirer.prompt([
        {
            type: "list",
            name: "application",
            message: 'Do you want to perform another calculation?',
            choices: [
                'Yes',
                'No'
            ],
        },
    ]);
    if (app.application === 'Yes') {
        await calculate();
    }
    else if (app.application === 'No') {
        console.log('Thanks For Using This Application');
    }
}
calculate();
