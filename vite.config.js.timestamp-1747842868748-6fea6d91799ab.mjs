// vite.config.js
import react from "file:///D:/THREEJS/portfolio%202.0/node_modules/@vitejs/plugin-react/dist/index.mjs";
import { transformWithEsbuild } from "file:///D:/THREEJS/portfolio%202.0/node_modules/vite/dist/node/index.js";
import restart from "file:///D:/THREEJS/portfolio%202.0/node_modules/vite-plugin-restart/dist/index.js";
var vite_config_default = {
  root: "src/",
  port: 2001,
  publicDir: "../public/",
  plugins: [
    // Restart server on static/public file change
    restart({ restart: ["../public/**"] }),
    // React support
    react(),
    // .js file support as if it was JSX
    {
      name: "load+transform-js-files-as-jsx",
      async transform(code, id) {
        if (!id.match(/src\/.*\.js$/))
          return null;
        return transformWithEsbuild(code, id, {
          loader: "jsx",
          jsx: "automatic"
        });
      }
    }
  ],
  server: {
    host: true,
    // Open to local network and display URL
    open: !("SANDBOX_URL" in process.env || "CODESANDBOX_HOST" in process.env)
    // Open if it's not a CodeSandbox
  },
  build: {
    outDir: "../dist",
    // Output in the dist/ folder
    emptyOutDir: true,
    // Empty the folder first
    sourcemap: true
    // Add sourcemap
  },
  assetsInclude: ["**/*.glb", "**/*.gltf"]
};
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxUSFJFRUpTXFxcXHBvcnRmb2xpbyAyLjBcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXFRIUkVFSlNcXFxccG9ydGZvbGlvIDIuMFxcXFx2aXRlLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovVEhSRUVKUy9wb3J0Zm9saW8lMjAyLjAvdml0ZS5jb25maWcuanNcIjtpbXBvcnQgcmVhY3QgZnJvbSAnQHZpdGVqcy9wbHVnaW4tcmVhY3QnXG5pbXBvcnQgeyB0cmFuc2Zvcm1XaXRoRXNidWlsZCB9IGZyb20gJ3ZpdGUnXG5pbXBvcnQgcmVzdGFydCBmcm9tICd2aXRlLXBsdWdpbi1yZXN0YXJ0J1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgcm9vdDogJ3NyYy8nLFxuICAgIHBvcnQ6IDIwMDEsXG4gICAgcHVibGljRGlyOiAnLi4vcHVibGljLycsXG4gICAgcGx1Z2luczpcbiAgICAgICAgW1xuICAgICAgICAgICAgLy8gUmVzdGFydCBzZXJ2ZXIgb24gc3RhdGljL3B1YmxpYyBmaWxlIGNoYW5nZVxuICAgICAgICAgICAgcmVzdGFydCh7IHJlc3RhcnQ6IFsnLi4vcHVibGljLyoqJyxdIH0pLFxuXG4gICAgICAgICAgICAvLyBSZWFjdCBzdXBwb3J0XG4gICAgICAgICAgICByZWFjdCgpLFxuXG4gICAgICAgICAgICAvLyAuanMgZmlsZSBzdXBwb3J0IGFzIGlmIGl0IHdhcyBKU1hcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiAnbG9hZCt0cmFuc2Zvcm0tanMtZmlsZXMtYXMtanN4JyxcbiAgICAgICAgICAgICAgICBhc3luYyB0cmFuc2Zvcm0oY29kZSwgaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFpZC5tYXRjaCgvc3JjXFwvLipcXC5qcyQvKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsXG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRyYW5zZm9ybVdpdGhFc2J1aWxkKGNvZGUsIGlkLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsb2FkZXI6ICdqc3gnLFxuICAgICAgICAgICAgICAgICAgICAgICAganN4OiAnYXV0b21hdGljJyxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgc2VydmVyOlxuICAgIHtcbiAgICAgICAgaG9zdDogdHJ1ZSwgLy8gT3BlbiB0byBsb2NhbCBuZXR3b3JrIGFuZCBkaXNwbGF5IFVSTFxuICAgICAgICBvcGVuOiAhKCdTQU5EQk9YX1VSTCcgaW4gcHJvY2Vzcy5lbnYgfHwgJ0NPREVTQU5EQk9YX0hPU1QnIGluIHByb2Nlc3MuZW52KSAvLyBPcGVuIGlmIGl0J3Mgbm90IGEgQ29kZVNhbmRib3hcbiAgICB9LFxuICAgIGJ1aWxkOlxuICAgIHtcbiAgICAgICAgb3V0RGlyOiAnLi4vZGlzdCcsIC8vIE91dHB1dCBpbiB0aGUgZGlzdC8gZm9sZGVyXG4gICAgICAgIGVtcHR5T3V0RGlyOiB0cnVlLCAvLyBFbXB0eSB0aGUgZm9sZGVyIGZpcnN0XG4gICAgICAgIHNvdXJjZW1hcDogdHJ1ZSAvLyBBZGQgc291cmNlbWFwXG4gICAgfSxcbiAgICBhc3NldHNJbmNsdWRlOiBbJyoqLyouZ2xiJywgJyoqLyouZ2x0ZiddXG59Il0sCiAgIm1hcHBpbmdzIjogIjtBQUFrUSxPQUFPLFdBQVc7QUFDcFIsU0FBUyw0QkFBNEI7QUFDckMsT0FBTyxhQUFhO0FBRXBCLElBQU8sc0JBQVE7QUFBQSxFQUNYLE1BQU07QUFBQSxFQUNOLE1BQU07QUFBQSxFQUNOLFdBQVc7QUFBQSxFQUNYLFNBQ0k7QUFBQTtBQUFBLElBRUksUUFBUSxFQUFFLFNBQVMsQ0FBQyxjQUFlLEVBQUUsQ0FBQztBQUFBO0FBQUEsSUFHdEMsTUFBTTtBQUFBO0FBQUEsSUFHTjtBQUFBLE1BQ0ksTUFBTTtBQUFBLE1BQ04sTUFBTSxVQUFVLE1BQU0sSUFBSTtBQUN0QixZQUFJLENBQUMsR0FBRyxNQUFNLGNBQWM7QUFDeEIsaUJBQU87QUFFWCxlQUFPLHFCQUFxQixNQUFNLElBQUk7QUFBQSxVQUNsQyxRQUFRO0FBQUEsVUFDUixLQUFLO0FBQUEsUUFDVCxDQUFDO0FBQUEsTUFDTDtBQUFBLElBQ0o7QUFBQSxFQUNKO0FBQUEsRUFDSixRQUNBO0FBQUEsSUFDSSxNQUFNO0FBQUE7QUFBQSxJQUNOLE1BQU0sRUFBRSxpQkFBaUIsUUFBUSxPQUFPLHNCQUFzQixRQUFRO0FBQUE7QUFBQSxFQUMxRTtBQUFBLEVBQ0EsT0FDQTtBQUFBLElBQ0ksUUFBUTtBQUFBO0FBQUEsSUFDUixhQUFhO0FBQUE7QUFBQSxJQUNiLFdBQVc7QUFBQTtBQUFBLEVBQ2Y7QUFBQSxFQUNBLGVBQWUsQ0FBQyxZQUFZLFdBQVc7QUFDM0M7IiwKICAibmFtZXMiOiBbXQp9Cg==
