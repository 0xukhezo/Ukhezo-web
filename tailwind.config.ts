import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        red: "#fc0407",
        pink: "#fd16f9",
        purple: "#6506d8",
      },
      borderWidth: { 1: "1px" },
      screens: {
        roadmap: "907px",
        treeDesktop: "1128px",
      },
      fontFamily: {
        anton: ["Anton", "normal"],
        bitter: ["Bitter", "normal"],
      },
    },
  },
  plugins: [],
}
export default config
