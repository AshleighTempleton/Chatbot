/* Variables & messages */

let botGreeting = document.getElementById("botGreeting");
let botMessage = document.getElementById("botMessage");
let botBye = document.getElementById("botBye");

let k = 0;

const greetings = [
  "Meow meow! Are you feeling well today?",
  "Puuuurrrrrrr, will you be my friend?",
  "Hey! Cats are the best, don't you think?",
  "Meoooowww ~ Can I have your number?",
];

const yes = [
  "Yay that's great",
  "Oh thats nice :)",
  "I knew it!",
  "Cool bro",
  "Meowwww, awesome!",
];

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
  "Ouais",
];

const no = [
  "That's a shame...",
  "Well ok then.",
  "Whatever!",
  "Fine, be that way.",
];

const noAns = ["no", "No", "NO", "no way", "NO WAY", "non", "Non", "NON"];

const wrongAns =
  "Purr, I only understand 'yes' or 'no' answers, please try again";
const wrongAns3 = "Wtf is wrong with you? Stop clicking and get out of here!";

const bye = "Well I must go, bye bye for now ~";

/* Functions */

function welcome() {
  let greetRan = Math.floor(Math.random() * greetings.length);
  botGreeting.innerHTML = greetings[greetRan];
}

botGreeting.onload = setTimeout(welcome, 1000);

function byeMsg() {
  botBye.innerHTML = bye;
}

function chat() {
  let textBox = document.getElementById("userMessage");
  let userMessage = document.getElementById("userMessage").value;
  let check = false;

  for (let i = 0; i < yesAns.length; i++) {
    if (userMessage == yesAns[i]) {
      let yesRan = Math.floor(Math.random() * yes.length);
      botMessage.innerHTML = yes[yesRan];
      check = true;
      textBox.disabled = true;
      setTimeout(byeMsg, 1500);
    } else if (userMessage == noAns[i]) {
      let noRan = Math.floor(Math.random() * no.length);
      botMessage.innerHTML = no[noRan];
      check = true;
      textBox.disabled = true;
      setTimeout(byeMsg, 1500);
    }
  }

  if (check == false) {
    if (k < 2) {
      botMessage.innerHTML = wrongAns;
      console.log(k);
      k++;
    } else {
      botMessage.innerHTML = wrongAns3;
      console.log(k);
      textBox.disabled = true;
      setTimeout(byeMsg, 1500);
    }
  }
}

/* Events */

document.getElementById("btnSubmit").addEventListener("click", function () {
  chat();
});

document
  .getElementById("userMessage")
  .addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      chat();
    }
  });
