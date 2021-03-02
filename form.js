function getAge(dateString) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

// Code that runs when the page loads
$(document).ready(function(){

    // Filter the email headers
    let href = window.location.href;

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
                                document.getElementById('date-of-birth').innerHTML = localStorage['dob'].padEnd(20,'_');

                            } // No first name cookies
                            else 
                            {
                                // Modify the last name page element
                                document.getElementById('date-of-birth').innerHTML = ''.padEnd(20,'_');
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
                            document.getElementById('event-dates').innerHTML = ''.padEnd(20,'_');
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
                            document.getElementById('event-name').innerHTML = ''.padEnd(20,'_');
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
                                document.getElementById('switch-profile').innerHTML = localStorage['swprofile'].padEnd(20,'_');

                            } // No first name cookies
                            else 
                            {
                                // Modify the last name page element
                                document.getElementById('switch-profile').innerHTML = ''.padEnd(20,'_');
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
                                document.getElementById('battle-team-name').innerHTML = localStorage['teamname'].padEnd(20,'_');

                            } // No first name cookies
                            else 
                            {
                                // Modify the last name page element
                                document.getElementById('battle-team-name').innerHTML = ''.padEnd(20,'_');
                            }
                        }
                    break;
                }
            }
        }
    }
});