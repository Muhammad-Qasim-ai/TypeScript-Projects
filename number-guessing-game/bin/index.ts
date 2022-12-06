#! /usr/bin/env node

import inquirer from "inquirer";
import chalkAnimation from "chalk-animation";
import chalk from "chalk";

const sleep = () => {
    return new Promise((res) => {
        setTimeout(res, 3000);
    })
}


async function welcome() {
    let neonTitle = chalkAnimation.neon('--------------Welcome to Number Guessing Game----------------')
    await sleep();
    neonTitle.stop();
}

await welcome();



async function askNumber(input: number) {
    await inquirer
    .prompt([
        {
            type: 'number',
            name: 'userInput',
            message: 'Enter a number'
        }
    ])
    .then((answer) => {
        if (answer.userInput === input) {
            console.log("You guessed Correct");
        } else {
            console.log(`You Failed, The number Was ${genNumber}`);
        }
    })
}   
let genNumber = Math.floor(Math.random() * 10)

async function startAgain() {
    do {
        await askNumber(genNumber);
        var again = await inquirer
        .prompt({
            type: 'input',
            name: 'restart',
            message: 'Do you want to continue press y/n'
        })
    } while (again.restart == 'y' || again.restart == 'yes' || again.restart == 'Yes' || again.restart == 'YES');
}

await startAgain();






