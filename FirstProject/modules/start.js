
import { playerStat, setPlayer } from "./player.js";
import { storeMenu, storeMenuActions } from "./store.js";



const menuButtons = {
  firstButton: document.getElementById("button1"),
  secondButton: document.getElementById("button2"),
  thirdButton: document.getElementById("button3"),
};

const startMenu = [
  {
    action: "redirect",
    object: "Go to store",
  },
  {
    action: "redirect",
    object: " Go to cave ",
  },
  {
    action: "redirect",
    object: "Fight dragon",
  },
];

let menuTheme = startMenu;

const setMenu = (menu) => {
  const first = menuButtons.firstButton;
  first.setAttribute("action", menu[0].action);
  first.setAttribute("object", menu[0].object)
  first.innerText = ` ${menu[0].object} `;

  const second = menuButtons.secondButton;
  second.setAttribute("action", menu[1].action);
  second.setAttribute("object", menu[1].object)
  second.innerText = ` ${menu[1].object} `;

  const third = menuButtons.thirdButton;
  third.setAttribute("action", menu[2].action);
  third.setAttribute("object", menu[2].object)
  third.innerText = `${menu[2].object}`;

  if(menu.cost !== ""){
    first.setAttribute("cost", menu[0].cost)
    second.setAttribute("cost", menu[1].cost)
    third.setAttribute("cost", menu[2].cost)
  }

};

const checkBtnAction= (e)=>{
const btnActionAttribute= e.target.getAttribute("action")
const btnObjectAttribute= e.target.getAttribute("object")

if(btnActionAttribute=== "redirect" && btnObjectAttribute=== "Go to store"){
    menuTheme=storeMenu
    setMenu(menuTheme)
}

else if(btnActionAttribute=== "buy"){
  storeMenuActions(e)
  setPlayer(playerStat)
}

}



export { menuButtons, setMenu, menuTheme, checkBtnAction };
