import { defineConfig } from 'astro/config';

// Демо нового лендинга TargetFactory /flowers на GitHub Pages
export default defineConfig({
  site: 'https://tema-mail.github.io',
  base: '/tf-flowers',
  trailingSlash: 'always',
  devToolbar: { enabled: false },
});
