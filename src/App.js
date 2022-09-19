import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Create from "./components/Create";
import Edit from "./components/Edit";

import { Container } from "react-bootstrap";

function App() {
  return (
    <Router>
      <Navbar />
      <Container className="content">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/create">
            <Create />
          </Route>
          <Route path="/edit">
            <Edit />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
