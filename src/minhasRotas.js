import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./Home";
import Semana1 from "./Semana1";
import Semana2 from "./Semana2";

export default function MinhasRotas() {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Semana1" element={<Semana1 />} />
            <Route path="/Semana2" element={<Semana2 />} />
        </Routes>
        </BrowserRouter>
    );
}