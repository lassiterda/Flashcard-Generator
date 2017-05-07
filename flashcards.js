//require for file system
const fs = require('fs');
//require for inquirer npm package
const inquirer = require('inquirer');

//flash card nd deck Constructors
const ClozeCard = require('./Constructors/ClozeCard.js');
const BasicCard = require('./Constructors/BasicCard.js');
const Deck = require('./Constructors/deck.js');
//require for questions arrays
const questions = require('./questions');

//variable for the object which will store the decks and cards

var storage = require('./storage');

//switch case function to analyze command line args and respond.
const appInit = function(command, createCmd) {

 switch(command.toLowerCase()) {
    case "create":
      switch (createCmd.toLowerCase()) {
        case ("basiccard" || "basic"):
          return getUserInput("BasicCard").then(function(a) {
            let catIndex = storage.categories.map(ele => ele.title.toLowerCase()).indexOf(a.category.toLowerCase());
             if(catIndex !== -1) {
                storage.categories[catIndex].questions.push(new BasicCard(a.front, a.back));
                return "Basic card added to ''" + storage.categories[catIndex].title + "''."
             }
             else {
               console.log("Looks like this category doesn't exist yet.");
               return inquirer.prompt(questions.confirm).then(function(a) {
                  return a.confirm ? getUserInput("Deck") : "Understood"
               })
             }
          });
        break;
        case ("clozecard" || "cloze"):
          return getUserInput("ClozeCard").then(function(a) {
            let catIndex = storage.categories.map(ele => ele.title.toLowerCase()).indexOf(a.category.toLowerCase());
             if(catIndex !== -1) {
                storage.categories[catIndex].questions.push(new ClozeCard(a.front, a.back));
                return "Cloze card added to ''" + storage.categories[catIndex].title + "''."
             }
             else {
               console.log("Looks like this category doesn't exist yet.");
               return inquirer.prompt(questions.confirm).then(function(a) {
                  return a.confirm ? getUserInput("Deck") : "Understood, but I don't know where to put this card."
               })
             }
          });
        break;
        case "deck":
          return getUserInput("Deck").then(function(a) {
              let catIndex = storage.categories.map(ele => ele.title.toLowerCase()).indexOf(a.category.toLowerCase());
              if(catIndex !== -1) {
                return "Looks like that category already ists"
              }
              else {
                storage.categories.push(new Deck(a.title, a.description ))
                return "'"+ a.category + "' category added and available for use"
              }
          });
        break;
        default:
          console.log("please specify 'basicCard', 'clozeCard', or 'deck'");
        break;
      }
    break;
    case "info":
      console.log("# of Categories: " + storage.categories.length);

    break;
    case "quiz":
      //select a category from an inquirer
      //
    break;
    default:
    console.log("valid commands are 'create', 'quiz', and info");
    break;
  }

};

const getUserInput = function(arg) {
  if (arg === "BasicCard") {
    return inquirer.prompt(questions.basicCard)
  }
  else if(arg === "ClozeCard") {
    return inquirer.prompt(questions.clozeCard)
  }
  else if (arg === "Deck"){
    return inquirer.prompt(questions.deck)
  }
};

const checkCategory = function(input){

  let category = storage.categories.find(ele => ele.title.toLowerCase() === input.toLowerCase())

  if (category !== undefined) { return category }

  else { return false}
}

appInit(process.argv[2] || "none", process.argv[3] || "none")
.then(function(data){ console.log(data)})
