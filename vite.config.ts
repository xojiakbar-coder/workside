import path from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  server: {
    port: 3005
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  }
});
