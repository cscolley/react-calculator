import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --width: 320px;
    --defaultColor: rgba(0, 0, 0, 0.87);
  }

  * {
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    color: var(---defaultColor);
  }

  body {
    margin: 0;
    padding: 0;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #303179;
  }
`;
