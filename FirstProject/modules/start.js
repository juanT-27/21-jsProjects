import Player from "./player.js"

import { storeMenu } from "./store.js"



const menuButtons={
    firstButton:document.getElementById("button1"),
    secondButton:document.getElementById("button2"),
    thirdButton:document.getElementById("button3")
}

const startMenu=[
     "Go to store",
    "Go to cave",
     "Fight dragon",
]
let menuTheme= startMenu
const setMenu= (menu)=>{
    const first=menuButtons.firstButton;
    first.innerText= menu[0]
    const second=menuButtons.secondButton.innerText= menu[1]
    const third=menuButtons.thirdButton.innerText=  menu[2]

    first.addEventListener("click", (e)=>{
        if(e.target.textContent=== startMenu[0]){
            menuTheme=storeMenu
            setMenu(menuTheme)
        }
    })
}
const playerStat= {
    xp:document.getElementById("xpText"),
    health:document.getElementById("healthText"),
    gold:document.getElementById("goldText")
 }

 const setPlayer=(stat)=>{
    stat.xp.innerText= myPlayer.xp
    stat.health.innerText=myPlayer.health
    stat.gold.innerText=myPlayer.gold
}
const myPlayer = new Player(0, 100, 20, "knife");

export {playerStat, setPlayer, myPlayer,  menuButtons, setMenu, menuTheme }