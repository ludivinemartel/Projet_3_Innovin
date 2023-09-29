
class Deck {
    /**
     * @description Creates an instance of the Deck class.
     * @memberof Deck
     */
    constructor() {
        /*
       * Define the card decks cardDeck is the template deck defining the
       * attributes of each card, while gameDeck is the shuffled copy of
       * created at the start of each game.
       *
       * symbol - FontAwesome icon name
       * faceup - true if the card is faceup; false if facedown
       * matched - true if the card has been sucessfully matched; false if it
       * remains unmatched
       */
        this.templateCardDeck = [

          
            {symbol: 'ETIQUETTE_1.png', faceup: false, matched: false},
            {symbol: 'ETIQUETTE_1.png', faceup: false, matched: false},
            {symbol: 'ETIQUETTE_2.png', faceup: false, matched: false},
            {symbol: 'ETIQUETTE_2.png', faceup: false, matched: false},
            {symbol: 'ETIQUETTE_3.png', faceup: false, matched: false},
            {symbol: 'ETIQUETTE_3.png', faceup: false, matched: false},
            {symbol: 'ETIQUETTE_4.png', faceup: false, matched: false},
            {symbol: 'ETIQUETTE_4.png', faceup: false, matched: false},
            {symbol: 'ETIQUETTE_5.png', faceup: false, matched: false},
            {symbol: 'ETIQUETTE_5.png', faceup: false, matched: false},
            {symbol: 'ETIQUETTE_6.png', faceup: false, matched: false},
            {symbol: 'ETIQUETTE_6.png', faceup: false, matched: false},
            {symbol: 'ETIQUETTE_7.png', faceup: false, matched: false},
            {symbol: 'ETIQUETTE_7.png', faceup: false, matched: false},
            {symbol: 'ETIQUETTE_8.png', faceup: false, matched: false},
            {symbol: 'ETIQUETTE_8.png', faceup: false, matched: false},
        ];
    }
  
    /**
     * @description Check to see if two cards have matching symbols
     * @param {Object[]} cardDeck Array of card objects used in the game
     * @param {Number} firstCardIndex Index of the first card to compare
     * @param {Number} secondCardIndex Index of the second card to compare
     * @returns {Boolean} True if the cards match, otherwise false if no match
     * @memberof Deck
     */
    isSymbolMatch(cardDeck, firstCardIndex, secondCardIndex) {
        if (cardDeck[firstCardIndex].symbol === cardDeck[secondCardIndex].symbol) {
            return true;
        }
        return false;
    }
  
    /**
     * @description Shuffle a deck of game cards. This function is based on
     * http://stackoverflow.com/a/2450976
     * @returns {Object[]} Shuffled card deck
     * @memberof Deck
     */
    shuffle() {
        let cardDeck = this.templateCardDeck;
        let currentIndex = cardDeck.length;
        let temporaryValue;
        let randomIndex;
  
        while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            temporaryValue = cardDeck[currentIndex];
            cardDeck[currentIndex] = cardDeck[randomIndex];
            cardDeck[randomIndex] = temporaryValue;
        }
  
        return cardDeck;
    }
}
  
export default Deck;
  