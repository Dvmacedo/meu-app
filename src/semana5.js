import Jogo from './Components/Jogo';
import Gallery from './Components/Gallery';
import { Link } from 'react-router-dom';

export default function Semana5() {
    return (
        <>
        <h1>Atividade 05</h1>
        <Jogo />
        <Gallery />
        <br />
        <Link to="/">retornar a página inicial</Link>
        </>
    );
}