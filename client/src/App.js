import './App.css';
import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/Home";
import SearchName from "./components/SearchName";
import FilterTemperament from "./components/FilterTemperament";
import Orders from './components/Orders';

function App() {
  return (
     <BrowserRouter>
       {/* <Route exact path="/Home" component={Home} /> */}
    <SearchName />
    <FilterTemperament />
    <Orders />
    <Home />
    
     </BrowserRouter>

  );
}

export default App;
