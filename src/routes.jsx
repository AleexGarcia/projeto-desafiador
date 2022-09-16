import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Pages/Home/index.jsx'
import QuestionPage from "./Pages/QuestionPage/index.jsx";
import StartCancel from "./Pages/StartCancel/index.jsx";
export default function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="inicio" element={<StartCancel/>}/>
                <Route path="questionpage/:id" element={<QuestionPage/>}/>
            </Routes>
        </Router>

    )
}