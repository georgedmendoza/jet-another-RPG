const Potion = require('../lib/Potion');
const Character = require('./Character');

class Player extends Character{
    constructor(name = '') {
        // call parent constructor here:
        super(name);

        this.inventory = [new Potion('health'), new Potion()];
    }

    getStats() {
        return {
            potions: this.inventory.length,
            health: this.health,
            strength: this.strength,
            agility: this.agility
        };
    }

    getInventory() {
        if(this.inventory.length) {
            return this.inventory;
        }
        return false;
    }

    addPotion(potion) {
        this.inventory.push(potion);
    }

    usePotion(index) {
        //riginal inventory array has a single Potion removed at the specified 
        //index value and put into a new "removed items" array, 
        //then the Potion at index [0] of this "removed items" array is saved in a potion variable.
        const potion = this.getInventory().splice(index,1)[0];

        switch (potion.name) {
            case 'agility':
                this.agility += potion.value;
                break;
            case 'health':
                this.health += potion.value;
                break;
            case 'strength':
                this.strength += potion.value;
                break;
        }
    }
}

module.exports = Player