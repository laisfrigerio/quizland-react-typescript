import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    border: 0;
    margin: 0;
    padding: 0;

    // font-family: Poppins, Helvetica, sans-serif;
    font-family: ${({ theme }) => theme.fonts.anekMalayalam}, sans-serif;
    line-height: 1.5;
    font-weight: 400;

    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.themeText};
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    border: none;
    background-color: transparent;
    font-family: inherit;
    padding: 0;
    cursor: pointer;
  }
`;

export const ContainerMain = styled.main`
  display: flex;
  padding: 32px 32px;
`;