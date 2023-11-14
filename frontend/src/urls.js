
import { Routes, Route, BrowserRouter, Redirect } from "react-router-dom";
import Login from "./public/Login/Login";
import Settings from "./private/Settings/Settings";

function Urls() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Login />} />
                <Route exact path="/settings" element={<Settings />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Urls;

