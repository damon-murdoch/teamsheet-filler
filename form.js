// getAge(dateString: string): int
// Given a string containing a user's date of birth,
// converts the string to an integer containing
// the user's age based on the current date and time.
function getAge(dateString) {

    // Get the current date
    var today = new Date();

    // Convert the birth date to a date string
    var birthDate = new Date(dateString);

    // Get the difference between the birth year and current year
    var age = today.getFullYear() - birthDate.getFullYear();

    // Get the difference between the birth month and the current month
    var m = today.getMonth() - birthDate.getMonth();

    // If the birth month has not been passed in the current year
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {

        // Subtract one from the age, full year has not passed yet
        age--;
    }

    // Return the user's age
    return age;
}

// capitaliseEach(str: string): string
// Given a string, converts all of the '-'
// characters to spaces, removes all 
// capital letters from the string and then
// converts the first letter of every word
// to a capital letter.
function capitaliseEach(str) {
    
    // Split the string on spaces / dashes
    let spl = str.replaceAll('-',' ').split(' ');

    // Iterate over items in split
    for(let i=0; i<spl.length; i++)
    {
        // Get the lowercase element
        let lower = spl[i].toLowerCase();

        // Convert the first character to upper case
        lower = lower[0].toUpperCase() + lower.substr(1);

        // Replace the array element with the new string
        spl[i] = lower;
    }

    // Return the string array, joining each element using a space.
    return spl.join(' ');
}

// Code that runs when the page loads
$(document).ready(function(){

    // Filter the email headers
    let href = window.location.href;

    // Save the team list to the document
    // By default, this will be null unless
    // a paste is provided
    document.teamlist = null;

    // If there are any arguments in the path
    if (href.includes('?'))
    {
        // Split the path on the arguments
        let args = href.split('?');

        // Take the last element of the split
        args = args[args.length-1];

        // Split the arguments on each '&'
        if (args.includes('&'))
        {
            // Split each argument on the '&'
            let arguments = args.split('&');

            // Iterate over arguments in array
            for(let a of arguments)
            {
                // Switch
                spl = a.split('=');

                k = spl[0]; // Key Value
                v = spl[1]; // Variable Value
                
                // Switch on key
                switch(k)
                {
                    // First Name
                    case 'fname':

                        // If value is not blank
                        if (v)
                        {
                            // Add the first name to the document cookies
                            localStorage.setItem(k,v);

                            // Modify the first name page element
                            document.getElementById('first-name').innerHTML = v.padEnd(20,'_').replace('+',' ');
                        }
                        else
                        {
                            // If first name in localStorage
                            if ('fname' in localStorage)
                            {
                                // Dereference the first name element from the local storage
                                document.getElementById('first-name').innerHTML = localStorage['fname'].padEnd(20,'_');

                            } // No first name cookies
                            else 
                            {
                                // Modify the first name page element
                                document.getElementById('first-name').innerHTML = ''.padEnd(20,'_');
                            }
                        }

                    break;

                    // Last Name
                    case 'lname':

                        // If value is not blank
                        if (v)
                        {
                            // Add the last name to the document cookies
                            localStorage.setItem(k,v);

                            // Modify the last name page element
                            document.getElementById('family-name').innerHTML = v.padEnd(20,'_').replace('+',' ');
                        }
                        else
                        {
                            // If last name in localStorage
                            if ('lname' in localStorage)
                            {
                                // Dereference the last name element from the local storage
                                document.getElementById('family-name').innerHTML = localStorage['lname'].padEnd(20,'_');

                            } // No last name cookies
                            else 
                            {
                                // Modify the last name page element
                                document.getElementById('family-name').innerHTML = ''.padEnd(20,'_');
                            }
                        }

                    break;

                    // Player ID
                    case 'playerid':

                        // If value is not blank
                        if (v)
                        {
                            // Add the player id to the document cookies
                            localStorage.setItem(k,v);

                            // Modify the player id page element
                            document.getElementById('player-id').innerHTML = v.padEnd(20,'_').replace('+',' ');
                        }
                        else
                        {
                            // If player id in localStorage
                            if ('playerid' in localStorage)
                            {
                                // Dereference the player id element from the local storage
                                document.getElementById('player-id').innerHTML = localStorage['playerid'].padEnd(20,'_');

                            } // No player id cookies
                            else 
                            {
                                // Modify the player id page element
                                document.getElementById('player-id').innerHTML = ''.padEnd(20,'_');
                            }
                        }

                    break;

                    // Date of Birth
                    case 'dob':

                        // If value is not blank
                        if(v)
                        {
                            // Add the date of birth to the document cookies
                            localStorage.setItem(k,v);

                            // Modify the date of birth page element
                            document.getElementById('date-of-birth').innerHTML = v.padEnd(20,'_').replace('+',' ');

                            // Dereference the age
                            let age = getAge(v);

                            // Juniors division
                            if (age <= 12)
                            {
                                // Set the juniors division check box to checked
                                document.getElementById('check-junior').checked = true;
                            } // Seniors Division
                            else if (age <= 16) 
                            {
                                // Set the seniors division check box to checked
                                document.getElementById('check-senior').checked = true;
                            } // Masters Division
                            else 
                            {
                                // Set the masters division check box to checked
                                document.getElementById('check-master').checked = true;
                            }
                        }
                        else
                        {
                            // If first name in localStorage
                            if ('dob' in localStorage)
                            {
                                // Dereference the first name element from the local storage
                                document.getElementById('date-of-birth').innerHTML = localStorage['dob'].padEnd(20,'_').replace('+',' ');

                            } // No first name cookies
                            else 
                            {
                                // Modify the last name page element
                                document.getElementById('date-of-birth').innerHTML = ''.padEnd(20,'_').replace('+',' ');
                            }

                            // Set user's age in the table

                            // Dereference the age
                            let age = getAge(localStorage['dob']);

                            // Juniors division
                            if (age <= 12)
                            {
                                // Set the juniors division check box to checked
                                document.getElementById('check-junior').checked = true;
                            } // Seniors Division
                            else if (age <= 16) 
                            {
                                // Set the seniors division check box to checked
                                document.getElementById('check-senior').checked = true;
                            } // Masters Division
                            else 
                            {
                                // Set the masters division check box to checked
                                document.getElementById('check-master').checked = true;
                            }
                        }

                    break;

                    // Event Date
                    case 'eventdate':

                        // If value is not blank
                        if(v)
                        {
                            // Add the event date to the document cookies
                            // localStorage.setItem(k,v);

                            // Modify the event date page element
                            document.getElementById('event-dates').innerHTML = v.padEnd(20,'_').replace('+',' ');
                        }
                        else
                        {
                            // Modify the event date page element
                            document.getElementById('event-dates').innerHTML = ''.padEnd(20,'_').replace('+',' ');
                        }
                        
                    break;

                    // Event Name
                    case 'eventname':
                        
                        // If value is not blank
                        if(v)
                        {
                            // Add the event name to the document cookies
                            // localStorage.setItem(k,v);

                            // Modify the event name page element
                            document.getElementById('event-name').innerHTML = v.padEnd(20,'_').replace('+',' ');
                        }
                        else
                        {
                            // Modify the last name page element
                            document.getElementById('event-name').innerHTML = ''.padEnd(20,'_').replace('+',' ');
                        }

                    break;

                    // Switch Profile
                    case 'swprofile':

                        // If value is not blank
                        if(v)
                        {
                            // Add the switch profile to the document cookies
                            localStorage.setItem(k,v);

                            // Modify the switch profile page element
                            document.getElementById('switch-profile').innerHTML = v.padEnd(20,'_').replace('+',' ');
                        }
                        else
                        {
                            // If first name in localStorage
                            if ('swprofile' in localStorage)
                            {
                                // Dereference the first name element from the local storage
                                document.getElementById('switch-profile').innerHTML = localStorage['swprofile'].padEnd(20,'_').replace('+',' ');

                            } // No first name cookies
                            else 
                            {
                                // Modify the last name page element
                                document.getElementById('switch-profile').innerHTML = ''.padEnd(20,'_').replace('+',' ');
                            }
                        }

                    break;

                    // Team Name
                    case 'teamname':

                        // If value is not blank
                        if(v)
                        {
                            // Add the team name to the document cookies
                            localStorage.setItem(k,v);

                            // Modify the battle team name page element
                            document.getElementById('battle-team-name').innerHTML = v.padEnd(20,'_').replace('+',' ');
                        }
                        else
                        {
                            // If first name in localStorage
                            if ('teamname' in localStorage)
                            {
                                // Dereference the first name element from the local storage
                                document.getElementById('battle-team-name').innerHTML = localStorage['teamname'].padEnd(20,'_').replace('+',' ');

                            } // No first name cookies
                            else 
                            {
                                // Modify the last name page element
                                document.getElementById('battle-team-name').innerHTML = ''.padEnd(20,'_').replace('+',' ');
                            }
                        }
                    break;

                    // Team List
                    case 'teamlist':

                        // If the value is not blank
                        if(v)
                        {
                            // Set the paste variable to the team list
                            document.teamlist = v;
                        }
                        // Otherwise, paste variable is left null

                    break;
                }
            }
        }
    }

    // If a team list 
    // has been provided
    if (document.teamlist)
    {
        // Parse the team list
        
        // Convert special characters to their respective actual characters
        document.teamlist = document.teamlist.replaceAll('+',' ');
        document.teamlist = document.teamlist.replaceAll('%40','@');
        document.teamlist = document.teamlist.replaceAll('%0D','\r');
        document.teamlist = document.teamlist.replaceAll('%0A','\n');
        document.teamlist = document.teamlist.replaceAll('%0A','\n');
        document.teamlist = document.teamlist.replaceAll('%2F','/');
        document.teamlist = document.teamlist.replaceAll('%3A',':');
        document.teamlist = document.teamlist.replaceAll('%28','(');
        document.teamlist = document.teamlist.replaceAll('%29',')');
        document.teamlist = document.teamlist.replaceAll('%5B','[');
        document.teamlist = document.teamlist.replaceAll('%5D',']');

        // Trim leading and trailing whitespace
        document.teamlist = document.teamlist.trim();

        // Split the team into individual sets
        let team = document.teamlist.split("\r\n\r\n");

        // Track the pokemon we are currently working on
        let i=1;

        // Iterate over pokemon in the team
        for(set of team)
        {
            // Create a new pokemon object
            let pokemon = new Pokemon();

            // Parse the pokemon object into the string
            // Automatically convert to lower case for uniformity
            pokemon.parse(set.toLowerCase());

            // If the pokemon species includes '-gmax'
            if (pokemon.species.includes('-gmax'))
            {
                // Set the gmax value in the teamsheet to yes
                document.getElementById('gmax' + i).innerHTML = 'Yes';

                // Remove the gmax tag from the pokemon species title
                pokemon.species = pokemon.species.replace('-gmax','');
            }
            else 
            {
                // Set the gmax value in the teamsheet to no
                document.getElementById('gmax' + i).innerHTML = 'No';
            }

            // If the pokemon is a mega evolution
            if (pokemon.species.includes('-mega'))
            {
                // Split the string on the '-' element, 
                // and take the first element (should be base species)
                pokemon.species = pokemon.species.split('-')[0].trim();
            }

            // If the pokemon is a primal evolution
            if (pokemon.species.includes('-primal'))
            {
                // Split the string on the '-' element, 
                // and take the first element (should be base species)
                pokemon.species = pokemon.species.split('-')[0].trim();
            }

            // Add the species to the element on the page
            document.getElementById('species' + i).innerHTML = capitaliseEach(pokemon.species);

            // Add the level to the element on the page
            let level = 100;

            // If the level is specified in the species
            if ('Level' in pokemon.params)
            {
                // Update the level with the specified level
                level = parseInt(pokemon.params.Level);
            }

            // Set the level on the page
            document.getElementById('level' + i).innerHTML = level;

            // If the ability is specified
            if ('ability' in pokemon && pokemon.ability !== null)
            {
                // Add the ability to the element on the page
                document.getElementById('ability' + i).innerHTML = capitaliseEach(pokemon.ability);
            }

            // If the ability is specified
            if ('item' in pokemon && pokemon.item !== null)
            {
                // Add the ability to the element on the page
                document.getElementById('item' + i).innerHTML = capitaliseEach(pokemon.item);
            }

            // If the moves are specified
            if ('moves' in pokemon)
            {
                let j=1;

                // Iterate over moves
                for(let move in pokemon.moves)
                {
                    //  Add the move to the form
                    document.getElementById('move' + j + i).innerHTML = capitaliseEach(pokemon.moves[move]);

                    // Increment the current move
                    j++;
                }
            }

            // Calculate the stats of the pokemon, using 
            // ivs, evs, nature, level required
            if ('evs' in pokemon && 
                'ivs' in pokemon && 
                'nature' in pokemon && 
                pokemon.nature in natures)
            {
                // Dereference the pokemon's nature
                let nature = natures[pokemon.nature];

                // This is how the pokemon name should appear in the pokedex array
                let species_id = pokemon.species.replaceAll('-','').replaceAll(' ','')

                // Dereference the pokemon's stats
                let species = pokedex[species_id];

                // If the species is not null
                if(species !== null && species !== undefined)
                {
                    // Nature set modifiers
                    
                    // 1x modifier by default
                    let set_nature = {
                        'atk': 1,
                        'def': 1,
                        'spa': 1,
                        'spd': 1,
                        'spe': 1
                    };

                    // Assign the positive nature modifier
                    set_nature[nature.pos] = 1.1;
                    
                    // Assign the negative nature modifier
                    set_nature[nature.neg] = 0.9;

                    // Calculate the 'hp' stat and add it to the form
                    let hps = hp(species.baseStats.hp,pokemon.ivs.hp,pokemon.evs.hp,level);
                    document.getElementById('hp' + i).innerHTML = hps;

                    // Calculate the 'atk' stat and add it to the form
                    let atk = stat(species.baseStats.atk,pokemon.ivs.atk,pokemon.evs.atk,level,set_nature.atk);
                    document.getElementById('atk' + i).innerHTML = atk;
                    
                    // Calculate the 'def' stat and add it to the form
                    let def = stat(species.baseStats.def,pokemon.ivs.def,pokemon.evs.def,level,set_nature.def);
                    document.getElementById('def' + i).innerHTML = def;
                    
                    // Calculate the 'spa' stat and add it to the form
                    let spa = stat(species.baseStats.spa,pokemon.ivs.spa,pokemon.evs.spa,level,set_nature.spa);
                    document.getElementById('spa' + i).innerHTML = spa;
                    
                    // Calculate the 'spd' stat and add it to the form
                    let spd = stat(species.baseStats.spd,pokemon.ivs.spd,pokemon.evs.spd,level,set_nature.spd);
                    document.getElementById('spd' + i).innerHTML = spd;
                    
                    // Calculate the 'spe' stat and add it to the form
                    let spe = stat(species.baseStats.spe,pokemon.ivs.spe,pokemon.evs.spe,level,set_nature.spe);
                    document.getElementById('spe' + i).innerHTML = spe;
                }
            }

            // Increment the current pokemon
            i++;
        }
    }
});