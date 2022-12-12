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

const weapons=[
    {
        name:"stick",
        power:5
    },
    {
        name:"dagger",
        power:30
    },
    {
        name:"claw hammer",
        power:50
    },
    {
        name:"sword",
        power:100
    }
];

const monsters=[
    {
        name:"slime",
        level:2,
        health:15
    },
    {
        name:"fanged beast",
        level:8,
        health:60
    },
    {
        name:"dragon",
        level:20,
        health:300
    }
];

const locations=[
    {
        name:"town square",
        "button text":["go to store","go to cave","Fight dragon"],
        "button functions":[goStore,goCave,fightDragon],
        text:"You are in the town square. You see a sign that says \"store\""
    },
    {
        name:"store",
        "button text":["buy 10 health (10 gold)","buy weapn (30 gold)","go to town square"],
        "button functions":[buyHealth,buyWeapon,goTown],
        "text":"you entered the store"
    },
    {
        name:"cave",
        "button text":["Fight slime","Fight fanged beast","Go to town square"],
        "button functions":[fightSlime,fightBeast,goTown],
        "text":"you entered the cave. You see the monsters"
    },
    {
        name:"fight",
        "button text":["Attack","Dodge","Run"],
        "button functions":[attack,dodge,goTown],
        "text":"you are fighting a monster"
    },
    {
        name:"kill monster",
        "button text":["Go to town square","Go to town square","Go to town Square"],
        "button functions":[goTown,goTown,goTown],
        "text":"The monster dies.You find xp and gold"
    },
    {
        name:"lose",
        "button text":["Replay?","Replay?","Replay?"],
        "button functions":[restart,restart,restart],
        "text":"You died"
    },
    {
        name:"win",
        "button text":["Replay?","Replay?","Replay?"],
        "button functions":[restart,restart,restart],
        "text":"You defeated the dragon, you win."
    }
];

button1.onclick=goStore;
button2.onclick=goCave;
button3.onclick=fightDragon;

function update(location){
    monsterStats.style.display="none";
    button1.innerText=locations["button text"][0];
    button2.innerText=locations["button text"][1];
    button3.innerText=locations["button text"][2];
    button1.onlick=locations["button function"][0];
    button2.onlick=locations["button function"][1];
    button3.onlick=locations["button function"][2];
    text.innerText=locations.text;
}

function goTown(){
    update(locations[0]);
}

function goStore(){ 
    update(locations[1]);
}

function goCave(){
    console.log("going to the cave");
}

function buyHealth(){
    if(gold>=10){
        gold-=10;
        health+=10;
        goldText.innerText=gold;
        healthText.innerText=health;
    }
    else{
        text.innerText="you dont have enough gold";
    }
}

function buyWeapon(){
    if(currentWeapon<weapons.length-1){
        if(gold>=30){
            gold-=30;
            currentWeapon++;
            goldText.innerText=gold;
            let newWeapon=weapons[currentWeapon].name;
            text.innertext="you now have a new weapon"+newWeapon;
            inventory.push(newWeapon);
            text.innerText+="in your inventory you have: "+inventory;
        }
        else{
            text.innerText="you dont have enough gold";
        }
    }
    else{
        text.innerText="you already have the most powerful weapon";
        button2.innerText="sell weapon for 15 gold";
        button2.onclick=sellWeapon;
    }
}

function sellWeapon(){
    if (inventory.length>1){
        gold+=15;
        goldText.innerText=gold;
        let currentWeapon=inventory.shift();
        text.innerText="you sold a "+currentWeapon;
        text.innerText+="in your inventory you have: "+inventory;
    }
    else{
        text.innerText="Dont sell your only weapon";
    }
}

function fightSlime(){
    fighting=0;
    goFight();
}

function fightBeast(){
    fighting=1;
    goFight();
}

function fightDragon(){
    fighting=2;
    goFight();
}

function goFight(){
    update(locations[3]);
    monsterHealth=monsters[fighting].health;
    monsters.style.display="block";
    monsterNameText.innerText-monstersp[fighting].name;
    monsterhealthText.innerText=monsterHealth;
}

function attack(){
    text.innerText="The "+monsters[fighting].name+" attacks";
    text.innerText+="You attack it with your "+ weapons[currentWeapon].name;
    health-=monsters[fighting].level;
    monsterHealth-=weapons[currentWeapon].power+Math.floor(Math.randon()*xp)+1;
    healthTetx.innerText=health;
    monsterHealthText.innerText=monsterHealth;
    if(health<=0){
        lose();
    }
    else if (monsterHealth<=0){
        if (fighting==2){
            winGame();
        }
        else{
            defeatMonster();
        }
    }
}

function dodge(){
    text.innerText="you dodged the attack from the "+monsters[fighting].name;
}

function defeatMonster(){
    gold+=monsterHealth.floor(monsters[fighting].level*6.7);
    xp+=monsters[fighting].level;
    goldText.innerText=gold;
    xpText.innerText=xp;
    update(locations[4])
}

function lose(){
    update(locations[5]);
}

function restart(){
    xp=0;
    health=100;
    gold=50;
    currentWeapon=0;
    inventory=['stick'];
    goldText.innerText=gold;
    healthText.innerText=health;
    xpText.innerText=xp;
    goTown();
}

function winGame(){
    update(location[6]);
}