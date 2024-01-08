import { myPlayer } from "./player.js";

const storeMenu = [
  {
    action: "buy",
    object: "Buy xp",
    cost: 30,
  },
  {
    action: "buy",
    object: "Buy health",
    cost: 10,
  },
  {
    action: "buy",
    object: "Buy weapon",
    cost: 20,
  },
];

const storeMenuActions = (e) => {
  const objectToBuy = e.target.getAttribute("object");
  const objectCost = e.target.getAttribute("cost");
  console.log(objectToBuy);

  if (objectToBuy === "Buy xp") {
    try {
      checkAmountOfGold(myPlayer.gold, objectCost)
      myPlayer.winXp(10);
      myPlayer.useGold("buy", objectCost);
      alert(`You just paid ${objectCost} gold coins`)
    } catch (error) {
      alert(error.message)
    }
  } else if (objectToBuy === "Buy health") {
    try {
      checkAmountOfGold(myPlayer.gold, objectCost)
    myPlayer.manageHealth("buyed", 10);
    myPlayer.useGold("buy", objectCost);
    alert(`You just paid ${objectCost} gold coins`)
    } catch (error) {
      alert(error.message)
    }
    
    
  } else if (objectToBuy === "Buy weapon") {
    try {
      checkAmountOfGold(myPlayer.gold, objectCost)
      myPlayer.weaponsOnInventary();
      myPlayer.useGold("buy", objectCost);
      alert(`You just paid ${objectCost} gold coins`)
    } catch (error) {
      alert(error.message)
    }
    
  }
};

const checkAmountOfGold= (gold, goldNeeded)=>{
if(goldNeeded > gold){
  throw new Error ("not enough gold")
}
}


export { storeMenu, storeMenuActions };
