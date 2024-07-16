module.exports = {
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.[t|j]sx?$': 'babel-jest',
  },
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'], // Asegúrate de que la ruta sea correcta
  moduleFileExtensions: ['js', 'jsx'],
};
