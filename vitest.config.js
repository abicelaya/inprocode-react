import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'jsdom', // Esto es importante para las pruebas con React, ya que simula un DOM.
    globals: true, // Para usar jest matchers como `expect` y otros métodos globales.
    setupFiles: './src/setupTests.js', // Para agregar configuraciones previas a los tests.
  },
});
