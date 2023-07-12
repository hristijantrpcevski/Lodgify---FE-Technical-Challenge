import type { AppProps } from "next/app";
import { ThemeProvider, StyleSheetManager } from "styled-components";
import { createGlobalStyle } from "styled-components";
import isPropValid from "@emotion/is-prop-valid";

import Layout from "@/layout/Layout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import { theme } from "@/styles/theme";
import "@/icons";

const GlobalStyle = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    background-color: ${theme.colors.gray50};
    font-family: ${theme.fonts.body};
  }

  * {
    box-sizing: border-box;
  }
`;

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: { retry: false, refetchOnWindowFocus: false },
        },
      })
  );

  return (
    <QueryClientProvider client={queryClient}>
      <StyleSheetManager shouldForwardProp={isPropValid}>
        <ThemeProvider theme={theme}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
          <GlobalStyle />
        </ThemeProvider>
      </StyleSheetManager>
    </QueryClientProvider>
  );
}
