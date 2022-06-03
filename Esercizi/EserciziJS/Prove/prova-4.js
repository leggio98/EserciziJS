const greet = "Hello";
const person1 = "Marco";
let person2


function printGreet(name) {
     console.log(`${person1}: ${greet} ${name}`);
     person2 = name;
}

function questionInterview(question) {
    console.log(question);
}

function answerInterview(answer) {
    console.log(`${person2}: ${answer}`);
}




printGreet("Angelo");

questionInterview("How are you?");

answerInterview("I'm fine, thanks.");

