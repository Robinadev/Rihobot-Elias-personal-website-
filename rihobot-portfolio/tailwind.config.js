/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      colors: {
        background: 'hsl(var(--background) / <alpha-value>)',
        surface: 'hsl(var(--surface) / <alpha-value>)',
        foreground: 'hsl(var(--foreground) / <alpha-value>)',
        'muted-foreground': 'hsl(var(--muted-foreground) / <alpha-value>)',
        primary: {
          DEFAULT: 'hsl(var(--primary) / <alpha-value>)',
          foreground: 'hsl(var(--primary-foreground) / <alpha-value>)',
        },
        muted: {
          DEFAULT: 'hsl(var(--foreground) / 0.04)',
          foreground: 'hsl(var(--muted-foreground) / <alpha-value>)',
        },
        line: 'hsl(var(--foreground) / <alpha-value>)',
        border: 'hsl(var(--foreground) / <alpha-value>)',
        input: 'hsl(var(--foreground) / <alpha-value>)',
        ring: 'hsl(var(--primary) / <alpha-value>)',
        card: {
          DEFAULT: 'hsl(var(--surface) / <alpha-value>)',
          foreground: 'hsl(var(--foreground) / <alpha-value>)',
        },
        secondary: {
          DEFAULT: 'hsl(var(--muted-foreground) / <alpha-value>)',
          foreground: 'hsl(var(--surface) / <alpha-value>)',
        },
        accent: {
          DEFAULT: 'hsl(var(--primary) / <alpha-value>)',
          foreground: 'hsl(var(--foreground) / <alpha-value>)',
        },
        destructive: {
          DEFAULT: 'hsl(var(--primary) / <alpha-value>)',
          foreground: 'hsl(var(--surface) / <alpha-value>)',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
