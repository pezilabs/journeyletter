import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';

export default defineConfig({
  site: 'https://pezilabs.com',
  // Static output on purpose (SCOPE.md): this is a content site; every page
  // prerenders. Vercel's analytics-install PR set output:'server', which
  // silently breaks the getStaticPaths-based /notes/[id] pages (500s in
  // production). The adapter injects Web Analytics in static mode too, so
  // Tom's analytics choice is preserved.
  output: 'static',
  adapter: vercel({
    webAnalytics: {
      enabled: true
    }
  })
});
