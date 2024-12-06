// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist",
    modulePreload: false,
    rollupOptions: {
      // if this doesn't work you can uncomment it
      // input: "src/index.js",
      input: "src/main.tsx",
      output: {
        format: "system", // Required for single-spa
      },
    },
  },
});
