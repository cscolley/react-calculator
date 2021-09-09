import React from "react";
import Calculator from "./components/Calculator";
import Links from './components/Links';
import { GlobalStyle } from "./GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <Calculator />
      <Links />
    </>
  );
}

export default App;
