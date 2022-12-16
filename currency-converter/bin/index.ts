#! /usr/bin/env node

import inquirer from "inquirer";
import CC from 'currency-converter-lt';
let fromCurrency: any;
let toCurrency: any;
let amountToConvert: any;

const sleep = () => {
    return new Promise((res) => {
        setTimeout(res, 3000);

    })
}

async function welcome() {
    async function from() {
        fromCurrency = await inquirer
        .prompt([
            {
                type: 'text',
                name: 'fCurrency',
                message: 'Please enter a currency FROM which u want to convert: '
            }
        ])
    }
    await from();
    async function to(){
        toCurrency = await inquirer
        .prompt([
            {
                type: 'text',
                name: 'tCurrency',
                message: 'Please enter a currency TO which u want to convert: '
            }
        ])
    }
    await to();
    let aconvert: number
    async function amount(){
        amountToConvert = await inquirer
        .prompt([
            {
                type: 'text',
                name: 'aconvert',
                message: 'Enter the amount you want to convert: '
            }
        ])
    }
    await amount();

    let currencyConverter = new CC(
        {
            from: fromCurrency.fCurrency,
            to: toCurrency.tCurrency,
            amount: amountToConvert.aconvert
        }
    );
    
        // await currencyConverter.convert()
        await currencyConverter.convert().then((response: number)=>{
            console.log(amountToConvert.aconvert + " " + fromCurrency.fCurrency + " is equal to " + 
            response + " " + toCurrency.tCurrency);
        });

        
    
}

await welcome();






