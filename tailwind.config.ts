import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        p: "240px",
        d: "1024px",
      },
      fontFamily: {
        //system font
        OpenSans: ["Open Sans", "sans-serif"],
        LexendDeca: ["Lexend Deca", "sans-serif"],
        Montserrat: ["Montserrat", "sans-serif"],
        //custom font
        NunitoSans: ["Nunito Sans", "sans-serif"],
        SVNDancing: ["SVN-Dancing", "sans-serif"],
        UTMAmerican: ["UTMAmerican", "sans-serif"],
        UTMFleur: ["UTMFleur", "sans-serif"],
      },

      colors: {
        //system colors
        redPrimmary: "#ed1b2e",
        Blue3D: "#1D1D3D",
        colortopdownBlue: "#2c95ff",
        colortopdownGray: "#414045",
        blueAdmin: "#74affc",
        purpleAdmin: "#bb86fc37",
        purpleHover: "#BB86FC",
        BlueFF: "#1A49FF",
        //Custom colors
        maingreen: "#1e7147",
        mainyellow: "#ffd205",
        mainorange: "#f3b41e",
        mainblue: "#0072ba",
        mainNormalBlue: "#004769",
      },

      // custom
      backgroundImage: {},
      backgroundColor: {},
    },
  },
  plugins: [],
};
export default config;
