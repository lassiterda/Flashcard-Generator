
const BasicCard = function(front, back) {
//implementing scope-safe
  if(!this instanceof BasicCard) {
    return new BasicCard(front, back)
  }
  this.type = "basic";
  this.front = front;
  this.back = back;
};

 module.exports = BasicCard;
