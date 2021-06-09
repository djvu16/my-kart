import React from "react";
import './App.css';
import { Route } from 'react-router-dom';
import Header from "./components/header/header.component";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";

const HatsPage = () => (
  <div>
    <h1>Hats Page</h1>
  </div>
); 

function App() {
  return (
    <div className="App">
      <Header />
      <Route exact path="/" component={HomePage} />
      <Route exact path="/shop/hats" component={HatsPage} />
      <Route exact path="/shop" component={ShopPage} />
    </div>
  );
}

export default App;
