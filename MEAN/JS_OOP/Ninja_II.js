function Ninja(name) {
    var speed = 3;
    var strength = 3;
    this.name = name;
    this.health = 100;

    this.showStats = function (){
        console.log(`Name: ${this.name}, Health: ${this.health}, Speed:${speed} Strength:${strength}`);
        return this;
    }

    Ninja.prototype.sayName = function() {
        console.log(`My name is ${this.name}`);
        return this;
    }

    Ninja.prototype.drinkSake = function() {
        this.health += 10;
        return this;
    }

    Ninja.prototype.punch = function(ninja) {
        ninja.health -= 5;
        console.log(`${ninja.name} was punched by ${this.name} and lost 5 health!`)
        return this;
    }
    this.kick = function(ninja) {
        const damage = strength * 5;
        ninja.health -= damage;
        console.log(`${ninja.name}, was kicked by ${this.name}, and lost ${damage} Health`);
    }
}

const blueNinja = new Ninja("Bill Gates");
const redNinja = new Ninja("Hyabusa");
blueNinja.punch(redNinja);
redNinja.kick(blueNinja);