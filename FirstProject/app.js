// import Player from "./modules/player.js";

import {   menuButtons, setMenu, menuTheme, checkBtnAction } from "./modules/start.js";

import { setPlayer, playerStat } from "./modules/player.js";


document.addEventListener("DOMContentLoaded", () => {
    
    document.addEventListener("click", (e)=>{
        if(e.target.classList.contains("button") ){
            checkBtnAction(e)  
        }
    })

    setPlayer(playerStat)

    setMenu( menuTheme )

    
});

