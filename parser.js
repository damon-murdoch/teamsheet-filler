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

    constructor(n=0)
    {
        this.hp = n;
        this.atk = n;
        this.def = n;
        this.spa = n;
        this.spd = n;
        this.spe = n;
    }

    toString()
    {
        // List which will be merged to create the string
        let list = []

        // If there is a hp stat, append the hp stat to the list
        if (this.hp) { list.push(this.hp + " HP"); }

        // If there is a hp stat, append the hp stat to the list
        if (this.atk) { list.push(this.atk + " Atk"); }

        // If there is a hp stat, append the hp stat to the list
        if (this.def) { list.push(this.def + " Def"); }

        // If there is a hp stat, append the hp stat to the list
        if (this.spa) { list.push(this.spa + " SpA"); }

        // If there is a hp stat, append the hp stat to the list
        if (this.spd) { list.push(this.spd + " SpD"); }

        // If there is a hp stat, append the hp stat to the list
        if (this.spe) { list.push(this.spe + " Spe"); }

        // Join the list using the '/' character to separate stats
        return list.join(' / ');
    }

    parse(str)
    {
        // Split the string on the slashes
        let split = str.split('/');

        // Iterate over the splits
        for(spl of split)
        {
            // Remove leading / trailing space
            let row = spl.trim();

            // If the row includes a space
            if(row.includes(' '))
            {
                // Split the k/v on the space
                let col = row.split(' ');

                // Switch on the stat in question
                switch(col[1].trim().toLowerCase())
                {
                    case 'hp': 
                        this.hp = parseInt(col[0].trim());
                    break;
                    case 'atk': 
                        this.atk = parseInt(col[0].trim());
                    break;
                    case 'def': 
                        this.def = parseInt(col[0].trim());
                    break;
                    case 'spa': 
                        this.spa = parseInt(col[0].trim());
                    break;
                    case 'spd': 
                        this.spd = parseInt(col[0].trim());
                    break;
                    case 'spe': 
                        this.spe = parseInt(col[0].trim());
                    break;
                }
            }
        }
    }
}

// Pokemon Class Object
class Pokemon {

    constructor()
    {
        // Nickname - String
        this.nickname = null;
        
        // Species - String
        this.species = null;
        
        // Gender - String (M/F)
        this.gender = null;
        
        // Item - String
        this.item = null;
        
        // Ability - String
        this.ability = null;

        // Params - Other, non-specific arguments
        // e.g. Ball: (Ball), Shiny: (Yes/No)
        this.params = {};
        
        // IVs - Stats object
        this.ivs = new Stats(31);
        
        // EVs - Stats object
        this.evs = new Stats(0);
        
        // Nature - String
        this.nature = null;
        
        // Moves - String[], should contain 4
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

        // Iterate over the additional params
        for(let param in this.params)
        {
            // Write each additional param to the string
            str += param + ": " + this.params[param] + "\n";
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

    parse(set)
    {
        // Remove the \r characters from the string
        set = set.replace('\r','');

        // Split the set on the newlines
        let lines = set.split('\n');

        // Iterate over the lines
        for (let line of lines)
        {
            // If line includes either an '@' symbol or
            // a '(' symbol (no need to check for ')')
            if (line.includes('@') || line.includes('('))
            {
                // If the line shows male gender
                if (line.includes('(M)'))
                {
                    // Set the pokemon's gender to M
                    this.gender = 'M';

                    // Remove the gender from the string
                    line = line.replace('(M)','');
                }
                // If the line shows a female gender
                else if (line.includes('(F)'))
                {
                    // Set the pokemon's gender to F
                    this.gender = 'F';

                    // Remove the gender from the string
                    line = line.replace('(F)','');
                }

                // Define empty string
                let namesection = '';

                // If it contains the '@' symbol
                if (line.includes('@'))
                {
                    // Split the line on the '@'
                    let spl = line.split('@');

                    // Item specified, namesection is first split
                    namesection = spl[0].trim();

                    // Item is second split, remove the leading/trailing space
                    this.item = spl[1].trim();
                }
                else
                {
                    // No item, no need to split
                    namesection = spl;
                }

                // Handle the namesection

                // If there is a nickname 
                // in the string
                if (line.includes('('))
                {
                    // Nickname (Species)

                    // Remove the open and closing bracket from the string
                    this.line = line.replace('(','').replace(')','');

                    // Split the string on the spaces
                    // Remove extra leading and trailing spaces
                    let _spl = line.trim().split(' ');

                    // Assign the pokemon species
                    this.species = _spl[1].trim();

                    // Assign the pokemon nickname
                    this.nickname = _spl[0].trim();
                }
                else
                {
                    // Species
                    this.species = namesection.trim();
                }
            }

            // If the line includes a ':' character
            // It is a pre-defined or otherwise parameter
            if (line.includes(':'))
            {
                // Split the line on the ':' character
                let _spl = line.split(':');

                // Key is the first section, with
                // leading/trailing space removed
                let k = _spl[0].trim();

                // Value is the last section, with
                // leading/trailing space removed
                let v = _spl[1].trim();

                // Switch on the key value
                switch(k)
                {
                    case 'Ability':
                        // Assign the abilit
                        this.ability = v;
                    break;
                    case 'EVs':
                        // Parse the EVs into the EVs
                        this.evs.parse(v);
                    break;

                    // IVs specifier
                    case 'IVs':
                        // Parse the IVs into the IVs 
                        this.ivs.parse(v);
                    break;
                    default:
                        // Insert custom/misc param into params
                        this.params[k] = v;
                    break;
                }
            }

            // Strip the leading/trailing space, and see 
            // if the string ends with 'nature'
            if (line.trim().toLowerCase().endsWith('nature'))
            {
                // Remove the nature indicator, then remove
                // the leading and trailing spaces
                this.nature = line.toLowerCase().replace('nature','').trim();
            }
            // If the line starts with a '-', 
            // meaning it is a move identifier
            if (line.trim().startsWith('-'))
            {
                // Add the move to the moves list, after removing
                // the move identifier and removes leading and trailing
                // space
                this.moves.push(line.replace('-','').trim());
            }
        }
    }
}