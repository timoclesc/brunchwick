import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html,
  body {
    max-width: 100vw;
    overflow-x: hidden;
    font-family: var(--font-serif);
  }

  body {
    background-color: ${(props) => props.theme.lightTheme.background};
    color: ${(props) => props.theme.lightTheme.body};
  }


  a {
    color: inherit;
    text-decoration: none;
  }
`;

export const GlobalStyles = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      {children}
    </>
  );
};
