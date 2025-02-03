import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import { AppRoutes } from './routes';

import { Header } from '@ui/Header';
import { ToggleTheme } from '@ui/ToggleTheme';

import { GlobalStyle } from '@styles/global';
import { themes } from '@styles/theme';

const App: React.FC = () => {
  const [currentTheme, setCurrentTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme')
    return savedTheme || 'light'
  });

  const toggleTheme = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = e.target
    setCurrentTheme(checked ? 'dark' : 'light')
    localStorage.setItem('theme', checked ? 'dark' : 'light')
  }

  const theme = currentTheme === 'light' ? themes.light : themes.dark;

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <ToggleTheme
        onChange={toggleTheme}
        currentTheme={currentTheme}
        checked={currentTheme === 'dark'}
        id="toggleTheme"
        value="theme"
      />
      <AppRoutes />
    </ThemeProvider>
  );
};

export default App;
