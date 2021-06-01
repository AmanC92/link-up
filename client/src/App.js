import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Meeting from "./Pages/Meeting";
import "./styles/app.css";

const App = () => {
    return (
        <Router>
            <div className="container">
                <nav>
                    <ul style={{ display: "inline", marginRight: "2rem" }}>
                        <Link to="/">Home</Link>
                    </ul>
                    <ul style={{ display: "inline", marginRight: "2rem" }}>
                        <Link to="/about">About</Link>
                    </ul>
                    <ul style={{ display: "inline", marginRight: "2rem" }}>
                        <Link to="/meeting">Meeting</Link>
                    </ul>
                </nav>
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
