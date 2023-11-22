import React, { useState, useEffect } from 'react';
import './Relogio.css';

function Relogio() {
    const [data, setData] = useState(new Date());

    useEffect(() => {
        const timerID = setInterval(() => tick(), 1000);
        return function cleanup() {
            clearInterval(timerID);
        };
    });

    function tick() {
        setData(new Date());
    }

    return (
        <div>
            <h2>São {data.toLocaleTimeString()}.</h2>
        </div>
    );
}

export default Relogio;
