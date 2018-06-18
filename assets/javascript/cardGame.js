function CardGame() {
  var cardValues = [ "Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
  var cardTypes = ["Spade", "Diamond", "Heart", "Club"];
  var cards = new Array();

  function card(cardType, value) {
    this.cardType = cardType;
    this.value = value;
  }

  function createDeck() {
    cardTypes.forEach(function(cardType) {
      cardValues.forEach(function(value) {
        cards.push(new card(cardType, value));
      });
    });
  }

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function shuffleDeck(shuffleCount) {
    for (var i = 0; i < shuffleCount; i++) {
      var randNum = getRandomInt(0, 51);
      var card = cards[i];
      cards[i] = cards[randNum];
      cards[randNum] = card;
    }
  }

  createDeck();

  return {
    shuffle: function() {
      shuffleDeck(getRandomInt(10, 26));
      console.log("List of shuffle Cards: ", cards);
    },

    cut: function(chosenNumber) {
      if (cards.length < chosenNumber) {
        var topCard = cards[chosenNumber - 1];
        console.log("topCardValue is: ", topCard);
      } else {
        var bottomCard = cards[chosenNumber + 1];
        console.log("bottomCardValue is: ", bottomCard);
      }
    },
    deal: function() {},
    sortRemaining: function() {}
  };
}
