import { defineConfig } from 'vite'
import Inspect from 'vite-plugin-inspect'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts';
import tsconfigPaths from 'vite-tsconfig-paths'
import { libInjectCss } from 'vite-plugin-lib-inject-css'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: 'lib',
    lib: {
      entry: [
        path.resolve(__dirname, 'src/index.ts'),
      ],
      name: '2ra-ui',
      fileName: (format, name) => {
        if (format === 'es') {
          return `${name}.js`
        }

        return `${name}.${format}.js`;
      }
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime'],
      output: {
        inlineDynamicImports: false,
        format: 'umd',
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'react/jsx-runtime': 'react/jsx-runtime',
        },
      },
    },
  },
  plugins: [
    react(),
    Inspect(),
    tsconfigPaths(),
    dts(),
    libInjectCss(),
  ],
})
