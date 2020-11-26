const readLine = require("readline-sync");

const chalk = require("chalk");

let user = readLine.question(chalk.bgCyan("Hey What's Your Name ?\nAns :  "));
console.log(chalk.greenBright(`\nWelcome ${user} !!!!\nLet's Start The Game :)`));
const nameOfUser = user;
user= {
   score: 0,
   attempt:0,
};


console.log("\n====================================================================");
console.log(chalk.blueBright("\nGame Is All About : Let's Find Who Know's Akash Very Well :)"));
console.log("\n====================================================================");
console.log("\nRules of the Game :->");
console.log("\n1 : THERE WILL BE TOTAL 11 QUESTIONS. ");
console.log("\n2 : PLAYER WILL BE ASKED FOR THE NUMBER OF QUESTION OUT OF 11  THEY WANTED TO PLAY WITH. ")
console.log("\n3 : QUESTIONS ARE VERY BASIC AND RELATED TO HIS NORMAL LIFESTYLE. ");
console.log("\n4 : MOST IMPORTANTLY PLAYER HAVE TO WRITE  ONLY OPTIONS OTHER THAN THIS NOTHING WILL BE ACCEPTED ")
console.log("\n5 : FOR EACH CORRECT ANSWERS YOUR SCORE WILL BE INCREASED BY 1. ");
console.log("\n====================================================================");
let questionOne = {
  question:"What is The Full Name Of Akash ?\na ) Akash Mishra\nb ) Akash Pandey\nc ) Akash Pratap\nd ) Akash Kumar Singh\nAns : ",
  answer : "d",
}

let questionTwo = {
  question:"What is The Nick Name Of Akash ?\na ) Chintu\nb ) Prince\nc ) Chotu\nd ) Sahil\nAns : ",
  answer : "c",
}

let questionThree = {
  question:"What is The Favourite Dish Of Akash ?\na ) Fish Curry\nb ) Chicken Briyani\nc ) Chicken Curry\nd ) Mutton Kabab\nAns : ",
  answer : "b",
}

let questionFour = {
  question:"When is Akash Birthday ?\na ) 20 April\nb ) 16 January\nc ) 20 January\nd ) 20 December\nAns : ",
  answer : "a",
}

let questionFive = {
  question:"What is The Favourite Sports Of Akash ?\na ) Badminton\nb ) Basketball \nc ) Football\nd ) Cricket\nAns : ",
  answer : "d",
}

let questionSix = {
  question:"Which is The  Smartphones  Akash Use ?\na ) Redmi Note 9\nb ) Realme 7\nc ) Oppo A5\nd ) Oneplus 7T Pro\nAns : ",
  answer : "c",
}

let questionSeven = {
  question:"Where do Akash Study ?\na ) Bangalore\nb ) Mumbai\nc ) Chennai\nd ) Kharagpur\nAns : ",
  answer : "a",
}

let questionEight = {
  question:"Which company earphone do Akash Use ?\na ) Oneplus\nb ) Mivi\nc ) Boat\nd ) Sony\nAns : ",
  answer : "a",
}


let questionNine = {
  question:"What is The Favourite Place Of Akash ?\na ) Ladhakh\nb ) Haridwar\nc ) Mumbai\nd ) Bangalore\nAns :  ",
  answer : "a",
}

let questionTen = {
  question:"What Language Akash use to code Backend ?\na ) JavaScript\nb ) C++\nc ) Java\nd ) Python\nAns : ",
  answer : "a",
}

let questionEleven = {
  question:"Which is The  Smartphones  Akash Use ?\na ) Redmi Note 9\nb ) Realme 7\nc ) Oppo A5's\nd ) OnePlus 7\nAns : ",
  answer : "c",
}
let ch;

const Question = [questionOne,questionTwo,questionThree,questionFour,questionFive,questionSix,questionSeven,questionEight,questionNine,questionTen,questionEleven];
const Answer = [ ];
do{
  if(ch=='y'||ch=='Y'){
    user.score = 0;
  }
  const input  = readLine.question("\nSelect The Number Of Questions You Want To Play With (1 to 11) : ");
 console.log("\n===================================================================");



 for(let i=0;i<input;i++){
   Answer[i] = readLine.question(Question[i].question);
   compare(Answer[i], Question[i].answer);
 }

 console.log(chalk.greenBright(`\n Dear ${nameOfUser} your Total Score is :  ${user.score}`));
 console.log(chalk.yellowBright("\nThankyou So Much for Playing This Game.... :)"));
 console.log(chalk.bgMagenta("\nWanna Know Me More Connect with me on Linkedin :")+ "https://www.linkedin.com/in/akash-kumar-singh-48a624157/")
 
 
 function compare(a,b){
  if(a === b){
     user.score += 1; 
     ("\n====================================================================");
     console.log(chalk.greenBright(`\nYou Answerd Correct :)`));
     console.log(chalk.yellowBright(`\nYour Score is : ${user.score}`));
     console.log("\n===================================================================");

   }else{
   
     {user.score + 0}
     console.log(chalk.bgRed(`\nOOPs You Are Wrong!!!`))
     console.log(chalk.yellowBright(`\nYour Score is ${user.score} `));
     
     console.log("\n===================================================================");
    }
 }  
  

ch= readLine.question("\nDo You Want To Continue ? Press (Y/y) for Play Again : ");

}while(ch=='y'||ch=='Y');