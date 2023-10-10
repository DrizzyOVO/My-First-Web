let Name="Gaurav"; 
let age; 

function setName() {
    var name = prompt("Enter your name:"); 
    if (name != null && name != "") {
        document.getElementById("dizzy").textContent = name; 
    }
}   

function incrementAge() {
    var currentAge = parseInt(document.getElementById("Age").textContent); 
    var newAge = currentAge + 5;
    document.getElementById("Age").textContent = newAge;
}
     
// JavaScript Array Operations 
function operateArray() {
    var cars = ["Maybach", "Chiron", "LaFerrari"]; 
    console.log("Cars Array:", cars); 
    cars.push("Phantom"); // Add an element to the end  
    console.log("After pushing Phantom:", cars); 
    cars.pop(); // Remove the last element 
    console.log("After popping:", cars); 
}

// JavaScript String Manipulation 
function manipulateString() {
    var originalString = "Hello, World!"; 
    var modifiedString = originalString.replace("World", "JavaScript"); 
    console.log(modifiedString);
}

// JavaScript Date Usage 
function displayCurrentDate() {
    var currentDate = new Date();
    console.log("Current date: " + currentDate.toDateString()); 
}


// JavaScript Classes and Objects 

class Person {
    constructor(name, age, occupation) {
        this.name = name; this.age = age;
        this.occupation = occupation;
    }
    introduce() {
        console.log(`Hello, I'm ${this.name}, a ${this.age}-year-old ${this.occupation}.`);
    }
} 

const person = new Person("Your Name", 20, "Software Engineer"); 

// JavaScript Event Handling 

const stringManipulationButton = document.querySelector(".btn-primary"); 
const arrayOperationsButton = document.querySelector(".btn-secondary"); 
const displayDateButton = document.querySelector(".btn-success"); 
stringManipulationButton.addEventListener("click", manipulateString); 
arrayOperationsButton.addEventListener("click", operateArray); 
displayDateButton.addEventListener("click", displayCurrentDate);  

// JavaScript Error Handling 

try { // Attempting an operation that may throw an error 
    const result = 10 / 0;
    console.log("Result:", result);
} catch (error) { // Handling the error
    console.error("An error occurred:", error);
}
         