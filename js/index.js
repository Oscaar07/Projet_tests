let name = "Didier";
let age = 25;
let accepted = true;

console.log("Hello", name);
console.log("You are", age);
console.log("I am", accepted);

document.getElementById("p1").innerHTML = "Hello " + name;
document.getElementById("p2").innerHTML = "You are " + age;
document.getElementById("p3").innerHTML = "I am " + accepted;

let username = window.prompt("What is your name?");
document.getElementById("p4").innerHTML = username;

let username2;

document.getElementById("button").onclick = function() {
    username2 = document.getElementById("username").value;
    document.getElementById("label").innerHTML = "Hello " + username2;
}

let age2 = window.prompt("what is your age?");
// const legal_age = 18;
// age2 = Boolean(age2);
// age2 = String(age2);
age2 = Number(age2);
age2 +=1;
document.getElementById("p2").innerHTML = "You are " + age2;

let count = 0;
document.getElementById("buttonI").onclick = function() {
    count+=1;
    document.getElementById("count").innerHTML = count;
}

document.getElementById("buttonD").onclick = function() {
    count-=1;
    document.getElementById("count").innerHTML = count;
}

document.getElementById("buttonR").onclick = function() {
    count=0;
    document.getElementById("count").innerHTML = count;
}

const visa = document.getElementById("visabtn");
const master = document.getElementById("masterbtn");
const paypal = document.getElementById("paypalbtn");

document.getElementById("submit").onclick = function(){
    if(document.getElementById("checkbox").checked == true){
        document.getElementById("etat").innerHTML = "oui";
    }else{
        document.getElementById("etat").innerHTML = "non";
    }
    if(visa.checked){
        document.getElementById("type").innerHTML = "Vous avez choisis Visa"
    } else if(master.checked) {
        document.getElementById("type").innerHTML = "Vous avez choisis MasterCard"
    }  else if(paypal.checked) {
        document.getElementById("type").innerHTML = "Vous avez choisis Paypal"
    }else{
        document.getElementById("type").innerHTML = "Vous avez choisis Rien"
    }
}

//Switch case
let note = 0;
switch(note){
    case note >= 50 :
        console.log("Passe");
        break;
    case note <= 50 :
        console.log("Echec");
        break;
    default :
        console.log(note, "Nest pas une note");        
}
//While
while(note) { 
}
do{
}
while(!note){
}
//for
for(let i = 0; i < note; i++){
}

function checkNote(note){
    //check note > 50
    return note >=50 ? true : false;
}
//let = varaibles are limited to block scope {}
//var = variables are limited to functions

//pareil
console.log("Hello, your grade is", note);
console.log(`Hello, your grade is ${note}`);
