import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  server: {
    allowedHosts: ["dbase.o-r.kr"],
    host: true,
  },
  plugins: [react()],
});
