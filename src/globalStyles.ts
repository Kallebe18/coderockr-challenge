import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Rubik';
  }

  #root {
    min-height: 100vh;
    background-image: linear-gradient(90deg, #F1A10A, #342303)
  }
`;

export default GlobalStyles;
