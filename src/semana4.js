import {Calculadora} from './Components/Calculadora';
import Gallery from './Components/Gallery';
import { Link } from 'react-router-dom';

export default function Semana4() {
    return (
        <>
        <h1>Atividade 04</h1>
        <Calculadora />
        <Gallery />
        <br />
        <Link to="/">retornar a página inicial</Link>
        </>
    );
}