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
        lightGray: "#323232",
        mainBackground: "#0f0f0f",
      },
      borderWidth: { 1: "1px" },
      fontFamily: {
        anton: ["Anton", "normal"],
        bitter: ["Bitter", "normal"],
      },
    },
  },
  plugins: [],
}
export default config
