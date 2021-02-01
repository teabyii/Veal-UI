import { resolve } from 'path';
import { createServer } from 'vite';
import vuePlugin from '@vitejs/plugin-vue';

(async function() {
  const server = await createServer({
    root: resolve(__dirname, '../client'),
    server: {
      port: 3000
    },
    plugins: [
      vuePlugin()
    ]
  });

  await server.listen();
})();
