
//let userMessage = document.getElementById("userMessage").value
let botMessage = document.getElementById("botMessage")
const greetings = [
    "Meow meow! Are you feeling well today?",
    "Puuuurrrrrrr, will you be my friend?",
    "Hey! Cats are the best, don't you think?",
    "Meoooowww ~ Can I have your number?"
]

const yes = [
    "Yay that's great",
    "Oh thats nice :)",
    "I knew it!",
    "Cool bro",
    "Meowwww, awesome!"
]

const yesAns = [
    "Yes",
    "yes",
    "YES",
    "yeah",
    "Yeah",
    "oui",
    "Oui",
    "OUI",
    "ouais",
    "Ouais"
]

const no = [
    "That's a shame...",
    "Well ok then.",
    "Whatever!",
    "Fine, be that way."
]

const noAns = [
    "no",
    "No",
    "NO",
    "no way",
    "NO WAY",
    "non",
    "Non",
    "NON"
]

const wrongAns = "Purr, I only understand 'yes' or 'no' answers, please try again";
const wrongAns3 = "Wtf is wrong with you? Stop clicking and get out of here!";

var k = 0

/* TBD where to link */
function welcome() {
    let userName = document.getElementById("userName").value
    let greetRan = Math.floor(Math.random() * greetings.length);
    //change to loading page greeting
    botMessage.innerHTML = greetings[greetRan];
    console.log(userName)
}

function chat() {
    let userMessage = document.getElementById("userMessage").value
    let check = false;


    for (let i = 0; i < yesAns.length; i++) {
        if (userMessage == yesAns[i]) {
            let yesRan = Math.floor(Math.random() * yes.length);
            botMessage.innerHTML = yes[yesRan];
            check = true;
        }
        else if (userMessage == noAns[i]) {
            let noRan = Math.floor(Math.random() * no.length)
            botMessage.innerHTML = no[noRan];
            check = true;
        }
    }

    if (check == false) {
        if (k < 3) {
            botMessage.innerHTML = wrongAns;
            console.log(k);
            k++
        }
        else {
            botMessage.innerHTML = wrongAns3;
            console.log(k)
        }
    }
}


document.getElementById("btnSubmit").addEventListener("click", function () {
    chat()
});



document.getElementById("userMessage").addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        chat()
    }
});


// // Execute a function when the user releases a key on the keyboard
// input.addEventListener("keyup", function (event) {
//     // Number 13 is the "Enter" key on the keyboard
//     if (event.keyCode === 13) {
//         // Cancel the default action, if needed
//         event.preventDefault();
//         // Trigger the button element with a click
//         document.getElementById("myBtn").click();
//     }
// });


