#! /usr/bin/env node

import chalkAnimation from "chalk-animation";
import inquirer from "inquirer";
import chalk from "chalk";
// import { stringify } from "querystring";
let userBalance: number;
// let name1: any;


const sleep = () => {
    return new Promise((res) => {
        setTimeout(res, 2000);
    })
}
const sleepFast = () => {
    return new Promise((res) => {
        setTimeout(res, 500);
    })
}

async function welcome() {
    console.log(`
    ███╗   ███╗██╗   ██╗██╗  ██╗ █████╗ ███╗   ███╗███╗   ███╗ █████╗ ██████╗      ██████╗  █████╗ ███████╗██╗███╗   ███╗     █████╗ ████████╗███╗   ███╗
    ████╗ ████║██║   ██║██║  ██║██╔══██╗████╗ ████║████╗ ████║██╔══██╗██╔══██╗    ██╔═══██╗██╔══██╗██╔════╝██║████╗ ████║    ██╔══██╗╚══██╔══╝████╗ ████║
    ██╔████╔██║██║   ██║███████║███████║██╔████╔██║██╔████╔██║███████║██║  ██║    ██║   ██║███████║███████╗██║██╔████╔██║    ███████║   ██║   ██╔████╔██║
    ██║╚██╔╝██║██║   ██║██╔══██║██╔══██║██║╚██╔╝██║██║╚██╔╝██║██╔══██║██║  ██║    ██║▄▄ ██║██╔══██║╚════██║██║██║╚██╔╝██║    ██╔══██║   ██║   ██║╚██╔╝██║
    ██║ ╚═╝ ██║╚██████╔╝██║  ██║██║  ██║██║ ╚═╝ ██║██║ ╚═╝ ██║██║  ██║██████╔╝    ╚██████╔╝██║  ██║███████║██║██║ ╚═╝ ██║    ██║  ██║   ██║   ██║ ╚═╝ ██║
    ╚═╝     ╚═╝ ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝     ╚═╝╚═╝     ╚═╝╚═╝  ╚═╝╚═════╝      ╚══▀▀═╝ ╚═╝  ╚═╝╚══════╝╚═╝╚═╝     ╚═╝    ╚═╝  ╚═╝   ╚═╝   ╚═╝     ╚═╝`);

    async function userId() {
         let ask = await inquirer
        .prompt([
            {
                type: 'input',
                name: 'userIdInput',
                message: 'Enter Your User ID'
            },
            {
                type: 'password',
                name: 'PIN',
                message: 'Enter Your 4 Digit PIN Code'
            }
        ])
        .then(async (answers) => {
            // Use user feedback for... whatever!!
            let name1 = answers.userIdInput
            if (answers.PIN.length != 4) {
                console.log('INVALID PIN, PLEASE ENTER YOUR ACCOUNT HOLDER NAME AND PIN AGAIN');
                await welcome();
            } else {
                // await options();
                
            }
        })
    }
    await userId();
}

// await welcome();


async function balance(){
    console.log(`Your Account Balance is : ${userBalance}`);
    
}

async function deposit(){
    
    let userDeposit = await inquirer
    .prompt([
        {
            type: 'number',
            name: 'depositAmount',
            message: 'Insert the amount u want to deposit'
        }   
    ])
        if (userDeposit.depositAmount !== 0) {
            userBalance = userBalance + userDeposit.depositAmount;
            console.log(`
             █████╗ ███╗   ███╗ ██████╗ ██╗   ██╗███╗   ██╗████████╗    ██████╗ ███████╗██████╗  ██████╗ ███████╗██╗████████╗███████╗██████╗ 
            ██╔══██╗████╗ ████║██╔═══██╗██║   ██║████╗  ██║╚══██╔══╝    ██╔══██╗██╔════╝██╔══██╗██╔═══██╗██╔════╝██║╚══██╔══╝██╔════╝██╔══██╗
            ███████║██╔████╔██║██║   ██║██║   ██║██╔██╗ ██║   ██║       ██║  ██║█████╗  ██████╔╝██║   ██║███████╗██║   ██║   █████╗  ██║  ██║
            ██╔══██║██║╚██╔╝██║██║   ██║██║   ██║██║╚██╗██║   ██║       ██║  ██║██╔══╝  ██╔═══╝ ██║   ██║╚════██║██║   ██║   ██╔══╝  ██║  ██║
            ██║  ██║██║ ╚═╝ ██║╚██████╔╝╚██████╔╝██║ ╚████║   ██║       ██████╔╝███████╗██║     ╚██████╔╝███████║██║   ██║   ███████╗██████╔`);
            
            console.log(`Your New Account Balance is: ${userBalance}`);
            
        }
        
    
}
async function withdraw(){
    let userWithdraw = await inquirer
    .prompt([
        {
            type: 'number',
            name: 'withdrawAmount',
            message: 'Insert the amount u want to Withdraw'
        }
    ])
        if (userWithdraw.withdrawAmount <= userBalance){
            userBalance = userBalance - userWithdraw.withdrawAmount;
            console.log(` 
             █████╗ ███╗   ███╗ ██████╗ ██╗   ██╗███╗   ██╗████████╗    ██╗    ██╗██╗████████╗██╗  ██╗██████╗ ██████╗  █████╗ ██╗    ██╗███╗   ██╗
            ██╔══██╗████╗ ████║██╔═══██╗██║   ██║████╗  ██║╚══██╔══╝    ██║    ██║██║╚══██╔══╝██║  ██║██╔══██╗██╔══██╗██╔══██╗██║    ██║████╗  ██║
            ███████║██╔████╔██║██║   ██║██║   ██║██╔██╗ ██║   ██║       ██║ █╗ ██║██║   ██║   ███████║██║  ██║██████╔╝███████║██║ █╗ ██║██╔██╗ ██║
            ██╔══██║██║╚██╔╝██║██║   ██║██║   ██║██║╚██╗██║   ██║       ██║███╗██║██║   ██║   ██╔══██║██║  ██║██╔══██╗██╔══██║██║███╗██║██║╚██╗██║
            ██║  ██║██║ ╚═╝ ██║╚██████╔╝╚██████╔╝██║ ╚████║   ██║       ╚███╔███╔╝██║   ██║   ██║  ██║██████╔╝██║  ██║██║  ██║╚███╔███╔╝██║ ╚████║
            ╚═╝  ╚═╝╚═╝     ╚═╝ ╚═════╝  ╚═════╝ ╚═╝  ╚═══╝   ╚═╝        ╚══╝╚══╝ ╚═╝   ╚═╝   ╚═╝  ╚═╝╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝ ╚══╝╚══╝ ╚═╝  ╚═══╝`);

            console.log(`Your New Account Balance is: ${userBalance}`);

            async function reciept() {
                await inquirer
            .prompt([
                {
                    type: 'list',
                    name: 'withdrawReciept',
                    message: 'Do you want Reciept ',
                    choices: ['Yes', 'No']
                }
            ])
                if (userWithdraw.withdrawReciept = 'Yes'){
                    console.log(`
                --------------------------------
                    WithDrawal Receipt           
                --------------------------------
                    Amount Withdrawn: ${userWithdraw.withdrawAmount}
                --------------------------------
                    Available Balance: ${userBalance}
               `);
                    
                }else{

                }
        }
         await reciept();   
        }else {
            console.log('Operation Failed, Insufficient funds');
            await options();
        }

}



async function options() {
    let askOperation = await inquirer
    .prompt([
        {
            type: 'list',
            name: 'operation',
            message: 'What Operation You Want to do: ',
            choices: ['Balance', 'Deposit', 'Withdraw']
        }
    ])
    
        if (askOperation.operation === 'Balance') {
            await balance();
        }else if (askOperation.operation === 'Deposit') {
            await deposit();
        }else if (askOperation.operation === 'Withdraw') {
            await withdraw();
            
            
        }
    
}


userBalance = Math.floor(Math.random() *10000)
async function startAgain() {
    await welcome();
    do {
        await options()
        var again = await inquirer
        .prompt({
            type: 'input',
            name: 'restart',
            message: 'Do you want to continue Using ATM ? Press y or n: '
        })
    } while (again.restart == 'y' || again.restart == 'Y' || again.restart == 'yes' || again.restart == 'YES');
}

await startAgain()