import React from 'react';
import { Link } from 'react-router-dom';

const Home = () =>{
    return (
        <div>
            <h1>Página Inicial</h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/Semana1">Semana 1</Link>
                    </li>
                    <li>
                        <Link to="/Semana2">Semana 2</Link>
                    </li>
                    <li>
                        <Link to="/Semana3">Semana 3</Link>
                    </li>
                    <li>
                        <Link to="/Semana4">Semana 4</Link>
                    </li>
                    <li>
                        <Link to="/Semana5">Semana 5</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
export default Home;