import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/NavBar";
import Home from "./components/Home";
import Cart from "./components/Cart";
import Searchbar from "./components/SearchBar";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Searchbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/cart" component={Cart} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
