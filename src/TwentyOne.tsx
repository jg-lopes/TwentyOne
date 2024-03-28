import React, { useState } from 'react';

const WIN_CONDITION = 21

function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function TwentyOne() {
  const [count, setCount] = useState(0);
  const [result, setResult] = useState('Playing!');

  const checkWinner = (count: number) => {
    if (count === WIN_CONDITION) {
      setResult('You win!');
    } else if (count > WIN_CONDITION) {
      setResult('Loser!!! YOUR NAME IS GABRIEL MENDES')
    }
  }

  const handleClick = () => {
    setCount((count) => {
      const newCount = count + getRandomInt(1, 10)
      checkWinner(newCount);
      return newCount;
    })
  }

  const reset = () => {
    setCount(0)
    setResult('Playing!')
  }

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={handleClick}>+1</button>
      <button onClick={reset}>Reset</button>
      <p>Hand: {count} - Status: {result}</p>
    </div>
  );
}

export default TwentyOne;
