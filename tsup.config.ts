import { defineConfig } from 'tsup';

const baseConfig = {
  entry: ['src/unit.ts'],
  splitting: false,
  sourcemap: true,
  dts: false,
};

const baseConfigMinified = {
  minify: true,
  sourcemap: true,
  outExtension() {
    return { js: '.min.js' };
  },
};

export default defineConfig([
  {
    ...baseConfig,
    clean: true,
    format: ['esm'],
    outDir: 'lib/esm',
    dts: true,
  },
  {
    ...baseConfig,
    ...baseConfigMinified,
    format: ['esm'],
    outDir: 'lib/esm',
  },
  {
    ...baseConfig,
    clean: true,
    format: ['cjs'],
    outDir: 'lib/cjs',
    dts: true,
  },
  {
    ...baseConfig,
    ...baseConfigMinified,
    format: ['cjs'],
    outDir: 'lib/cjs',
  },
]);
