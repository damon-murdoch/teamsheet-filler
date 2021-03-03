// Nickname (Species) [(M/F)] @ Item OR
// Species [(M/F)] @ Item
// Ability: (Ability)
// Shiny: (Yes/No)
// Ball: (Ball)
// IVs: [x HP / x Atk / x Def / x SpA / x SpD / x Spe]
// EVs: [x HP / x Atk / x Def / x SpA / x SpD / x Spe]
// (Nature) Nature
// - (Move 1)
// - (Move 2)
// - (Move 3)
// - (Move 4)

// Pokemon Stats Object
class Stats {

    constructor()
    {
        this.hp = 0;
        this.atk = 0;
        this.def = 0;
        this.spa = 0;
        this.spd = 0;
        this.spe = 0;
    }

    toString()
    {
        // List which will be merged to create the string
        list = []

        // If there is a hp stat, append the hp stat to the list
        if (this.hp) { list.append(this.hp + " HP"); }

        // If there is a hp stat, append the hp stat to the list
        if (this.atk) { list.append(this.atk + " Atk"); }

        // If there is a hp stat, append the hp stat to the list
        if (this.def) { list.append(this.def + " Def"); }

        // If there is a hp stat, append the hp stat to the list
        if (this.spa) { list.append(this.spa + " SpA"); }

        // If there is a hp stat, append the hp stat to the list
        if (this.spd) { list.append(this.spd + " SpD"); }

        // If there is a hp stat, append the hp stat to the list
        if (this.spe) { list.append(this.spe + " Spe"); }

        // Join the list using the '/' character to separate stats
        return list.join('/');
    }
}

// Pokemon Class Object
class Pokemon {

    constructor()
    {
        this.nickname = null;
        this.species = null;
        this.gender = null;
        this.item = null;
        this.ability = null;
        this.shiny = null;
        this.ball = null;
        this.ivs = new Stats();
        this.evs = new Stats();
        this.nature = null;
        this.moves = [];
    }

    toString()
    {
        // Base string
        str = "";

        // If the pokemon has a nickname
        if (this.nickname)
        {
            // Use the nickname template
            str += this.nickname + " (" + this.species + ")";
        }
        else
        {
            // Use the no nickname template
            str += this.species;
        }

        // If the pokemon has a gender
        if (this.gender)
        {
            // Add the gender to the string
            str += " (" + this.gender + ")";
        }

        // If the pokemon has an item
        if (this.item)
        {
            // Add the species to the string
            str += " " + this.item;
        }

        // Add the new line character to the string
        str += "\n";

        // If there is an ability specified
        if (this.ability)
        {
            // Add the ability to the string
            str += "Ability: " + this.ability + "\n";
        }

        // If the shiny condition is specified
        if (this.shiny)
        {
            // Add the ability to the string
            str += "Shiny: " + this.shiny + "\n";
        }

        // If the ball condition is specified
        if (this.ball)
        {
            // Add the ability to the string
            str += "Ball: " + this.ball + "\n";
        }

        // If the ivs condition is specified
        if (this.ivs.toString())
        {
            // Add the ivs to the string
            str += "IVS: " + this.ivs.toString() + "\n";
        }

        // If the evs condition is specified
        if (this.evs.toString())
        {
            // Add the ivs to the string
            str += "EVS: " + this.evs.toString() + "\n";
        }

        // If a nature is specified
        if (this.nature)
        {
            // Add the nature to the string
            str += this.nature + " nature\n";
        }

        // Iterate over list of moves
        for(let move of this.moves)
        {
            // Add the move to the form
            str += "- " + move + "\n";
        }
    }
}

// Parser Function
function parse(string)
{
    
}