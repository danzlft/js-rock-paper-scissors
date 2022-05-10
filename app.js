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


// const body = document.body;
// const container = document.createElement("div");
// container.className = "div-container";
// body.append(container);

// const aLabel = document.createElement("label");
// aLabel.textContent = "Side A:";
// aLabel.id = "aLabel";
// container.append(aLabel);

// const aInput = document.createElement("input");
// aInput.id = "aInput";
// container.append(aInput);

// const bLabel = document.createElement("label");
// bLabel.id = "bLabel";
// bLabel.textContent = "Side B:";
// container.append(bLabel);

// const bInput = document.createElement("input");
// bInput.id = "bInput";
// container.append(bInput);

// const myButton = document.createElement("button");
// myButton.id = "submitButton";
// myButton.textContent = "submit";
// container.append(myButton);

// const cLabel = document.createElement("label");
// cLabel.id = "cLabel";
// container.append(cLabel);   

// let a;
// let b;
// let c;

// document.getElementById("submitButton").onclick = function () {
//     a = document.getElementById("aInput").value;
//     a = Number.parseInt(a);

//     b = document.getElementById("bInput").value;
//     b = Number.parseInt(b);

//     //Math formula: c = √(a² + b²)
//     c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
//     document.getElementById("cLabel").textContent = `Side C: ${c}`;

// }

// c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));


//prompt user for input and update h1//

// const divContainer = document.createElement("div");
// divContainer.className = "div-container";
// body.append(divContainer);

// const mainP = document.createElement("p");
// mainP.id = "main-p";
// mainP.textContent = "Input a name:";
// divContainer.append(mainP);

// const nameInput = document.createElement("input");
// nameInput.id = "name-input";
// divContainer.append(nameInput);

// const submitButton = document.createElement("button");
// submitButton.id = "submit-button";
// submitButton.textContent = "submit";
// divContainer.append(submitButton);

// let mainInput;
// document.getElementById("submit-button").onclick = function () {
//     mainInput = document.getElementById("name-input").value;
//     document.getElementById("main-p").textContent = `Hello ${mainInput}!`;

// };


let count = 0;
//decrease = count -= 1;
//reset = count;
//increase = count += 1;

document.getElementById("decrease-btn").onclick = function () {
    count -= 1;
    document.getElementById("counter").textContent = count;
}

document.getElementById("reset-btn").onclick = function () {
    count = 0;
    document.getElementById("counter").textContent = count;
}

document.getElementById("increase-btn").onclick = function () {
    count += 1;
    document.getElementById("counter").textContent = count;
}