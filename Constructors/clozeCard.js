
const ClozeCard = function(text, cloze) {
  if(!this instanceof ClozeCard) {
    return new ClozeCard(text, cloze)
  }

  this.fullText = text;
  this.cloze = cloze;
  //evaluates toa new string where the word/phrase entered
  this.partial =
    text.substring(0, text.toLowerCase().indexOf(cloze.toLowerCase())) +
    "..." +
    text.substring(text.toLowerCase().indexOf(cloze.toLowerCase()) + cloze.length)
};

module.exports = ClozeCard;
