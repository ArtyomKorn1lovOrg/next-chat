import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'node:url';
import { configDefaults, defineConfig } from 'vitest/config';

export default defineConfig({
  root: fileURLToPath(new URL('.', import.meta.url)),
  plugins: [react()],
  resolve: {
    tsconfigPaths: true,
  },
  test: {
    globals: false,
    clearMocks: true,
    restoreMocks: true,
    include: ['**/*.{test,spec}.{ts,tsx}'],
    exclude: [...configDefaults.exclude, '**/.next/**', '**/dist/**', '**/coverage/**', '**/e2e/**'],
    projects: [
      {
        extends: true,
        root: fileURLToPath(new URL('./apps/web', import.meta.url)),
        test: {
          name: '@app/web',
          environment: 'jsdom',
          setupFiles: ['./vitest.setup.ts'],
        },
      },
      {
        extends: true,
        root: fileURLToPath(new URL('./packages/ui', import.meta.url)),
        test: {
          name: '@app/ui',
          environment: 'jsdom',
          setupFiles: ['./vitest.setup.ts'],
        },
      },
      {
        extends: true,
        root: fileURLToPath(new URL('./packages/shared', import.meta.url)),
        test: {
          name: '@app/shared',
          environment: 'node',
          setupFiles: ['./vitest.setup.ts'],
        },
      },
    ],
  },
});
