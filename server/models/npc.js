const mongoose = require("mongoose")
const Schema = mongoose.Schema

const npcSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    age:{
        type: Number,
        required: true
    },
    gender:{
        type: String,
        required: true
    },
    classtype: String,
    agility: Number,
    weapons: String,
    hp: Number,
    mana: Number,
    specialAbility: String
})

const Npc = module.exports = mongoose.model("Npc", npcSchema)

//Name
//Age (Any number between 1-1000)
//Gender (M/F)
//Class (Wizard, ninja, mercenary, hacker, etc)
//Agility (speed - number between 1-100)
//Weapons - none, sword, gun, space laser
//HP (random number between 1-500)
//Mana (random number between 1-500)
//Special Ability (pick one from a list of random ones.)

// Base:
//Name
//Age (Any number between 1-1000)
//Gender (M/F)
//Class (Limited to normal human Class.)

//Add Ons:
//Special fancy classes
//Agility (speed - random number between 1-100)
    //Add ons could be add 10 to your agility...
//Weapons - none, sword, gun, space laser
    //add on - default adds 1 random weapon. buy more to get more weapons
//HP (random number between 1-500)
    // don't like ur hp? "buy" to add more to your hp +10 per pack up to 500
//Mana (random number between 1-500)
        // don't like ur mana count? "buy" to add more to your hp +10 per pack up to 500
//Special Ability (pick one from a list of random ones.)
    //they can add on and "buy" more special abilities than just the one.

//Each of the "customer's characters's data is shown in a card component."
