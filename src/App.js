import React from 'react';
import {HashRouter, Routes, Route} from "react-router-dom";


//Components
import Home from "./components/Home/Home.js";


const App = () => {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<Home />} exact/>
            </Routes>
        </HashRouter>
    );
};


export default App;