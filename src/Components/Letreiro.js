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
            return 0; // Reinicia o loop quando o texto for totalmente digitado
          }
          return indiceAnterior + 1;
        });
      }
    }, 100); // A cada 100ms, uma nova letra será exibida.

    return () => clearInterval(timer);
  }, [indice, texto]);

  return (
    <div>
      <h2>Letreiro</h2>
      <p>{textoExibido}</p>
    </div>
  );
}

export default Letreiro;
