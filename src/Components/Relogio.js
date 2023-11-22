import React, { useState, useEffect } from 'react';
import './Relogio.css';

function Relogio() {
  const [hora, setHora] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setHora(new Date());
    }, 1000); 

    return () => clearInterval(interval);
  }, []);

  const minutos = hora.getMinutes();
  const segundos = hora.getSeconds();
  const horaAtual = hora.getHours();

  return (
    <div className="relogio-container">
      <h2 className="relogio-title">Relógio</h2>
      <p className="relogio-time">
        {hora.toLocaleTimeString()} 
      </p>
      <p className="relogio-hour-minutes-seconds">
      {horaAtual} hora(s), {minutos} minutos, {segundos} segundos
      </p>
    </div>
  );
}

export default Relogio;