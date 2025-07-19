import { defineConfig } from "astro/config";
// import node from "@astrojs/node";
import vercel from "@astrojs/vercel/serverless"; // o /edge, /static

export default defineConfig({
  output: "server", // o 'static' o 'hybrid'
  //   adapter: node({ mode: "standalone" }),
  adapter: vercel({
    isr: false,
    webAnalytics: { enabled: true },
    // otras opciones...
  }),
});
// npm install @astrojs/vercel
// npm install @astrojs/node

// npm install @astrojs/netlify
// import { defineConfig } from 'astro/config';
// import netlify from '@astrojs/netlify';

// export default defineConfig({
//   output: 'server', // <--- SSR dinámico
//   adapter: netlify(),
// });

// npm run build
// node dist/server/entry.mjs
