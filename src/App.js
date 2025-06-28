import React, { useState } from 'react';
import './App.css';

function App() {
  const [diceValue, setDiceValue] = useState(1);
  const [isRolling, setIsRolling] = useState(false);

  const rollDice = () => {
    setIsRolling(true);
    setTimeout(() => {
      const randomValue = Math.floor(Math.random() * 6) + 1;
      setDiceValue(randomValue);
      setIsRolling(false);
    }, 500);
  };

  return (
    <div className="App">
      <header className="app-header">
        <h1>Игральная кость</h1>
      </header>
      <main className="dice-container">
        <div className={`dice ${isRolling ? 'rolling' : ''}`}>
          <img
            src={`/dice/dice${diceValue}.png`}
            alt={`Выпало ${diceValue}`}
          />
        </div>
        <button
          onClick={rollDice}
          disabled={isRolling}
          className="roll-button"
        >
          {isRolling ? 'Бросаем...' : 'Бросить кость'}
        </button>
      </main>
    </div>
  );
}

export default App;
