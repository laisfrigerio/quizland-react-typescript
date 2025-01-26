import { DefaultTheme } from 'styled-components';

export const themes: Record<string, DefaultTheme> = {
  light: {
    colors: {
      primaryText: '#11052C',
      themeText: '#000000',
      white: '#FFFFFF',
      dark: '#282526',
      headerBg: '#FFFFFF',
      headerBoxShadow: '0 3px 5px #b1b1b14d',
      headerBorderColor: 'red',
      svgIconBg: '#282526',
      svgIconFill: '#FFFFFF',
    },
    fonts: {
      anekMalayalam: 'Anek Malayalam',
    }
  },
  dark: {
    colors: {
      background: '#282526',
      themeText: '#FFFFFF',
      dark: '#282526',
      headerBg: '#282526',
      headerBoxShadow: '0 3px 5px #0000004d',
      headerBorderColor: '#383838',
      svgIconBg: '#FFFFFF',
      svgIconFill: '#282526',
    },
    fonts: {
      anekMalayalam: 'Anek Malayalam',
    }
  },
}