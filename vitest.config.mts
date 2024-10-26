import { defineConfig, defaultInclude } from 'vitest/config';

export default defineConfig({
  test: {
    dir: 'src',
    setupFiles: ['vitest.setup.ts'],
    coverage: {
      provider: 'v8',
      include: ['src'],
      enabled: true,
      reporter: [['lcov', { projectRoot: './' }], ['text']],
    },
    typecheck: {
      enabled: true,
      include: defaultInclude,
    },
    environment: 'jsdom',
  },
});
