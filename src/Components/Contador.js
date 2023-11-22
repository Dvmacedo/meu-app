import React, { useState, useEffect } from 'react';
import './Contador.css';

function Contador() {
  const [menCount, setMenCount] = useState(0);
  const [womenCount, setWomenCount] = useState(0);

  const handleAddMen = () => setMenCount(menCount + 1);
  const handleAddWomen = () => setWomenCount(womenCount + 1);
  const handleSubtractMen = () => setMenCount(menCount > 0 ? menCount - 1 : 0);
  const handleSubtractWomen = () => setWomenCount(womenCount > 0 ? womenCount - 1 : 0);
  const handleReset = () => {
    setMenCount(0);
    setWomenCount(0);
  };

  return (
    <div className="App">
      <h1>Contador de Pessoas</h1>
      <div>
        <h2>Homens: {menCount}</h2>
        <button onClick={handleAddMen}>Adicionar</button>
        <button onClick={handleSubtractMen}>Diminuir</button>
      </div>
      <div>
        <h2>Mulheres: {womenCount}</h2>
        <button onClick={handleAddWomen}>Adicionar</button>
        <button onClick={handleSubtractWomen}>Diminuir</button>
      </div>
      <div>
        <h2>Total: {menCount + womenCount}</h2>
        <button onClick={handleReset}>Resetar</button>
      </div>
    </div>
  );
}

export default Contador;
