import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    font-size: 14px;
  }

  html, body, #root {
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
  }

  h1 {
    margin: 0;
  }

  @media (min-width: 1024px) {
    
  }

  body {
    background-color: ${(props) =>
      props.curTheme === "light" ? "#fff" : "#000"};
  }
`;
