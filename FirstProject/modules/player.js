class Player{ constructor (xp, health, gold){
this.xp= xp;
this.health= health;
this.gold= gold;
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

};

export default Player

