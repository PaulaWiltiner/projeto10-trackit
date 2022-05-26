import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle `

@import url('https://fonts.googleapis.com/css2?family=Lexend+Deca:wght@100;200;300;400;500;600;700&display=swap');

  *{
    box-sizing:border-box;
  }
  

  .root {
    background-color:#ffffff;
    display:flex;
    flex-direction:column;
    align-items:center;
    font-family: 'Lexend Deca', sans-serif;
  }

  .root button, input {
    font-family: 'Lexend Deca', sans-serif;
  }
  
`;
 
export default GlobalStyle;