import '@testing-library/jest-dom'; // Adiciona métodos customizados como `toBeInTheDocument`
import 'jest-styled-components';
import { TextEncoder } from 'util';

global.TextEncoder = TextEncoder;
