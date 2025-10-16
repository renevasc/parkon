import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    'bg-primary', 'text-primary', 'border-primary',
    'bg-accent', 'text-accent', 'border-accent',
    'bg-secondary', 'text-secondary', 'border-secondary',
    'bg-background', 'text-foreground',
    'bg-card', 'text-card-foreground',
    'bg-border', 'border-border',
    'bg-input', 'border-input',
    'ring-ring',
  ],
  theme: {
    extend: {
      colors: {
        primary: "rgb(var(--primary) / <alpha-value>)",
        "primary-dark": "rgb(var(--primary-dark) / <alpha-value>)",
        secondary: "rgb(var(--secondary) / <alpha-value>)",
        accent: "rgb(var(--accent) / <alpha-value>)",
        background: "rgb(var(--background) / <alpha-value>)",
        foreground: "rgb(var(--foreground) / <alpha-value>)",
        card: "rgb(var(--card) / <alpha-value>)",
        "card-foreground": "rgb(var(--card-foreground) / <alpha-value>)",
        border: "rgb(var(--border) / <alpha-value>)",
        input: "rgb(var(--input) / <alpha-value>)",
        ring: "rgb(var(--ring) / <alpha-value>)",
        muted: "243 244 246",
      },
      borderRadius: {
        DEFAULT: "var(--radius)",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-out forwards",
        "slide-in": "slideIn 0.3s ease-out forwards",
        "slide-out": "slideOut 0.3s ease-out forwards",
        "spin": "spin 1s linear infinite",
      },
      keyframes: {
        fadeIn: {
          'from': { opacity: '0', transform: 'translateY(10px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          'from': { opacity: '0', transform: 'translateX(100%)' },
          'to': { opacity: '1', transform: 'translateX(0)' },
        },
        slideOut: {
          'from': { opacity: '1', transform: 'translateX(0)' },
          'to': { opacity: '0', transform: 'translateX(100%)' },
        },
        spin: {
          'from': { transform: 'rotate(0deg)' },
          'to': { transform: 'rotate(360deg)' },
        },
      },
    },
  },
  plugins: [],
};
export default config; 