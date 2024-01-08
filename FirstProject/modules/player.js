class Player{ constructor (xp, health, gold, weapons){
this.xp= xp;
this.health= health;
this.gold= gold;
this.weapons= weapons
}

winXp (xpEarned){
    const addExp= this.xp + xpEarned
    this.xp= addExp
    return(this.xp)
}

manageHealth(action, value){
    let damage,
    healthEarned;

    if(action=== "hurt"){
       damage= this.health - value
       this.health=damage
    }else{
        healthEarned= this.health + value
        this.health= healthEarned
    
    }
}

useGold(action, amount){
    let goldAmount;
    if(action=== "buy"){
        goldAmount= this.gold - amount
        this.gold= goldAmount
    }else{goldAmount= this.gold + amount
    this.gold= goldAmount}
}

weaponsOnInventary(){
  console.log(this.weapons)
}

addWeaponToInventary(newWeapon){
    const inventary= newWeapon;
    this.weapons.push(inventary)
}

}

const myPlayer = new Player(0, 100, 50, ["stick"]);

const playerStat = {
    xp: document.getElementById("xpText"),
    health: document.getElementById("healthText"),
    gold: document.getElementById("goldText"),
  };
  
  const setPlayer = (stat) => {
    stat.xp.innerText = myPlayer.xp;
    stat.health.innerText = myPlayer.health;
    stat.gold.innerText = myPlayer.gold;
  };



export {Player, myPlayer, playerStat, setPlayer }

