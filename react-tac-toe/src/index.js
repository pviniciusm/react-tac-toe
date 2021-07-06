import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import Game from "./components/Game";
import Header from "./components/Header";
import Footer from "./components/Footer";

ReactDOM.render(
    <React.StrictMode>
        <div className="main_container">
            <Header></Header>
            <Game></Game>
            <Footer></Footer>
        </div>
    </React.StrictMode>,
    document.getElementById("root")
);
