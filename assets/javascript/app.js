window.onload = function(){
    var cardNumber = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
    var cardType = ["Spade", "Diamond", "Heart", "Club"];
    var cards = new Array();

    function card(cardType, number) {
        this.cardType = cardType;
        this.number = number;
    };

    function createDeck() {
        cardType.forEach(function (number) {
            cardNumber.forEach(function (type){
                cards.push(new card(number, type));
            });
        });
    };

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * ( max - min + 1 )) + min;
    }

    function shuffleDeck(shuffleCount) {
        for( var i = 0; i < shuffleCount; i++ ) {
            var randNum = getRandomInt( 0, 51);
            var card = cards[i];
            cards[i] = cards[randNum];
            cards[randNum] = card;
        }
    }

    createDeck();
    $(".cardDeck").push(cards);
    console.log(cards);
    shuffleDeck(getRandomInt(10, 25));
    console.log(cards);
}