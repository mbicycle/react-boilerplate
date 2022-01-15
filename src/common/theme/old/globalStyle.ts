import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  input:-webkit-autofill,
  input:-webkit-autofill:hover, 
  input:-webkit-autofill:focus, 
  input:-webkit-autofill:active  {
      -webkit-box-shadow: 0 0 0 30px white inset !important;
      height: 0;
  }

  html, body, #root {
    height: 100vh;
    letter-spacing: 0.5px;
    background: 
      linear-gradient(135deg,rgb(250 250 250) 0%,rgb(254 254 254) 0%,rgb(236 249 255) 100%);
    justify-content: space-between;
    *::-webkit-scrollbar-track {
      border-radius: 10px;
      background-color: #F5F5F5;
    }

    *::-webkit-scrollbar {
      width: 8px;
      height: 8px;
      background-color: #F5F5F5;
    }

    *::-webkit-scrollbar-thumb {
      border-radius: 50px;
      background-color: #D8D8D8;
    }
  }

  body {
    margin: 0;
    padding-right: 0!important; // more info https://github.com/mui-org/material-ui/issues/10000;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  #root {
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }
`;
