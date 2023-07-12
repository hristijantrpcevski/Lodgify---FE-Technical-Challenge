import { DefaultTheme } from "styled-components";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
export const theme: DefaultTheme = {
  colors: {
    white: "#fff",

    green100: "#c0d3d0",
    green200: "#04b494",

    gray50: "#ebebeb", //* body background color
    gray100: "#dddddd", //* Groups border
    gray200: "#b2b2b2", //* border color
    gray300: "#7c7c7c", //* Text color
    gray400: "#404040", //* Title Color
  },

  fonts: {
    inter: inter.style.fontFamily,
    body: inter.style.fontFamily,
  },
};
