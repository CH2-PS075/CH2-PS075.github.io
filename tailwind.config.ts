import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: '#27448E',
        dark: '#1F2933',
        grey: '#5F6368',
        smoke: '#F6F3F3',
        carrot: '#FF9F46',
        android: '#3DDB85',
        tensor: '#F6BE37',
        cloud: '#4A8AF7',
      },
    },
  },
  plugins: [],
};
export default config;
