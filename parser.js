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
        this.ivs = new Stats();
        
        // EVs - Stats object
        this.evs = new Stats();
        
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
                    namesection = spl[0].strip();

                    // Item is second split, remove the leading/trailing space
                    this.item = spl[1].strip();
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
                    let _spl = line.strip().split(' ');

                    // Assign the pokemon species
                    this.species = _spl[1].strip();

                    // Assign the pokemon nickname
                    this.nickname = _spl[0].strip();
                }
                else
                {
                    // Species
                    this.species = line.strip();
                }
            }
            
            /*
            // Ability: [Ability]
            if (line.startsWith('Ability:'))
            {
                // Remove the ability indicator, then remove
                // the leading and trailing spaces
                this.ability = line.replace('Ability:','').strip();
            }
            // EVs: [EVs]
            if (line.startsWith('EVs:'))
            {
                // Remove the EVs indicator, then remove the 
                // leading and trailing spaces and parse it
                // into the EVs object
                this.evs.parse(line.replace('EVs:','').strip());
            }
            // IVs: [IVs]
            if (line.startsWith('IVs:'))
            {
                // Remove the IVs indicator, then remove the 
                // leading and trailing spaces and parse it
                // into the IVs object
                this.ivs.parse(line.replace('IVs:','').strip());
            }
            */

            // If the line includes a ':' character
            // It is a pre-defined or otherwise parameter
            if (line.includes(':'))
            {
                // Split the line on the ':' character
                let _spl = line.split(':');

                // Key is the first section, with
                // leading/trailing space removed
                let k = _spl[0].strip();

                // Value is the last section, with
                // leading/trailing space removed
                let v = _spl[1].strip();

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
            if (line.strip().endsWith('nature'))
            {
                // Remove the nature indicator, then remove
                // the leading and trailing spaces
                this.nature = line.replace('nature','').strip();
            }
            // If the line starts with a '-', 
            // meaning it is a move identifier
            if (line.strip().startsWith('-'))
            {
                // Add the move to the moves list, after removing
                // the move identifier and removes leading and trailing
                // space
                this.moves.append(line.replace('-','').strip());
            }
        }
    }
}