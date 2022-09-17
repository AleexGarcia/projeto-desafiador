import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Pages/Home/index.jsx'
import QuestionPage from "./Pages/QuestionPage/index.jsx";
import StartCancel from "./Pages/StartCancel/index.jsx";
export default function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="start/:quantidade" element={<StartCancel/>}/>
                <Route path="start/:quantidade/questionpage" element={<QuestionPage/>}/>
            </Routes>
        </Router>

    )
}