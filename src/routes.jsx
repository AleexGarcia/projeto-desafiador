import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Pages/Home/index.jsx'
import QuestionPage from "./Pages/QuestionPage/index.jsx";
import StartCancel from "./Pages/StartCancel/index.jsx";
import Relatorio from './Pages/Relatorio/index.jsx'
import MyContext from './contexts/myContext.js'
import React, {useState} from "react";
import Historico from "./Pages/Historico/index.jsx";
import RelatorioHistorico from "./Pages/Historico/RelatorioHistorico/index.jsx";

export default function AppRouter() {

    const [relatoriosGuardados, setRelatoriosGuardados] = useState( JSON.parse(localStorage.getItem("relatorios"))||[]);

    return (
        <MyContext.Provider value={[relatoriosGuardados, setRelatoriosGuardados]}>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="start/:quantidade" element={<StartCancel />} />
                    <Route path="start/:quantidade/questionpage" element={<QuestionPage />} />
                    <Route path="historico" element={<Historico />} />
                    <Route path="historico/:id" element={<RelatorioHistorico />} />
                    <Route path="relatorio" element={<Relatorio />} />
                </Routes>
            </Router>
        </MyContext.Provider>
    )
}