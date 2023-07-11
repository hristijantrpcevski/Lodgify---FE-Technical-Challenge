import type { AppProps } from "next/app";
import { ThemeProvider, DefaultTheme } from "styled-components";
import { createGlobalStyle } from "styled-components";
import { Inter } from "next/font/google";

import Layout from "@/layout/Layout";

const inter = Inter({ subsets: ["latin"] });

const theme: DefaultTheme = {
  colors: {
    primary: "#111",
    secondary: "#0070f3",
  },

  fonts: {
    inter: inter.style.fontFamily,
    body: inter.style.fontFamily,
  },
};

const GlobalStyle = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
  }

  * {
    box-sizing: border-box;
  }
`;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <GlobalStyle />
    </ThemeProvider>
  );
}
