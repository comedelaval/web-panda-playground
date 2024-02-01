import { defineConfig } from '@pandacss/dev';
import { webPandaPreset } from 'components-panda';
export default defineConfig({
  presets: ['@pandacss/dev/presets', webPandaPreset],
  conditions: {
    blue: '[data-theme=blue] & ',
    rose: '[data-theme=rose] &',
  },
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: [
    './src/**/*.{js,jsx,ts,tsx,vue}',
    './pages/**/*.{js,jsx,ts,tsx,vue}',
    './src/stories/**/*.{js,jsx,ts,tsx,vue}',
  ],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {},
  },

  // The output directory for your css system
  outdir: 'styled-system',
});
