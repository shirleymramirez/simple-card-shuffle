window.onload = function() {
  var game = new CardGame();

  $("#shuffleButton").on("click", function() {
    game.shuffle();
  });

  $("#cutButton").on("click", function() {
    var chosenNumber = prompt("Please enter a number");
    game.cut(chosenNumber);
  });

  $("#dealButton").on("click", function() {
    game.deal();
  });
};
