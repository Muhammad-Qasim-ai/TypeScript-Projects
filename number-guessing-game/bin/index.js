import inquirer from "inquirer";
import chalkAnimation from "chalk-animation";
const sleep = () => {
    return new Promise((res) => {
        setTimeout(res, 3000);
    });
};
async function welcome() {
    let neonTitle = chalkAnimation.neon('Welcone to Number Guessing Game');
    await sleep();
    neonTitle.stop();
}
await welcome();
let genNumber = Math.floor(Math.random() * 10);
async function askNumber(input) {
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
        }
        else {
            console.log(`You Failed, The number Was ${genNumber}`);
        }
    });
}
askNumber(genNumber);
