import { defineConfig } from 'astro/config';

import node from '@astrojs/node';
import fulldev from 'fulldev-ui/integration'

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: node({
    mode: 'standalone'
  }),
  integrations: [fulldev({
    colors: {
      theme: 'dark',
      dark: {
        background: '#111110',
        base: '#6F6D66',
        brand: '#F50',
      },
      light: {
        background: '#EEEEEC',
        base: '#6F6D66',
        brand: '#F50',
      },
    },
  }), icon()],
});