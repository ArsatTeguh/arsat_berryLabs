import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#5459D8',
        secondary: '#F7FAFC',
      },
      boxShadow: {
        neon: '0 0 5px theme("colors.purple.200"), 0 0 20px theme("colors.purple.700")',
      },
    },
  },
  // eslint-disable-next-line import/no-extraneous-dependencies, global-require
  plugins: [require('daisyui')],
  daisyui: {
    themes: ['light'],
  },
};
export default config;
