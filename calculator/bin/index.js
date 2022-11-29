#! /usr/bin/env node
import inquirer from "inquirer";
import chalkAnimation from "chalk-animation";
const sleep = () => {
    return new Promise((res) => {
        setTimeout(res, 3000);
    });
};
async function welcome() {
    let neonTitle = chalkAnimation.neon('Lets start Calculation'); //start
    await sleep();
    neonTitle.stop();
    console.log(`    
    |  _________________  |
    | | JO           0. | |
    | |_________________| |
    |  ___ ___ ___   ___  |
    | | 7 | 8 | 9 | | + | |
    | |___|___|___| |___| |
    | | 4 | 5 | 6 | | - | |
    | |___|___|___| |___| |
    | | 1 | 2 | 3 | | x | |
    | |___|___|___| |___| |
    | | . | 0 | = | | / | |
    | |___|___|___| |___| |
    |_____________________|`);
}
await welcome();
async function askQuestion() {
    await inquirer
        .prompt([
        /* Pass your questions in here */
        {
            type: 'list',
            name: 'operator',
            message: 'Which Operation do u want',
            choices: ["Addition", "Subraction", "Multiplication", "Division"]
        },
        {
            type: "number",
            name: "num1",
            message: "Insert number 1: "
        },
        {
            type: "number",
            name: "num2",
            message: "Insert number 2: "
        }
    ])
        .then((answer) => {
        // Use user feedback for... whatever!!
        // console.log(answer);
        if (answer.operator == "Addition") {
            console.log(`${answer.num1} + ${answer.num2} = ${answer.num1 + answer.num2}`);
        }
        else if (answer.operator == "Subraction") {
            console.log(`${answer.num1} - ${answer.num2} = ${answer.num1 - answer.num2}`);
        }
        else if (answer.operator == "Multiplication") {
            console.log(`${answer.num1} * ${answer.num2} = ${answer.num1 * answer.num2}`);
        }
        else if (answer.operator == "Division") {
            console.log(`${answer.num1} / ${answer.num2} = ${answer.num1 / answer.num2}`);
        }
    });
    //   .catch((error) => {
    //     if (error.isTtyError) {
    //       // Prompt couldn't be rendered in the current environment
    //     } else {
    //       // Something else went wrong
    //     }
    //   });
}
// askQuestion();
async function startAgain() {
    do {
        await askQuestion();
        var again = await inquirer
            .prompt({
            type: 'input',
            name: 'restart',
            message: 'Do ypu want to continue? Press y or n: '
        });
    } while (again.restart == 'y' || again.restart == 'Y' || again.restart == 'yes' || again.restart == 'YES');
}
startAgain();
