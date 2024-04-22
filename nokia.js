function displayMainMenu() {
    console.log("1. Phone book");
    console.log("2. Messages");
    console.log("3. Chat");
    console.log("4. Call Register");
    console.log("5. Tones");
    console.log("6. Settings");
    console.log("7. Call Divert");
    console.log("8. Games");
    console.log("9. Calculator");
    console.log("10. Reminders");
    console.log("11. Clock");
    console.log("12. Profiles");
    console.log("13. SIM Services");
}

function displayPhoneBookSubMenu() {
    console.log("1. Search");
    console.log("2. Service Nos");
    console.log("3. Add name");
    console.log("4. Erase");
    console.log("5. Edit");
    console.log("6. Assign tone");
    console.log("7. Send b'card");
    console.log("8. Options");
    console.log("9. Speed dials");
    console.log("10. Voice tags");
    console.log("0. Back");
}

function handlePhoneBookSearch() {
    console.log("Search");
}

function handlePhoneBookOptions() {
    console.log("1. Type of view");
    console.log("2. Memory status");
}

function displayMessaageSubMenu(){
    console.log("1. Write and send a text message");
    console.log("2. Read text message");
    console.log("3. Views saved messages");
    console.log("4. Picture message");
    console.log("5. Templates");
    console.log("6. Smiley");
    console.log("7. Message settings");
    console.log("8. Info service");
    console.log("9. Voice mailbox number");
    console.log("10. Service command editor");
}

function handleMessageSettings(){
    console.log("Message settings");
}

function displayChatSubMenu(){
    console.log("1. Start a chat");
    console.log("2. Read received message");
}

function handleChatOptions(){
    console.log("1 Edit chat name");
    console.log("2. View chat history");
}

function displayCallRegisterSubMenu(){
    console.log("1. Missed calls");
    console.log("2. Received calls");
    console.log("3. Dialled numbers");
    console.log("4. Erased recent call lists");
    console.log("5. Show call duration");
    console.log("6. Show call costs");
    console.log("7. Show costs in");
    console.log("8. Call cost settings");
    console.log("9. Prepaid credit");
}

function handleShowCallDuration() {
    console.log("Last call duration");
    console.log("All calls duration");
    console.log("Received calls duration");
    console.log("Dialled call duration");
    console.log("Clear timers");
}

function handleCallCostSettings(){
    console.log("1. Call cost limit");
    console.log("2. Show cost");   
}

function displayTonesSubMenu(){
    console.log("1 Ringing tone");
    console.log("2. Ringing volume");
    console.log("3. Incoming call alert");
    console.log("4. Composer");
    console.log("5. Message alert tone");
    console.log("6. Keypad tones");
    console.log("7. Warning tones");
    console.log("8. Vibrating alert");
    console.log("9. Screen saver");
}

function handleComposer(){
    console.log("1. Play");
    console.log("2. Save");
    console.log("3 Tempo");
    console.log("4 Clear screen");
    console.log("5. Exit");
}

function displaySettingsSubMenu(){
    console.log("1. Call settings");
    console.log("2. Phone settings");
    console.log("3. Security settings");
    console.log("4. Restore factory settings");
}

function handleCallSettings(){
    console.log("1. Automatic redial");
    console.log("2. Speed dialling");
    console.log("3. Call waiting options");
    console.log("4. Own number sending");
    console.log("5. Phone line in use");
    console.log("6. Automatic answer");
}

function handlePhoneSettings(){
    console.log("1. Language");
    console.log("2. Cell info display");
    console.log("3. Welcome note");
    console.log("4. Network selection");
    console.log("5. Lights");
    console.log("6. Confirm SIM service actions");
}

function handleSecuritySettings(){
    console.log("1. PIN code request");
    console.log("2 Call barring service");
    console.log("3. Fixed dialling");
    console.log("4. Closed user group");
    console.log("5. Phone security");
    console.log("6. Change access codes");
}

function displayCallDivertSubMenu(){
    console.log("1  Divert when busy");
}

function displayGamesSubMenu(){
    console.log("1. Snake II");
    console.log("2. Space Impact");
    console.log("3. Bantumi");
    console.log("4. Pairs II");
    console.log("5. Settings");
}

function displayCalculatorSubMenu(){
    console.log("1. Calculation");
    console.log("2. Currency conversion");
    console.log("3. Currency conversion in standby mode");
}

function displayReminderSubMenu(){
    console.log("1. Add new");
    console.log("2. Erase");
    console.log("3. View all");
}

function displayClockSubMenu(){
    console.log("1. Alarm clock");
    console.log("2. Clock settings");
    console.log("3. Date setting");
    console.log("4. Stopwatch");
    console.log("Countdown timer");
    console.log("Automatic date and time");
}

function displayProfilesSubMenu(){
    console.log("1. Silent");
    console.log("2. Personalise");
    console.log("3. General");
}

function displaySimServicesSubMenu(){

}

function main() {
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });

    displayMainMenu();
    readline.question('Enter your choice: ', (userInput) => {
        userInput = parseInt(userInput);

        if (userInput === 1) {
            displayPhoneBookSubMenu();
            readline.question('Enter your choice: ', (subMenuInput) => {
                subMenuInput = parseInt(subMenuInput);
                if (subMenuInput === 1) {
                    handlePhoneBookSearch();
                } else if (subMenuInput === 8) {
                    handlePhoneBookOptions();
                } else if (subMenuInput === 0) {
                    displayMainMenu();
                }
                readline.close();
            });
        } else if (userInput === 2) {
            displayMessageSettings();
            readline.question('Enter your choice ',) (subMenuInput) => {
                subMenuInput = parseInt(subMenuInput);
            if (subMenuInput === 7){
                handleMessageSettings();
            }else if (subMenuInput === 0){
                displayMainMenu();
            }

        } else if (userInput === 3) {
            displayChatSubMenu();
            subMenuInput = parseInt(subMenuInput);
        
        if (subMenuInput === 1){
            handleChatOptions();
        } else if (subMenuInput === 0){
            displayMainMenu();
        }
    
    } else if (userInput === 4){
        displayCallRegisterSubMenu();
        subMenuInput = parseInt(subMenuInput);

        if(subMenuInput === 5){
            handleShowCallDuration();
        } else if(subMenuInput === 0){
            displayMainMenu();
        }

    } else if (userInput === 5){
        displayTonesSubMenu();
        subMenuInput = parseInt(subMenuInput);

        if (subMenuInput === 4){
            handleComposer();
        } else if (subMenuInput === 0){
            displayMainMenu();
        }
    } else if (userInput === 6){
        displaySettingsSubMenu();
        subMenuInput = parseInt(subMenuInput);

        if (subMenuInput === 1){
            handleCallSettings();
        } else if (subMenuInput === 0){
            displayMainMenu();
        }

        if (subMenuInput === 2){
            handlePhoneSettings();
        } else if (subMenuInput === 0){
            displayMainMenu();
        }

        if (subMenuInput === 3){
            handleSecuritySettings();
        } else if (subMenuInput === 0){
            displayMainMenu();
        }

    } else if (userInput === 7){
        displayCallDivertSubMenu();
        subMenuInput = parseInt(subMenuInput);

    } else if (userInput === 8){
        displayGamesSubMenu();
        subMenuInput = parseInt(subMenuInput);

    } else if (userInput === 9){
        displayCalculatorSubMenu();
        subMenuInput = parseInt(subMenuInput);

    } else if (userInput === 10){
        displayReminderSubMenu();
        subMenuInput = parseInt(subMenuInput);

    } else if (userInput === 11){
        displayClockSubMenu();
        subMenuInput = parseInt(subMenuInput);

    } else if (userInput === 12){
        displayProfilesSubMenu();
        subMenuInput = parseInt(subMenuInput);

    } else if (userInput === 13){
        displaySimServicesSubMenu();
        subMenuInput = parseInt(subMenuInput);
    }
        }
        
    });
}


main();
