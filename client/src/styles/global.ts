import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #f0f2f5;
    --red: #e52e4d;
    --blue: #5429cc;
    --green: #33cc95;

    --blue-light: #6933ff;
    
    --text-title: #363f5f;
    --text-body: #969cb3;

    --shape: #FFFFFF;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

// font-size: 16px (padrão)
html {
  //Quando o usuario estiver com a tela até 1080px -> font-size vai para 93.75%(16 x 0,9375) = 15px
  @media (max-width: 1080px) {
    font-size: 73.75%;
  }

  @media (max-width: 720px) {
    font-size: 87.5%; //14px
  }
}

  body {
    background: var(--background);
    -webkit-font-smothing: antialiased; 
  }

  body, input, textarea, button { //input, textarea, button por padrão não importam a fonte do body
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }

  [disable] { // O que estiver desabilitado na aplicação
    opacity: 0.6;
    cursor: not-allowed;
  }
`