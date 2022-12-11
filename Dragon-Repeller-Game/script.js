//comments here are the same as java

let xp=0;
let health=100;
let gold=50;
let currentWeapon=0;
let fighting;
let monsterHealth;
let inventory=["stick","dagger","sword"];

const button1=document.querySelector("#button1");
const button2=document.querySelector("#button2");
const button3=document.querySelector("#button3");
const text=document.querySelector("#text");
const xpText=document.querySelector("#xpText");
const healthText=document.querySelector("#healthText");
const goldText=document.querySelector("#goldText");
const monsterStats=document.querySelector("#monsterStats");
const monsterName=document.querySelector("#monsterName");
const mosnterHealth=document.querySelector("#monsterHealth");

button1.onclick=goStore;
button2.onclick=goCave;
button3.onclick=fightDragon;

function goStore(){
    button1.innerText="Buy 10 health (10 gold)"
    button2.innerText="Buy weapon (30 gold)"
    button3.innerText="go to town square"
    button1.onlick=buyHealth;
    button2.onlick=buyWeapon;
    button3.onlick=goTown;
    text.innerText="You entered the store";
}

function goCave(){
    console.log("going to the cave");
}

function fightDragon(){
    console.log("Fighting Dragon")
}