import Relogio from './Components/Relogio';
import Letreiro from './Components/Letreiro';
import { Link } from 'react-router-dom';

export default function Semana1() {
    return (
        <>
        <h1>Atividade 01</h1>
        <Relogio />
        <Letreiro />
        <Gallery />
        <br />
        <Link to="/">retornar a página inicial</Link>
        </>
    );
}
