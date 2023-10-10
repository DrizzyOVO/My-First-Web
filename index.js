let Name="Gaurav"; 
let age; 

function onpressed(){

    if(document.getElementById("dizzy").innerHTML=="thisIsDizzy"){
        document.getElementById("dizzy").innerHTML="dizzyIsSicko";
    } else{
        document.getElementById("dizzy").innerHTML="thisIsDizzy";  
    }

}

function onTap(){
    age=document.getElementById("age").innerHTML; 

    for(let i=0;i<5;i++){ 
        age++;  
    } 
    document.getElementById("age").innerHTML=age; 
} 

