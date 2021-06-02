import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Meeting from "./Pages/Meeting";
import "./styles/app.css";

const App = () => {
    return (
        <Router>
            <div className="container">
                <Navbar />
                <Switch>
                    <Route path="/about" component={About} />
                    <Route path="/meeting" component={Meeting} />
                    <Route path="/" component={Home} />
                </Switch>
            </div>
        </Router>
    );
};

export default App;
