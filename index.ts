#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation"


const sleep = ()=>{
    return new Promise((res)=>{
        setTimeout(res,2000);
    })
}


async function welcome(){
   let ranbowTitle = chalkAnimation.rainbow('Lets start calculation'); //start
   await sleep();
   ranbowTitle.stop();
   console.log( `_____________________
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

async function askQuestion(){
  const answers =  await inquirer
    .prompt([
        /* Pass your questions*/
        {
            type:"list",
            name:"operator",
            message:"which operation you want to perform? /n",
            choices:["Addition","Subtraction","Multiplication","Divition"]
        },
        {
            type:"number",
            name:"num1",
            message:"Enter number 1:"
        },
        {
            type:"number",
            name:"num2",
            message:"Enter number 2:"
        }
    ]);
    if
    (answers.operator =="Addition"){
        console.log(chalk.green(`${answers.num1} + ${answers.num2} = ${answers.num1 + answers.num2}`));
    }
    else if(chalk.yellow(answers.operator == "Substraction"))
    {
        console.log(chalk.green(`${answers.num1} - ${answers.num2} = ${answers.num1 - answers.num2}`));
    }
    else if(answers.operator == "Multiplication")
    {
        console.log(chalk.green(`${answers.num1} * ${answers.num2} = ${answers.num1 * answers.num2}`));
    }
    else if(answers.operator == "Divition")
    {
        console.log(chalk.green(` ${answers.num1} / ${answers.num2} = ${answers.num1 / answers.num2}`));
    }
 };

//askQuestion();
async function startAgain()
{
    do{ 
        await askQuestion();
        var again = await inquirer
        .prompt({
            type:"input",
            name:"restart",
            message:"Do you want to continue? Press y or n: "

        })
    }while(again.restart == 'y' || again.restart == 'Y' || again.restart == 'yes' || again.restart === 'Yes')
}


startAgain()
