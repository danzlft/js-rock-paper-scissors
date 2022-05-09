// let arrayResult = "";
// function returnNum (){
//     const arrayNum = [5, 10, 15];
//     const result = Math.floor(Math.random() * arrayNum.length);
//     arrayResult += result;
// }
// console.log(arrayResult);

// const game = ["Rock", "Paper", "Scissors"];


// function computerPlay () {
//     let randomNumber = Math.floor(Math.random() * game.length);
//     console.log(randomNumber);
// }


// let arrayNum = [5, 15, 25];

// arrayNum.forEach(computerPlay);

// function computerPlay () {
//     let result = Math.floor(Math.random() * arrayNum.length);
//     console.log(result);
// }

// const myArray = ["Rock", "Paper", "Scissors"];

// function computerPlay() {
//     return myArray[~~(Math.random() * myArray.length)];
//   }
  

// function computerPlay () {
//     let randomNumber = Math.floor(Math.random() * 3)
//     switch(randomNumber) {
//         case 0:
//             return "Rock";
//         case 1:
//             return "Paper";
//         case 2: 
//             return "Scissors";
//     }
// }


// number = Number(prompt("Enter a number: "));


// const body = document.body;
// body.append();

// const submitDiv = document.createElement("div");
// submitDiv.className = "submit-div";
// body.append(submitDiv);

// const label = document.createElement("label");
// label.id = "myLabel";
// label.textContent = "Input your name: ";
// submitDiv.append(label);

// //input box
// const submitInput = document.createElement("input");
// submitInput.type = "input", submitInput.id = "myText";
// submitDiv.append(submitInput);

// //input button
// const submitBtn = document.createElement("button");
// submitBtn.type = "button", submitBtn.id = "myButton";
// submitBtn.textContent = "submit";
// submitDiv.append(submitBtn);


// let userName;
// document.getElementById("myButton").onclick = function () {
//     userName = document.getElementById("myText").value;
//     console.log(userName);
// }

//change the label content to userInput
//get document.className of label
//return label with .value
//update the textContent of label (label.textContent = userName)



//Easy way of user input
// const userPrompt = window.prompt("Input your name: ");
// console.log(userPrompt);

 
// let userName;

// document.getElementById("myButton").onclick = function () {
//     userName = document.getElementById("myText").value;
//     console.log(userName);
//     document.getElementById("myLabel").textContent = `Hello ${userName}!`;
// }

// let age = Number(window.prompt("Input your age: "));
// age += 1;
// console.log(age);

// let age = window.prompt("Input your age:");
// age = Number.parseInt(age);
// age += 1;
// console.log(age);

// let round = 2.999;
// round = Math.round(round); //standard rounding math
// round = Math.ceil(round); //always round num up
// round = Math.floor(round); //always round num down
// console.log(round);



//Practice Program: Get the Hypotenuse of a right side angle triangle the user inputs
//FORMULA: c = √(a² + b²)
