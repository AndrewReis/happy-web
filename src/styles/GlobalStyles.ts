import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #EBF2F5;
    color: #fff;
    font-family: 'Nunito', sans-serif;
  }
  
  html, body, #root {
    height: 100vh;
  }
`;