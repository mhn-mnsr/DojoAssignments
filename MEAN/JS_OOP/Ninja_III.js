class Ninja {
    constructor(name){
        this.name = name;
        this.speed = 3;
        this.strength = 3;
        this.health = 100
    }
    sayName(){
        console.log(`My name is ${this.name}`);
    }

    showStats(){
        console.log(`Name: ${this.name}, Health: ${this.health}, Speed:${speed} Strength:${strength}`);
    }

    drinkSake(){
        this.health += 10;
        return this;
    }
}
class Sensei extends Ninja {
    constructor(name){
        super(name);
        this.health = 200;
        this.speed = 10;
        this.strength = 10;
        this.wisdom = 10;
    }
    speakWisdom(){
        super.drinkSake;
        console.log("What one programmer can do in one month, two programmers can do in two months")
    }
    showStats() {
        console.log(`Name: ${this.name}, Health: ${this.health}, Speed: ${this.speed}, Strength: ${this.strength}, Wisdom: ${this.wisdom}`);
    }
}

const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
superSensei.showStats();
