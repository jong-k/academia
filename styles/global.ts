import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";
import fontsCss from "./fonts.module.css";

const GlobalStyles = createGlobalStyle`
  ${normalize}
  ${fontsCss}

  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html,
  body {
    font-family: "Pretendard-Regular";
    line-height: 1.8;
  }
  
  a {
    text-decoration: none;
    color: steelblue;
  }
  
  p {
    margin: 10px 0;
  }

  h1 {
    margin-bottom: 20px;
  }
`;

export default GlobalStyles;
