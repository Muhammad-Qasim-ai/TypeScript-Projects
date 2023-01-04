#! /usr/bin/env node
import inquirer from "inquirer";
let totalWords = 0;
async function count() {
    let result = await inquirer.prompt([
        {
            type: 'text',
            name: 'count',
            message: "Enter the text: "
        }
    ]);
    for (let i = 0; i < result.count.length; i++) {
        if (result.count[i] === ' ') {
            totalWords += 1;
        }
    }
    totalWords += 1;
    let totalCharacters = result.count.length;
    for (let i = 0; i < result.count.length; i++) {
        if (!(result.count[i] != ' ')) {
            totalCharacters = totalCharacters - 1;
        }
    }
    // if there is no text
    if (result.count.length === 0) {
        totalWords = 0;
    }
    console.log(`Total Words: ${totalWords}`);
    console.log(`Total Characters (without whitespaces): ${totalCharacters}`);
    console.log(`Total Characters (with whitespaces): ${result.count.length}`);
}
async function Again() {
    console.log(`
    
 ██╗    ██╗ ██████╗ ██████╗ ██████╗      ██████╗ ██████╗ ██╗   ██╗███╗   ██╗████████╗███████╗██████╗ 
 ██║    ██║██╔═══██╗██╔══██╗██╔══██╗    ██╔════╝██╔═══██╗██║   ██║████╗  ██║╚══██╔══╝██╔════╝██╔══██╗
 ██║ █╗ ██║██║   ██║██████╔╝██║  ██║    ██║     ██║   ██║██║   ██║██╔██╗ ██║   ██║   █████╗  ██████╔╝
 ██║███╗██║██║   ██║██╔══██╗██║  ██║    ██║     ██║   ██║██║   ██║██║╚██╗██║   ██║   ██╔══╝  ██╔══██╗
 ╚███╔███╔╝╚██████╔╝██║  ██║██████╔╝    ╚██████╗╚██████╔╝╚██████╔╝██║ ╚████║   ██║   ███████╗██║  ██║
  ╚══╝╚══╝  ╚═════╝ ╚═╝  ╚═╝╚═════╝      ╚═════╝ ╚═════╝  ╚═════╝ ╚═╝  ╚═══╝   ╚═╝   ╚══════╝╚═╝  ╚═╝                                                                                                     
        `);
    do {
        await count();
        var doAgain = await inquirer.prompt([
            {
                type: 'text',
                name: 'name',
                message: "Do you want to count again? (y/n): "
            }
        ]);
    } while (doAgain.name === 'y' || doAgain.name === 'Y');
}
await Again();
