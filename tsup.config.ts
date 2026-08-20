import { defineConfig } from "tsup";


export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm'],
  dts: true,
  clean: true,
  minify: false,
  loader: {
    '.css': 'text',
  },
  external: ['react', 'react-dom']
});
