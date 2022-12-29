#! /usr/bin/env node

import inquirer from "inquirer";
import CC from 'currency-converter-lt2';
import Choice from "inquirer/lib/objects/choice.js";
import Choices from "inquirer/lib/objects/choices.js";
import { currencyCode } from "../node_modules/currency-converter-lt2/index.mjs";
let fromCurrency: any;
let toCurrency: any;
let amountToConvert: any;
let currencyCode: string;
// currencyCode = ["AFN", "ALL", "DZD", "AOA", "ARS", "AMD", "AWG", "AUD", "AZN", "BSD", "BHD", "BBD", "BDT", "BYN", "BZD", "BMD", "BTN", "XBT", "BOB", "BAM", "BWP", "BRL", "BND", "BGN", "BIF", "XPF", "KHR", "CAD", "CVE", "KYD", "FCFA", "CLP", "CLF", "CNY", "CNY", "COP", "CF", "CDF", "CRC", "HRK", "CUC", "CZK", "DKK", "DJF", "DOP", "XCD", "EGP", "ETB", "FJD", "GMD", "GBP", "GEL", "GHS", "GTQ", "GNF", "GYD", "HTG", "HNL", "HKD", "HUF", "ISK", "INR", "IDR", "IRR", "IQD", "ILS", "JMD", "JPY", "JOD", "KZT", "KES", "KWD", "KGS", "LAK", "LBP", "LSL", "LRD", "LYD", "MOP", "MKD", "MGA" , "MWK", "MYR", "MVR", "MRO", "MUR", "MXN", "MDL", "MAD", "MZN", "MMK", "NAD", "NPR", "ANG", "NZD", "NIO", "NGN", "NOK", "OMR", "PKR", "PAB", "PGK", "PYG", "PHP", "PLN", "QAR", "RON", "RUB", "RWF", "SVC", "SAR", "RSD", "SCR", "SLL", "SGD", "SBD", "SOS", "ZAR", "KRW", "VES", "LKR", "SDG", "SRD", "SZL", "SEK", "CHF", "TJS", "TZS", "THB", "TOP", "TTD", "TND", "TRY" , "TMT", "UGX", "UAH", "AED", "USD", "UYU", "UZS", "VND", "XOF", "YER", "ZMW", "ETH", "EUR", "LTC", "TWD", "PEN"]
// currencyCode.sort();

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
                    type: 'list',
                    name: 'fCurrency',
                    message: 'Please enter a currency FROM which u want to convert: ',
                    choices: [...currencyCode]
                }
            ])
    }
    await from();
    async function to() {
        toCurrency = await inquirer
            .prompt([
                {
                    type: 'list',
                    name: 'tCurrency',
                    message: 'Please enter a currency TO which u want to convert: ',
                    choices: [...currencyCode]
                }
            ])
    }
    await to();
    let aconvert: number
    async function amount() {
        amountToConvert = await inquirer
            .prompt([
                {
                    type: 'number',
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
    await currencyConverter.convert().then((response: number) => {
        console.log(amountToConvert.aconvert + " " + fromCurrency.fCurrency + " is equal to " +
            response + " " + toCurrency.tCurrency);
    });




}


async function startAgain() {
    do {
        await welcome()
        var again = await inquirer
            .prompt({
                type: 'input',
                name: 'restart',
                message: 'Do you want to convert again? Press y or n: '
            })
    } while (again.restart == 'y' || again.restart == 'Y' || again.restart == 'yes' || again.restart == 'YES');
}

await startAgain()






