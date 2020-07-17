# 💬 Micro ChatBot challenge

- Repository: `Javascript`
- Type of Challenge:  `Consolidation`
- Duration: `3 days`
- Deadline: `17/07/20 H:17PM`
- Deployment strategy :
  - Github page : [Demo](https://inesmathy.github.io/BMO_Bot/)
- Team challenge : Ines Mathy, Mathieu Herbos, Ashleigh Templeton


## Mission objectives 

At the end of this challenge you should have improved your:

- **JavaScript** skills
- team skills
- **git** conflict skills


## The Mission

### ChatBot must-have features

- UI,  which is just a list of messages (there's two types of messages - those from the bots and those from the user) 
  and a text area with a _send_ button.
- Sending a message to the bot is done by clicking the _send_ button **or** typing `ENTER`.  
- on loading of the page, the bot welcomes the user with a random greeting message 
  (your bot needs _at least_ **three different** welcoming message), then, he ask the user _"how do you feel today?"_.
- The user can reply freely, and the bot need to check in the response if he can find a "yes" or a "no":
  - if the script find a "yes" in the message, the bot answers with a random sentence from a specific set (minimum **three different**) 
  - if the script find a "no" in the message, the bot answers with a random sentence from a specific set (minimum **three different**)
  - if the script cannot find a "yes" or a "no" in the message, the bot answer something like "I didn't understand, can you please try again"
  - if the script cannot find a "yes" or a "no" in the message after three attempts, the bot begins to be mad and use "passive-agressive" answer, like "dude, are you sure you can read?"
- After this answer, the bot has finish his routine. He says "bye" to the user and the textarea go to `disabled` mode.


### Bonus features

- support _multi-line_ messages: by typing `SHIFT+ENTER`, you create a new line in the textarea.
- add "in progress" animation and timeout to simulate "bot thinking"
- You can try to make the bot more "real" by having more possible answers to interact with the user.


## Deliverables

1. Publish your source code on the GitHub repository.
2. Pimp up the readme file:
   - What, Why, When, How, Who.
   - Pending things to do
   - It must contain a link to the "live" version. The "live" version must contain a link to the source code on GitHub.
3. Publish the link to the "live" version on Discord.



### Steps

##### Phase 1

- [x] Create prototype UI html/css
- [x] Create js script
- [x] link html with js

##### Phase 2

- [x] modifying UI Design
- [ ] Adding basic Bonus features
- [ ] Adding more conversation to Bot


##### Phase 3

- [ ] Finishing UI Design & validating javascript
- [ ] Testing web site on W33
- [ ] Testing web site on Lighthouse



# Evaluation criterias

| Criteria       | Indicator                                                    | Yes/No |
| -------------- | ------------------------------------------------------------ | ------ |
| 1. Is complete | The student has realized all must-have features.             |        |
|                | There is a published GitHub page available.                  |        |
|                | The readme is complete                                       |        |
| 2. Is Correct  | The HTML and CSS pass the W3C Validation tool.               |        |
|                | The lighthouse test scores 90 at least on Performance, Best Practices, Accessibility and SEO. |        |
|                | The indentation is perfect                                   |        |





<img src="https://raw.githubusercontent.com/inesmathy/chatbot/master/BMO-btn.png"/>

