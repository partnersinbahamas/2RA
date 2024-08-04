import { defineConfig } from 'vite'
import Inspect from 'vite-plugin-inspect'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  // envPrefix: 'APP_',
  // publicDir: 'viteBuild', // allows to rename public folder on npm run build
  build: {
    lib: {
      entry: [
        path.resolve(__dirname, 'src/components/Buttons/Button/Button'),
        path.resolve(__dirname, 'src/components/Buttons/IconButton/IconButton'),
      ],
      name: '2RA',
      fileName: (format, name) => {
        if (format === 'es') {
          return `${name}.js`
        }

        return `${name}.${format}.js`;
      }
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        preserveModules: true,
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
    sourcemap: true,
    emptyOutDir: true,
    outDir: 'build' // Ensure this matches the directory you're using in gh-pages
  },
  plugins: [
    react(),
    Inspect(),
    dts({
      insertTypesEntry: true,
    }),
  ],
})
