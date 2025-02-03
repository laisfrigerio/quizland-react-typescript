import { DefaultTheme } from 'styled-components';

export const themes: Record<string, DefaultTheme> = {
  light: {
    colors: {
      primaryColor: '#1c1d1f',
      primaryText: '#11052C',
      primaryColorTextButton: '#fff',
      secondaryColor: '#6d28d2',
      secondaryColorText: '#404756',
      secondaryColorTextButton: '#fff',
      themeText: '#000000',
      white: '#FFFFFF',
      dark: '#282526',
      headerBg: '#1c1d1f',
      headerBoxShadow: '0 3px 5px #b1b1b14d',
      headerBorderColor: 'red',
      svgIconBg: '#282526',
      svgIconFill: '#FFFFFF',
      gray150: '#f7f9fa',
      gray200: '#eeeeee',
      gray300: '#d1d7dc',
      gray450: '#cccccc',
    },
    fonts: {
      anekMalayalam: 'Anek Malayalam',
    }
  },
  dark: {
    colors: {
      primaryColor: '#282526',
      secondaryColor: '#986cd9',
      secondaryColorText: '#a8a8a8',
      secondaryColorTextButton: '#282526',
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