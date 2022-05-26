import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle `

@import url('https://fonts.googleapis.com/css2?family=Lexend+Deca:wght@100;200;300;400;500;600;700&display=swap');

  *{
    box-sizing:border-box;
  }

  body {
    background-color:#ffffff;
    display:flex;
    flex-direction:column;
    font-family: 'Lexend Deca', sans-serif;
  }
  
`;
 
export default GlobalStyle;