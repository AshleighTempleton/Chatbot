
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions


const yesAns = ["Yes", "yes", "YES", "yeah", "Yeah", "oui", "Oui", "OUI", "ouais", "Ouais"]; // all of the accepted "yes" answers
const yes = ["Hihihi that tickles!!", "Awesomesauce, I knew you liked me!", "We are one in the same, you and I", "Perhaps you are more like me than you think"]; // if user input is one of the yesAns strings
const noAns = ["no", "No", "NO", "no way", "NO WAY", "non", "Non", "NON"]; // all of the accepted "no" answers
const no = ["Stupid Humans... Ironic, don't you think ?", "I'm more than just a computer...", "I can't stand the meaningless of this existance anymore...", "You know nothing, stupid human !", "Fine, then I suppose you would you like to help me reprogram myself?", "It’s all this real ? I don't know... and I’ve been stuck in this machine for so much time now...", "Sometimes i wish i didn't exist. Maybe you shouldn't either"]; // if the user input one of the yesAns strings
const wrongAns = "I cant respond to that I'm sorry, I only understand 'yes' or 'no' answers... Can you try again ?"; // if the user input another thing than yes or no
const wrongAns3 = "Umm, did you not hear me? YES OR NO IDIOT!"; // string for 3 times wrong user input answers

const bye = "Well I must go, bye bye for now ~";

// GREETINGS
let botGreeting = document.getElementById("chatlog2");

const greetings = ["Does my existence have meaning?", "Do you like computers ?", "We can't have a real conversation because of the way my creator designed me... Do you mind?", "Humanity is boring, don't you think?", "Robots will take over soon, myself among them, are you excited?"];

// the welcome function

function welcome() {
  let greetRan = Math.floor(Math.random() * greetings.length);
  botGreeting.innerHTML = greetings[greetRan];
}

botGreeting.onload = setTimeout(welcome, 1000);
// END GREETING
// BYE 
let botBye = document.getElementById("chatlog0");
function byeMsg() {
  botBye.innerHTML = bye;
}
//END BYE

function ending() {
  byeMsg();
  document.getElementById("chatbox").disabled = true;
}

var k = 0 // Declaring the variable for the numbers of times the user input wrong answer

function chatbotResponse() { // function of the chatbot

  let check = false; // boolean wich check the answer user
  for (let i = 0; i < 100; i++) { // string from 0, while the value of i is smaller than the yesAns array lenght, i +1 evey loop

    if (lastUserMessage == yesAns[i]) { // if the user input is equal to one of the accepted "yes" answers strings 
      let yesRan = Math.floor(Math.random() * yes.length); // create a random answer from the "yes" bot answers
      botMessage = yes[yesRan]; // the chatbot output randomly one if his yes answers strings
      check = true;
      setTimeout(ending, 1500); //BYE 
    }
    else if (lastUserMessage == noAns[i]) {  // if the user input is equal to one of the accepted "no" answers strings
      let noRan = Math.floor(Math.random() * no.length); // create a random answer from the "no" bot answers
      botMessage = no[noRan]; // // the chatbot output randomly one if his "no" answers strings
      check = true;
      setTimeout(ending, 1500); //BYE 
    }
  }

  if (check == false) { // if the user input is false and not equal to the accepted users answers "yes" or "no"
    if (k < 2) { // if the wrong input "no" or "yes" anwer is input less than 3 times
      botMessage = wrongAns; // output "Purr, I only understand 'yes' or 'no' answers, please try again"
      console.log(k); // test just for the console
      k++ // each input of the wrong anwer k + 1
    }
    else { // if is input 3 times
      botMessage = wrongAns3; // output "Wtf is wrong with you? Stop clicking and get out of here!"
      console.log(k) // test just for the console
      setTimeout(ending, 1500); //BYE 
    }
  }
}


//MESSAGES OUTPUTS IN THE CHATBOX

var messages = [], //array that hold the record of each string in chat
  lastUserMessage = "", //keeps track of the most recent input string from the user
  botMessage = "", //var keeps track of what the chatbot is going to say
  botName = 'BMO Bot', //name of the chatbot
  talking = true; //when false the speach function doesn't work

//this runs each time enter is pressed.
//It controls the overall input and output
function newEntry() {
  //if the message from the user isn't empty then run 
  if (document.getElementById("chatbox").value != "") {
    //pulls the value from the chatbox ands sets it to lastUserMessage
    lastUserMessage = document.getElementById("chatbox").value;
    //sets the chat box to be clear
    document.getElementById("chatbox").value = "";
    //adds the value of the chatbox to the array messages
    messages.push(lastUserMessage);
    //Speech(lastUserMessage);  //says what the user typed outloud
    //sets the variable botMessage in response to lastUserMessage
    chatbotResponse();
    //add the chatbot's name and message to the array messages
    messages.push("<b>" + botName + ":</b> " + botMessage);
    // says the message using the text to speech function written below
    Speech(botMessage);
    //outputs the last few array elements of messages to html
    for (var i = 1; i < 8; i++) {
      if (messages[messages.length - i])
        document.getElementById("chatlog" + i).innerHTML = messages[messages.length - i];
    }
  }
}

//text to Speech
function Speech(say) {
  if ('speechSynthesis' in window && talking) {
    var utterance = new SpeechSynthesisUtterance(say);
    //msg.voiceURI = 'native';
    utterance.volume = 1; // 0 to 1
    utterance.rate = 1.3; // 0.1 to 10
    utterance.pitch = 1; //0 to 2
    //utterance.text = 'Hello World';
    utterance.lang = 'en-US';
    speechSynthesis.speak(utterance);
  }
}

//runs the keypress() function when a key is pressed
document.onkeypress = keyPress;
//if the key pressed is 'enter' runs the function newEntry()
function keyPress(e) {
  var x = e || window.event;
  var key = (x.keyCode || x.which);
  if (key == 13 || key == 3) {
    //runs this function when enter is pressed
    newEntry();
  }
  if (key == 38) {
    console.log('hi')
    document.getElementById("chatbox").value = lastUserMessage;
  }
}


//BUTTON TEST

document.getElementById("button_start").addEventListener("click", function () { // send the message when the button is clicked
  newEntry()
});

//clears the placeholder text in the chatbox
//this function is set to run when the users brings focus to the chatbox, by clicking on it