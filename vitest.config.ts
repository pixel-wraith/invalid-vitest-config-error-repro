import { defineVitestConfig } from '@nuxt/test-utils/config';

export default defineVitestConfig({
    test: {
        include: ['app/**/*.test.ts'],
        exclude: ['tests/**'],
    },
});
