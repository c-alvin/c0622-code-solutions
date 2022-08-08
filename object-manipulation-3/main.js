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

var deckOfCards = [
  {
    rank: 'Ace',
    suit: 'clubs'
  },
  {
    rank: 'Ace',
    suit: 'spades'
  },
  {
    rank: 'Ace',
    suit: 'hearts'
  },
  {
    rank: 'Ace',
    suit: 'diamonds'
  },
  {
    rank: 'King',
    suit: 'clubs'
  },
  {
    rank: 'King',
    suit: 'spades'
  },
  {
    rank: 'King',
    suit: 'hearts'
  },
  {
    rank: 'King',
    suit: 'diamonds'
  },
  {
    rank: 'Queen',
    suit: 'clubs'
  },
  {
    rank: 'Queen',
    suit: 'spades'
  },
  {
    rank: 'Queen',
    suit: 'hearts'
  },
  {
    rank: 'Queen',
    suit: 'diamonds'
  },
  {
    rank: 'Jack',
    suit: 'clubs'
  },
  {
    rank: 'Jack',
    suit: 'spades'
  },
  {
    rank: 'Jack',
    suit: 'hearts'
  },
  {
    rank: 'Jack',
    suit: 'diamonds'
  },
  {
    rank: '10',
    suit: 'clubs'
  },
  {
    rank: '10',
    suit: 'spades'
  },
  {
    rank: '10',
    suit: 'hearts'
  },
  {
    rank: '10',
    suit: 'diamonds'
  },
  {
    rank: '9',
    suit: 'clubs'
  },
  {
    rank: '9',
    suit: 'spades'
  },
  {
    rank: '9',
    suit: 'hearts'
  },
  {
    rank: '9',
    suit: 'diamonds'
  },
  {
    rank: '8',
    suit: 'clubs'
  },
  {
    rank: '8',
    suit: 'spades'
  },
  {
    rank: '8',
    suit: 'hearts'
  },
  {
    rank: '8',
    suit: 'diamonds'
  },
  {
    rank: '7',
    suit: 'clubs'
  },
  {
    rank: '7',
    suit: 'spades'
  },
  {
    rank: '7',
    suit: 'hearts'
  },
  {
    rank: '7',
    suit: 'diamonds'
  },
  {
    rank: '6',
    suit: 'clubs'
  },
  {
    rank: '6',
    suit: 'spades'
  },
  {
    rank: '6',
    suit: 'hearts'
  },
  {
    rank: '6',
    suit: 'diamonds'
  },
  {
    rank: '5',
    suit: 'clubs'
  },
  {
    rank: '5',
    suit: 'spades'
  },
  {
    rank: '5',
    suit: 'hearts'
  },
  {
    rank: '5',
    suit: 'diamonds'
  },
  {
    rank: '4',
    suit: 'clubs'
  },
  {
    rank: '4',
    suit: 'spades'
  },
  {
    rank: '4',
    suit: 'hearts'
  },
  {
    rank: '4',
    suit: 'diamonds'
  },
  {
    rank: '3',
    suit: 'clubs'
  },
  {
    rank: '3',
    suit: 'spades'
  },
  {
    rank: '3',
    suit: 'hearts'
  },
  {
    rank: '3',
    suit: 'diamonds'
  },
  {
    rank: '2',
    suit: 'clubs'
  },
  {
    rank: '2',
    suit: 'spades'
  },
  {
    rank: '2',
    suit: 'hearts'
  },
  {
    rank: '2',
    suit: 'diamonds'
  }
];

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
        scoresArray[i] += Number(11);
      } else if (players[i].hand[j].rank === 'King' || players[i].hand[j].rank === 'Queen' || players[i].hand[j].rank === 'Jack') {
        scoresArray[i] += Number(10);
      } else {
        var value = players[i].hand[j].rank;
        scoresArray[i] += Number(value);
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
