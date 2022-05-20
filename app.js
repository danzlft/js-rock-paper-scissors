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


// let count = 0;
// //decrease = count -= 1;
// //reset = count;
// //increase = count += 1;

// document.getElementById("decrease-btn").onclick = function () {
//     count -= 1;
//     document.getElementById("counter").textContent = count;
// }

// document.getElementById("reset-btn").onclick = function () {
//     count = 0;
//     document.getElementById("counter").textContent = count;
// }

// document.getElementById("increase-btn").onclick = function () {
//     count += 1;
//     document.getElementById("counter").textContent = count;
// }


// let x; 
// let y; 
// let z;


// document.getElementById("rollBtn").onclick = function () {
//     x = Math.floor(Math.random() * 6) + 1;
//     x = document.getElementById("xLabel").textContent = `Dice I: ${x}`;

//     y = Math.floor(Math.random() * 6) + 1;
//     y = document.getElementById("yLabel").textContent = `Dice II: ${y}`;

//     z = Math.floor(Math.random() * 6) + 1;
//     z = document.getElementById("zLabel").textContent = `Dice III: ${z}`;
// }


// let fullName = "宮水 三橋";
// let firstName = fullName.slice(0, 5);
// let lastName = fullName.slice(6);

// let firstName = fullName.slice(fullName.indexOf(" ") + 1);
// console.log(firstName);

// let lastName = fullName.slice(0, fullName.indexOf(" "));
// console.log(lastName);


// let userName = "    Akari   ";

// let letterName = userName.charAt(4)
// letterName = letterName.toUpperCase();
// console.log(letterName);


//Method Chaining//
// let letterName = userName.toUpperCase().trim();
// console.log(letterName);

// let phoneNum = "2325-2342-2523";
// phoneNum = phoneNum.replaceAll("-", "/");
// console.log(phoneNum);

// const body = document.body;
// body.append();

// const navContainer = document.createElement("div");
// navContainer.className = "nav-container";
// body.append(navContainer);

// const logo = document.createElement("div");
// logo.className = "nav-logo";
// logo.textContent = "死";
// navContainer.append(logo);

// const navLinks = document.createElement("ul");
// navLinks.className = "ul-container";
// navContainer.append(navLinks);

// const homeLi = document.createElement("li");
// homeLi.id = "home-li";
// homeLi.textContent = "home";
// navLinks.append(homeLi);

// const aboutLi = document.createElement("li");
// aboutLi.id = "about-li";
// aboutLi.textContent = "about";
// navLinks.append(aboutLi);

// const moreLi = document.createElement("li");
// moreLi.id = "more-li";
// moreLi.textContent = "more";
// navLinks.append(moreLi);

// const contactBtn = document.createElement("button");
// contactBtn.className = "contact-button";
// contactBtn.textContent = "contact";
// navContainer.append(contactBtn);


// let cashInWallet = 15;
// let order;

// while (cashInWallet >= 10) {
//     order = document.write("BBQ CHICKEN!<br>");
//     cashInWallet -= 1; 
// }
// order = document.write("water...");


// let cash = 9;
// let orderList;

// if(cash >= 10) {
//     orderList = document.write("CHICKEN <br>");
// }else {
//     orderList = document.write("water...");
// }

// let iceCream = 6; 
// if(iceCream <= 5) {
//     alert("Ice Cream is running low!");
// } else {
//     alert("Enjoy your Ice Cream!");
// }


// let i = 0;
// const birthName = "Joe";

// while(i < 2) {
//     document.write("Happy Birthday to you.<br>");
//     i += 1;
// }
// document.write("Happy Birthday dear " + birthName + ",<br>");
// document.write("Happy Birthday to you.");


// let word = "bottles";
// let count = 99;
// while (count > 0) {
//  console.log(count + " " + word + " of beer on the wall");
//  console.log(count + " " + word + " of beer,");
//  console.log("Take one down, pass it around,");
//  count = count - 1;
// }
// console.log("No more " + word + " of beer on the wall.");

// let inStock;
// let onSale;

// if(inStock == true) {
//     if(onSale == true) {
//         alert("Poggers!");
//     }
// }


// const chevy = { 
//     make: "Chevy",
//     model: "Bel Air",
//     year: 1957, 
//     color: "red",
//     passengers: 2,
//     convertible: false,
//     mileage: 2022 //no comma for the last property value
//    };

// console.log(chevy);


// const taxi = { 
//     make: "Webville Motors",
//     model: "Taxi",
//     year: 1955,
//     color: "yellow",
//     passengers: 4,
//     convertible: false,
//     mileage: 281341
//    };

//    function prequal(car) {
//     if (car.mileage > 10000) {
//     return false;
//     } else if (car.year > 1960) {
//     return false;
//     }
//     return true;
//    }

//    let worthALook = prequal(taxi);
//    if (worthALook) {
//     console.log("You gotta check out this " + taxi.make + " " + taxi.model);
//    } else {
//     console.log("You should really pass on the " + taxi.make + " " + taxi.model);
//    }


// const fido = {
//     name: "Fido",
//     weight: 40,
//     breed: "Mixed",
//     loves: "walks"
// };

// function loseWeight(dog, amount) {
//     dog.weight -= amount;
// }
// loseWeight(fido, 15)

// console.log(`Your dog ${fido.name} now weighs ${fido.weight} pounds`);



