import React from "react";
import './App.css';
import { Route } from 'react-router-dom';
import HomePage from "./pages/homepage.component";

const HatsPage = () => (
  <div>
    <h1>Hats Page</h1>
  </div>
); 

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={HomePage} />
      <Route exact path="/shop/hats" component={HatsPage} />
    </div>
  );
}

export default App;
