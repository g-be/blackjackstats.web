// standard 52 card deck, with blackjack value
const deck = [
    { rank:"ACE", suit:"CLUBS",	     value: 11, image : "images/cards/fronts/clubs_ace.svg"},
    
    { rank:"ACE", suit:"DIAMONDS",	 value: 11, image : "images/cards/fronts/diamonds_ace.svg"},
    
    { rank:"ACE", suit:"HEARTS",	 value: 11, image : "images/cards/fronts/hearts_ace.svg"},
    
    { rank:"ACE", suit:"SPADES",	 value: 11, image : "images/cards/fronts/spades_ace.svg"},
    
    { rank:"TWO", suit:"CLUBS",	     value: 2, image : "images/cards/fronts/clubs_2.svg"},
    
    { rank:"TWO", suit:"DIAMONDS",	 value: 2, image : "images/cards/fronts/diamonds_2.svg"},
    
    { rank:"TWO", suit:"HEARTS",	 value: 2, image: "images/cards/fronts/hearts_2.svg"},
    
    { rank:"TWO", suit:"SPADES",	 value: 2, image: "images/cards/fronts/spades_2.svg"},
    
    { rank:"THREE", suit:"CLUBS",	 value: 3, image: "images/cards/fronts/clubs_3.svg"},
    
    { rank:"THREE", suit:"DIAMONDS", value: 3, image: "images/cards/fronts/diamonds_3.svg"},
    
    { rank:"THREE", suit:"HEARTS",	 value: 3, image: "images/cards/fronts/hearts_3.svg"},
    
    { rank:"THREE", suit:"SPADES",	 value: 3, image: "images/cards/fronts/spades_3.svg"},
    
    { rank:"FOUR", suit:"CLUBS",	 value: 4, image: "images/cards/fronts/clubs_4.svg"},
    
    { rank:"FOUR", suit:"DIAMONDS",	 value: 4, image: "images/cards/fronts/diamonds_4.svg"},
    
    { rank:"FOUR", suit:"HEARTS",	 value: 4, image: "images/cards/fronts/hearts_4.svg"},
    
    { rank:"FOUR", suit:"SPADES",	 value: 4, image: "images/cards/fronts/spades_4.svg"},
    
    { rank:"FIVE", suit:"CLUBS",	 value: 5, image: "images/cards/fronts/clubs_5.svg"},
    
    { rank:"FIVE", suit:"DIAMONDS",	 value: 5, image: "images/cards/fronts/diamonds_5.svg"},
    
    { rank:"FIVE", suit:"HEARTS",	 value: 5, image: "images/cards/fronts/hearts_5.svg"},
    
    { rank:"FIVE", suit:"SPADES",	 value: 5, image: "images/cards/fronts/spades_5.svg"},
    
    { rank:"SIX", suit:"CLUBS",	     value: 6, image: "images/cards/fronts/clubs_6.svg"},
    
    { rank:"SIX", suit:"DIAMONDS",	 value: 6, image: "images/cards/fronts/diamonds_6.svg"},
    
    { rank:"SIX", suit:"HEARTS",	 value: 6, image: "images/cards/fronts/hearts_6.svg"},
    
    { rank:"SIX", suit:"SPADES",	 value: 6, image: "images/cards/fronts/spades_6.svg"},
    
    { rank:"SEVEN", suit:"CLUBS",	 value: 7, image: "images/cards/fronts/clubs_7.svg"},
    
    { rank:"SEVEN", suit:"DIAMONDS", value: 7, image: "images/cards/fronts/diamonds_7.svg"},
    
    { rank:"SEVEN", suit:"HEARTS",	 value: 7, image: "images/cards/fronts/hearts_7.svg"},
    
    { rank:"SEVEN", suit:"SPADES",	 value: 7, image: "images/cards/fronts/spades_7.svg"},
    
    { rank:"EIGHT", suit:"CLUBS",	 value: 8, image: "images/cards/fronts/clubs_8.svg"},
    
    { rank:"EIGHT", suit:"DIAMONDS", value: 8, image: "images/cards/fronts/diamonds_8.svg"},
    
    { rank:"EIGHT", suit:"HEARTS",	 value: 8, image: "images/cards/fronts/hearts_8.svg"},
    
    { rank:"EIGHT", suit:"SPADES",	 value: 8, image: "images/cards/fronts/spades_8.svg"},
    
    { rank:"NINE", suit:"CLUBS",	 value: 9, image: "images/cards/fronts/clubs_9.svg"},
    
    { rank:"NINE", suit:"DIAMONDS",	 value: 9, image: "images/cards/fronts/diamonds_9.svg"},
    
    { rank:"NINE", suit:"HEARTS",	 value: 9, image: "images/cards/fronts/hearts_9.svg"},
    
    { rank:"NINE", suit:"SPADES",	 value: 9, image: "images/cards/fronts/spades_9.svg"},
    
    { rank:"TEN", suit:"CLUBS",	     value: 10, image: "images/cards/fronts/clubs_10.svg"},
    
    { rank:"TEN", suit:"DIAMONDS",	 value: 10, image: "images/cards/fronts/diamonds_10.svg"},
    
    { rank:"TEN", suit:"HEARTS",	 value: 10, image: "images/cards/fronts/hearts_10.svg"},
    
    { rank:"TEN", suit:"SPADES",	 value: 10, image: "images/cards/fronts/spades_10.svg"},
    
    { rank:"JACK", suit:"CLUBS",	 value: 10, image: "images/cards/fronts/clubs_jack.svg"},
    
    { rank:"JACK", suit:"DIAMONDS",	 value: 10, image: "images/cards/fronts/diamonds_jack.svg"},
    
    { rank:"JACK", suit:"HEARTS",	 value: 10, image: "images/cards/fronts/hearts_jack.svg"},
    
    { rank:"JACK", suit:"SPADES",	 value: 10, image: "images/cards/fronts/spades_jack.svg"},
    
    { rank:"QUEEN", suit:"CLUBS",	 value: 10, image: "images/cards/fronts/clubs_queen.svg"},
    
    { rank:"QUEEN", suit:"DIAMONDS", value: 10, image: "images/cards/fronts/diamonds_queen.svg"},
    
    { rank:"QUEEN", suit:"HEARTS",	 value: 10, image: "images/cards/fronts/hearts_queen.svg"},
    
    { rank:"QUEEN", suit:"SPADES",	 value: 10, image: "images/cards/fronts/spades_queen.svg"},
    
    { rank:"KING", suit:"CLUBS",	 value: 10, image: "images/cards/fronts/clubs_king.svg"},
    
    { rank:"KING", suit:"DIAMONDS",	 value: 10, image: "images/cards/fronts/diamonds_king.svg"},
    
    { rank:"KING", suit:"HEARTS",	 value: 10, image: "images/cards/fronts/hearts_king.svg"},
    
    { rank:"KING", suit:"SPADES",	 value: 10, image: "images/cards/fronts/spades_king.svg"},
    ]

    class hand {
        constructor(element) {
            this.cards = [];
            this._score = 0;
            this.DOMhand = element;
            this.scoreboard;
        }
        wellFormedCardDiv(card, faceup) {
            let cardDiv = document.createElement('div');
            cardDiv.setAttribute('class','card');
            let cardDivImage = document.createElement('img');
            if (faceup) 
                cardDivImage.setAttribute('src', card.image);
            else {
                cardDivImage.setAttribute('src', "images/cards/backs/red.svg");
                cardDiv.id = "facedown"; 
            }
            cardDiv.append(cardDivImage);
            return cardDiv;
        }
        get score() {
            let sum = 0;
            let aces = 0;
            for (const card of this.cards) {
                if (card.value == 11) aces++;
                else sum += card.value; 
            }
            while ( aces > 0 ) {
                aces--;
                if ( sum < 11 ) sum += 11;
                else sum += 1;
            }
            this._score = sum;
            return this._score;
        }
        draw(faceup=true) {
            if (this.score > 21) 
                return "Bust"
            let card = shoe.draw();
            this.cards.push(card);
            this.DOMhand.append( this.wellFormedCardDiv(card, faceup) );
            // this.stand.textContent = this.score;
        }
        discard() {
            this.cards = [];
            this.score = 0;
            while ( this.DOMhand.firstChild )
                this.DOMhand.firstChild.remove();
        }
    }
    
    class dealer extends hand {
        constructor() {
            super(document.querySelector('.dealer-cards'));
            let scoreboard = document.getElementById('stand-button');
        }
        open() {
            this.draw(false);   // play card facedown   
            this.draw();        // play card faceup
            this.scoreboard.textContent = "stand";
        }
        close() {
            // show facedown
            this.DOMhand.replaceChild(
                this.wellFormedCardDiv(this.cards[0]),
                document.getElementById('facedown')
            )
            // while dealer score <18
            while ( this.score <17 ) {
                this.draw();
                // setTimeout(1000);
            }
        }
    }
    
    class player extends hand {
        constructor() {
            super(document.querySelector('.player-cards'));
            let scoreboard = document.getElementById('hit-button');
        }
    }
    
    // the shoe holds the cards for play
    let shoe = {
        numberOfDecks : 6,
        // contents holds the cards for play
        contents : [],
        shuffle() { //fisher-yates shuffle
            // per https://bost.ocks.org/mike/shuffle/
            var m = this.contents.length, t, i;
            // While there remain elements to shuffle…
            while (m) {
                // Pick a remaining element…
                i = Math.floor(Math.random() * m--);
                // And swap it with the current element.
                t = this.contents[m];
                this.contents[m] = this.contents[i];
                this.contents[i] = t;
            }
        },
        fill() { // load the deck with the given number of decks, then shuffle
            this.contents.length = 0; // empty the shoe
            for (let i = 0; i < this.numberOfDecks; i++) 
                this.contents.push(...deck);
            this.shuffle();
        },
        draw() { 
            return this.contents.pop();
        }
    }
    
    let playerHand = new player;
    
    let dealerHand = new dealer;
    
    // collection of fxs for play
    
    let play = {
    // function: clear hands
    
    }
    
    
    
    document.addEventListener('DOMContentLoaded', function() {
    shoe.fill();
    document.getElementById('hit-button').addEventListener('click', () => {
        playerHand.draw();
    });
    document.getElementById('stand-button').addEventListener('click', () => {
        dealerHand.close();
    })
    dealerHand.open();
    });
    