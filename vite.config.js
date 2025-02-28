export default defineConfig({
    server: {
      proxy: {
        '/api': {
          target: 'https://epitomebackend.onrender.com',
          changeOrigin: true,
          secure: false,
        },
      },
    },
  });
  