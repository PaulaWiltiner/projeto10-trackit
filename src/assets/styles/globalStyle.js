import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Playball&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Lexend+Deca:wght@100;200;300;400;500;600;700&display=swap');

  *{
    box-sizing:border-box;
  }

  .green{
    background-color:#8FC549;
    border-radius: 40px;
    height:45px;
    color:#ffffff;
  }

  .red {
    background-color:#E75766;
    border-radius: 40px;
    height:45px;
    color:#ffffff;
  }

  .calendar{
    border:1px solid #ffffff;
    width: 335px;
    border-radius: 10px;
    height:300px;
  }
  
  body{
    background-color:#f0f0f0;
  }
  .root {
    background-color:#f0f0f0;
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
