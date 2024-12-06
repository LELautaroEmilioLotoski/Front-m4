import type { Config } from "tailwindcss";


const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/views/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        customBackground: 'rgb(29, 35, 42)', // Usa un nombre único para evitar conflictos
        foreground: "var(--foreground)",
      },
    },
    
  },
  plugins: [
    require('daisyui')
  ],
};
export default config;
