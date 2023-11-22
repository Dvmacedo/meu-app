import React, { useState, useEffect } from 'react';
import './Jogo.css';

const cards = ['🍎', '🍎', '🍌', '🍌', '🍇', '🍇', '🍓', '🍓', '🍒', '🍒', '🍑', '🍑', '🍍', '🍍', '🥥', '🥥'];

function Jogo() {
  const [shuffledCards, setShuffledCards] = useState(shuffle(cards));
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);

  const flipCard = (index) => {
    setFlippedCards((flipped) => [...flipped, index]);
  };

  const checkMatch = () => {
    const [firstCard, secondCard] = flippedCards;
    if (shuffledCards[firstCard] === shuffledCards[secondCard]) {
      setMatchedCards([...matchedCards, firstCard, secondCard]);
    }
    setFlippedCards([]);
  };

  useEffect(() => {
    if (flippedCards.length === 2) {
      setTimeout(checkMatch, 1000);
    }
  }, [flippedCards]);

  return (
    <div className="App">
      {shuffledCards.map((card, index) => (
        <button
          key={index}
          onClick={() => flipCard(index)}
          disabled={flippedCards.includes(index) || matchedCards.includes(index)}
        >
          {flippedCards.includes(index) || matchedCards.includes(index) ? card : '🂠'}
        </button>
      ))}
    </div>
  );
}

function shuffle(array) {
  const arr = array.slice();
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export default Jogo;
