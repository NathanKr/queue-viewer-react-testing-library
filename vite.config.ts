import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  test: {
    globals: true,
    setupFiles: 'test/setup.ts',
    environment: 'jsdom',
    clearMocks: true,
    coverage: {
      provider: 'istanbul' // or 'v8'
    },
  },
  
})
