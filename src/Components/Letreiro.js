import React, { useState, useEffect } from 'react';
import './Letreiro.css';

function Letreiro() {
  const texto = "Conheça a Fatec";
  const [textoExibido, setTextoExibido] = useState('');
  const [indice, setIndice] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      if (indice <= texto.length) {
        setTextoExibido(texto.substring(0, indice));
        setIndice((indiceAnterior) => {
          if (indiceAnterior === texto.length) {
            return 0;
          }
          return indiceAnterior + 1;
        });
      }
    }, 100);

    return () => clearInterval(timer);
  }, [indice, texto]);

  return (
    <div className="letreiro-container">
      <h2 className="letreiro-title">Letreiro</h2>
      <p className="letreiro-texto">{textoExibido}</p>
    </div>
  );
}

export default Letreiro;
