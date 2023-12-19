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
                primary: 'var(--primary)',
                accent: 'var(--accent)',
                'soft-gray': 'var(--soft-gray)',
                'rich-brown': 'var(--rich-brown)',
                'muted-green': 'var(--muted-green)',
            },
            backgroundColor: {
                'lendlit-overlay': 'rgba(0, 32, 74, 0.6)',
                'lendlit-yellow': '#FFD662',
                'lendlit-blue': '#00204A',
                'lendlit-brown': '#8B572A',
                'lendlit-green': '#4CAF50',
            },
        },
    },
    plugins: [],
};
export default config;
