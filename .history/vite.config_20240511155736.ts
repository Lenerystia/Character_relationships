import { sveltekit } from '@sveltejs/kit/vite'
import { defineConfig } from 'vite'
import { viteStaticCopy } from 'vite-plugin-static-copy'
 
export default defineConfig({
  plugins: [sveltekit(),
    viteStaticCopy({
      targets: [
        {
          src: "node_modules/@hpcc-js/wasm/dist/graphvizlib.wasm",
          dest: '.',
        },
        {
          src: "node_modules/@hpcc-js/wasm/dist/expatlib.wasm",
          dest: '.',
        }
      ]
    })
  ],
  server: {
    fs: {
      allow: ['styled-system'],
    },
  },
})