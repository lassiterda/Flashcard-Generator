
const Deck = function(title,description) {
  this.title = title;
  this.description = description
  this.flashcards = [];
  this.numCards = function() {
    return this.flashcards.length;
  }
};

module.exports = Deck;
