import {Relogio} from './Components/Relogio';
import Gallery from './Components/Gallery';
import { Link } from 'react-router-dom';

export default function Semana2() {
    return (
        <>
        <h1>Atividade 02</h1>
        <Relogio />
        <Gallery />
        <br />
        <Link to="/">retornar a página inicial</Link>
        </>
    );
}