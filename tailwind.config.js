/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx,svelte}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx,svelte}",
    "./components/**/*.{js,ts,jsx,tsx,mdx,svelte}",
    "./node_modules/layerchart/**/*.{svelte,js}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "hsl(var(--color-primary))",
        "surface-100": "hsl(var(--color-surface-100))",
        "surface-200": "hsl(var(--color-surface-200))",
        "surface-300": "hsl(var(--color-surface-300))",
        "surface-content": "hsl(var(--color-surface-content))",
      },
    },
  },
  plugins: [],
};
