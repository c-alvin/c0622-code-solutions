console.log('Lodash is loaded:', typeof _ !== 'undefined');

var players = [
  {
    name: 'Alvin',
    hand: []
  },
  {
    name: 'Bobby',
    hand: []
  },
  {
    name: 'David',
    hand: []
  },
  {
    name: 'Greg',
    hand: []
  }
];

var suit = ['clubs', 'spades', 'hearts', 'diamonds'];

var rank = ['Ace', 'King', 'Queen', 'Jack', 10, 9, 8, 7, 6, 5, 4, 3, 2];

var deckOfCards = [];

function createDeck() {
  for (var i = 0; i < suit.length; i++) {
    for (var k = 0; k < rank.length; k++) {
      var card = {};
      card.suit = suit[i];
      card.rank = rank[k];
      deckOfCards.push(card);
    }
  }
  return deckOfCards;
}

createDeck();

var shuffledDeck = _.shuffle(deckOfCards);

console.log(_.shuffle(deckOfCards));

var counter = 0;

function dealCards(deck, players) {
  for (var i = 0; i < shuffledDeck.length; i++) {
    if (players[players.length - 1].hand.length === 2) {
      break;
    }
    if (counter < players.length - 1) {
      players[counter].hand.push(shuffledDeck[i]);
      counter++;
      console.log(players);
    } else if (counter === players.length - 1) {
      players[counter].hand.push(shuffledDeck[i]);
      counter = 0;
    }
  }
  return players;
}

dealCards(shuffledDeck, players);

function findWinner(players) {
  var scoresArray = [];
  for (var i = 0; i < players.length; i++) {
    scoresArray[i] = 0;
    for (var j = 0; j < players[i].hand.length; j++) {
      if (players[i].hand[j].rank === 'Ace') {
        scoresArray[i] += 11;
      } else if (players[i].hand[j].rank === 'King' || players[i].hand[j].rank === 'Queen' || players[i].hand[j].rank === 'Jack') {
        scoresArray[i] += 10;
      } else {
        var value = players[i].hand[j].rank;
        scoresArray[i] += value;
      }
    }
  }
  for (var k = 0; k < scoresArray.length; k++) {
    if (_.max(scoresArray) === scoresArray[k]) {
      console.log(players[k].name + ' is the winner');
    }
  }
}

findWinner(players);
