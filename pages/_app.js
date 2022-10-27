import React from "react";
import '../styles/globals.css'
import {ThemeProvider} from '@mui/material/styles';
import {CacheProvider} from '@emotion/react';
import theme from '../src/theme';
import createEmotionCache from "../src/createEmotionCache";

const clientSideEmotionCache = createEmotionCache();

export default function App({Component, emotionCache = clientSideEmotionCache, pageProps: {session, ...pageProps}}) {


  return (
      <CacheProvider value={emotionCache}>
          <ThemeProvider theme={theme}>
              {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
              <Component {...pageProps} />
          </ThemeProvider>
      </CacheProvider>
  )
}
