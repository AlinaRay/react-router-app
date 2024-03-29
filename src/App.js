import React from 'react';
import Nav from './Nav';
import About from './About';
import Shop from './Shop';
import ItemDetail from './ItemDetails';

import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import './App.css';

function App() {
  return (
      <Router>
        <div className="App">
          <Nav />
          <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/about/" component={About} />
              <Route path="/shop/" exact component={Shop} />
              <Route path="/shop/:id" component={ItemDetail}/>
          </Switch>
        </div>
      </Router>
  );
}

const Home = () => (
    <div className="wrapper">
        <h1 className="title">Home Page</h1>
    </div>
)

export default App;
