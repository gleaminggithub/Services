import type { Config } from "tailwindcss";
const { fontFamily } = require("tailwindcss/defaultTheme")
const config: Config = {
  darkMode:"class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#038C7F',
        secondary: '#F2C641',
        tertiary: {
          dark: '#F27405',
          light: '#F2C641'
        }
      },
      fontFamily: {
        poppins: ['var(--font-poppins)', ...fontFamily.sans],
      },
    },
  },
  plugins: [],
};
export default config;


// The line const { fontFamily } = require("tailwindcss/defaultTheme") is using JavaScript destructuring to import the fontFamily property from the default theme configuration of Tailwind CSS

// dark:'class', ->In Tailwind CSS, the dark mode is managed using the dark: variant. When you set dark: 'class' in your Tailwind configuration, you’re telling Tailwind to apply dark mode styles based on the presence of a specific class (usually dark) on a parent element (like <html> or <body>).
// Example -><div className="bg-white text-black dark:bg-black dark:text-white">
// This text and background color change based on dark mode.
// </div>

