import fs, from 'fs';
// fs is used for file read or write 
import readline  from 'readline';
// readline is used for handling input output using terminal (using CLI)
import chalk from 'chalk';
//  this chalk is used to give color for console in CLI


// Load Quetions
const quetions = JSON.parse(fs.readFileSync('quetions.json','utf-8'));

// CLI SETUP basically it is used work on CLI
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

let score = 0;
let index = 0;

console.log(chalk.yellow.bold("Welcome To Quiz App.!!"));

function askQuetions(){
    if(index < quetions.length){
        const q = quetions[index];
        console.log(chalk.blue(`\nQ${index + 1}: ${q.question3}`));
        q.options.forEach((option,i) => {
            console.log(chalk.green(`${i+1}. ${option}`));
        });

        rl.question(chalk.cyan("your answer (number): "),(answer)=>{
        const userAns = parseInt(answer);
        if(q.answer === (userAns-1)){
            console.log(chalk.green("Correct.!!"));
            score++;
        }else{
            console.log(chalk.red(`Wrong.! The Correct Ans Was : ${q.answer}`));
        }
        index++;
        askQuetions();
    })
    } else{
        console.log(chalk.yellow.bold(`\nQuiz Over! Your Final Score is : ${score} / ${quetions.length} `));
        rl.close();
    }
   
}
askQuetions();



