/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: '#0A0A0A',
          elevated: '#141414',
          subtle: '#1E1E1E',
          'section-warm': '#0D0B0A',
          'section-blue': '#0A0C10',
          'section-purple': '#0C0A10',
          'section-teal': '#0A0D0D',
          'section-slate': '#0B0C0E',
        },
        text: {
          primary: '#FAFAFA',
          secondary: '#A0A0A0',
          muted: '#787878',
        },
        accent: {
          DEFAULT: '#3B82F6',
          hover: '#60A5FA',
        },
      },
      fontFamily: {
        serif: ['"Instrument Serif"', 'Georgia', 'serif'],
        sans: ['"Geist Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"Geist Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      boxShadow: {
        glow: '0 0 15px rgba(59,130,246,0.15)',
        'glow-lg': '0 0 40px rgba(59,130,246,0.1)',
        'glow-sm': '0 0 8px rgba(59,130,246,0.2)',
      },
      borderWidth: {
        3: '3px',
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
      },
    },
  },
  plugins: [],
};
