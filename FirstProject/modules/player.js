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
       return damage
    }else{
        healthEarned= this.health + value
    }
}

useGold(action, amount){
    let goldAmount;
    if(action=== "buy"){
        goldAmount= this.gold - amount
        return goldAmount
    }else{goldAmount= this.gold + amount}
}

};

export default Player

