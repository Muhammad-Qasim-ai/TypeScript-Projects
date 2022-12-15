#! /usr/bin/env node

import chalk from "chalk";
import inquirer from "inquirer";
import chalkAnimation from "chalk-animation";
import gradient from "gradient-string";

let toDoList: any = [];
let compeleteToDoList: any[] = [];


const sleep = () => {
    return new Promise((res) => {
        setTimeout(res, 3000);

    })
}

async function welcome() {
  let neonTitle = gradient.teen('Lets start Calculation') //start
  await sleep();
  // neonTitle.stop();
    do {
        var ask = await inquirer
            .prompt([
                {
                    type: 'list',
                    name: 'questions',
                    message: 'What Operation you want to perform',
                    choices: ['Print ur to-do List', 'Add Tasks in Your List', 'Mark Tasks as Complete','View Compeleted Tasks', 'Remove/Delete Tasks from the List', 'Exit']
                }
            ])

        if (ask.questions === 'Print ur to-do List') {
            await printList();
        } else if (ask.questions === 'Add Tasks in Your List') {
            await taskAddition();
        } else if (ask.questions === 'Mark Tasks as Complete') {
            await taskComplete();
        } else if(ask.questions === 'View Compeleted Tasks'){
            await compeleteTaskView();
        }else if (ask.questions === 'Remove/Delete Tasks from the List') {
            await removetask();
        };
    } while (ask.questions != 'Exit')
}

async function printList() {
    console.log(toDoList);
}
async function taskAddition() {
    let add = await inquirer
        .prompt([
            {
                type: 'string',
                name: 'task',
                message: 'Add To-Do Task'

            }

        ])

    toDoList.push(`Task: ${add.task}                                                                                                            `);
    console.log('Task Added Successfully');


}
// var status = 'Incomplete';
// var compeleteToDoList: string

async function taskComplete() {
    
    let compelete = await inquirer
        .prompt([
            {
                type: 'list',
                name: 'compeletedList',
                message: 'Mark Tasks as Complete',
                choices: [...toDoList]
            }
        ])

        let t = toDoList.indexOf(compelete.compeletedList)
        
        toDoList.splice(t,1)
        compeleteToDoList.push(compelete.compeletedList)
    }
async function compeleteTaskView(){
    console.log(compeleteToDoList);
    
}

async function removetask() {
    let remove = await inquirer
    .prompt([
        {
            type: 'list',
            name: 'removeTask',
            message: 'Remove Task',
            choices: [...toDoList]
        }
    ])

    let r = toDoList.indexOf(remove.removeTask)
    toDoList.splice(r,1)
}


// async function exit() {

// }



await welcome();

