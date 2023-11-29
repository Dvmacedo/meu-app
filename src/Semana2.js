import Contador from './Components/Contador';
import Gallery from './Components/Gallery';
import { Link } from 'react-router-dom';

export default function Semana2() {
    return (
        <>
        <h1>Atividade 02</h1>
        <Contador />
        <Gallery />
        <br />
        <Link to="/">retornar a página inicial</Link>
        </>
    );
}