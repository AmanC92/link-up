import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Meeting from "./Pages/Meeting";
import "./styles/app.css";

const App = () => {
    return (
        <Router>
            <Router path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/meeting" component={Meeting} />
        </Router>
    );
};

export default App;
