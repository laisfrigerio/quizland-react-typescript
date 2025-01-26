export default {
  preset: 'ts-jest', // Usa o preset para TypeScript
  testEnvironment: 'jsdom', // Simula um ambiente de navegador
  moduleNameMapper: {
    '\\.(css|scss|sass)$': 'identity-obj-proxy', // Mapeia arquivos de estilo para evitar erros
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'], // Configuração adicional pós-setup
  modulePaths: ['<rootDir>/src'], // Facilita os imports absolutos
  transform: {
    '^.+\\.(ts|tsx)$': 'babel-jest', // Usa Babel para transformar arquivos TS/TSX
  },
};
