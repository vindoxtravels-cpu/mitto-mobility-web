import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Ensure Tailwind can use the same CSS-variable palette everywhere
        mitto: {
          bg: "var(--mitto-bg)",
          primary: {
            50: "var(--mitto-primary-50)",
            100: "var(--mitto-primary-100)",
            200: "var(--mitto-primary-200)",
            300: "var(--mitto-primary-300)",
            400: "var(--mitto-primary-400)",
            500: "var(--mitto-primary-500)",
            600: "var(--mitto-primary-600)",
            700: "var(--mitto-primary-700)",
            800: "var(--mitto-primary-800)",
            900: "var(--mitto-primary-900)",
          },
          accent: {
            50: "var(--mitto-accent-50)",
            100: "var(--mitto-accent-100)",
            200: "var(--mitto-accent-200)",
            300: "var(--mitto-accent-300)",
            400: "var(--mitto-accent-400)",
            500: "var(--mitto-accent-500)",
            600: "var(--mitto-accent-600)",
            700: "var(--mitto-accent-700)",
          },
          gray: {
            50: "var(--mitto-gray-50)",
            100: "var(--mitto-gray-100)",
            200: "var(--mitto-gray-200)",
            300: "var(--mitto-gray-300)",
            400: "var(--mitto-gray-400)",
            500: "var(--mitto-gray-500)",
            600: "var(--mitto-gray-600)",
            700: "var(--mitto-gray-700)",
            800: "var(--mitto-gray-800)",
            900: "var(--mitto-gray-900)",
          },
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        // Optional: expose CSS variable-like radii via utilities if needed
        // However we rely on custom CSS above for consistency
      },
      backgroundImage: {
        'ocean-gradient': 'linear-gradient(135deg, #003D82 0%, #002d61 50%, #001e40 100%)',
        'ocean-light': 'linear-gradient(135deg, #e6f3ff 0%, #cce7ff 100%)',
        'amber-gradient': 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)',
        'amber-shine': 'linear-gradient(90deg, transparent, rgba(245, 158, 11, 0.2), transparent)',
        'ocean-wave': 'linear-gradient(90deg, transparent, rgba(0, 135, 255, 0.1), transparent)',
      },
      boxShadow: {
        soft: "0 18px 60px rgba(2, 6, 23, 0.10), 0 2px 10px rgba(2, 6, 23, 0.06)",
        card: "0 16px 50px rgba(2, 6, 23, 0.10)",
      },
      keyframes: {
        "atlys-blob": {
          "0%": { transform: "translate3d(0,0,0) scale(1)" },
          "33%": { transform: "translate3d(18px,-22px,0) scale(1.06)" },
          "66%": { transform: "translate3d(-14px,16px,0) scale(0.98)" },
          "100%": { transform: "translate3d(0,0,0) scale(1)" },
        },
        "atlys-float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "atlys-sheen": {
          "0%": { transform: "translateX(-120%) skewX(-18deg)" },
          "100%": { transform: "translateX(220%) skewX(-18deg)" },
        },
        "atlys-fade-up": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        // Slow, premium "background drift" like Atlys hero highlights
        "atlys-pan": {
          "0%": { transform: "translate3d(0,0,0) scale(1)" },
          "25%": { transform: "translate3d(18px,-12px,0) scale(1.02)" },
          "50%": { transform: "translate3d(-12px,10px,0) scale(1.01)" },
          "75%": { transform: "translate3d(10px,14px,0) scale(1.03)" },
          "100%": { transform: "translate3d(0,0,0) scale(1)" },
        },
        // Subtle glow pulse used on highlights / CTAs
        "atlys-glow": {
          "0%, 100%": { opacity: "0.35" },
          "50%": { opacity: "0.6" },
        },
        // Soft reveal for nav/cards (non-janky)
        "atlys-reveal": {
          "0%": { opacity: "0", transform: "translateY(-6px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "atlys-blob": "atlys-blob 10s ease-in-out infinite",
        "atlys-blob-slow": "atlys-blob 14s ease-in-out infinite",
        "atlys-float": "atlys-float 5s ease-in-out infinite",
        "atlys-sheen": "atlys-sheen 2.2s ease-in-out infinite",
        "atlys-fade-up": "atlys-fade-up 500ms ease-out both",
        "atlys-pan": "atlys-pan 18s ease-in-out infinite",
        "atlys-glow": "atlys-glow 3.6s ease-in-out infinite",
        "atlys-reveal": "atlys-reveal 420ms ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
