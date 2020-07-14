import React from "react";
import Pokedex from "./components/Pokedex";
import "./App.css";
import { ReactQueryDevtools } from "react-query-devtools";

function App() {
  return (
    <div className="App">
      <Pokedex />
      <ReactQueryDevtools initialIsOpen={false} />
    </div>
  );
}

export default App;
