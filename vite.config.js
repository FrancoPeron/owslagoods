import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from "path";

import vitePluginRequire from "vite-plugin-require";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
    
    vitePluginRequire({
			// @fileRegex RegExp
			// optional：default file processing rules are as follows
			// fileRegex:/(.jsx?|.tsx?|.vue)$/
		})
  ],
	resolve: {
		alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
  },
	css: {
		preprocessorOptions: {
			scss: {
					additionalData: '@import "./src/styles/styles.scss";',
			},
		},
},
})

