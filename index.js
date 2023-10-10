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
    

