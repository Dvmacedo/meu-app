import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./Home";
import Semana1 from "./Semana1";
import Semana2 from "./Semana2";
import Semana3 from "./Semana3";
import Semana4 from "./Semana4";
import Semana5 from "./Semana5";

export default function MinhasRotas() {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Semana1" element={<Semana1 />} />
            <Route path="/Semana2" element={<Semana2 />} />
            <Route path="/Semana3" element={<Semana3 />} />
            <Route path="/Semana4" element={<Semana4 />} />
            <Route path="/Semana5" element={<Semana5 />} />
        </Routes>
        </BrowserRouter>
    );
}