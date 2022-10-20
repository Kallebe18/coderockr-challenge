import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Rubik';
  }

  textarea, input { 
    outline: none;
  }

  html {
    font-size: 16px;
    min-height: 100vh;
    background-image: linear-gradient(90deg, #F1A10A, #342303)
  }

  @media (min-width:768px) {
    font-size: 18px;
  }
  @media (min-width:1024px) {
    font-size: 19px;
  }
  @media (min-width:1280px) {
    font-size: 20px;
  }

  h1 {
    font-size: 1.2rem;
  }
  h2 {
    font-size: 1rem;
  }
`;

export default GlobalStyles;
