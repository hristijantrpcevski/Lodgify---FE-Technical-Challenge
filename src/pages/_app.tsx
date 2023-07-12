import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { createGlobalStyle } from "styled-components";

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
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
        <GlobalStyle />
      </ThemeProvider>
    </QueryClientProvider>
  );
}
