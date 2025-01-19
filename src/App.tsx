import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/global';

import { Header } from './ui/Header';
import { ToggleTheme } from './ui/ToggleTheme';
import { ContainerMain } from './styles/global';
import { themes } from './styles/theme';

function App() {
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
      <ContainerMain>QuizLand</ContainerMain>
    </ThemeProvider>
  )
}

export default App
