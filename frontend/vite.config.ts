import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
const PORT = process.env.PORT;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: Number(PORT),
  },
});
