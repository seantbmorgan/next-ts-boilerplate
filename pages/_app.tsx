import React from 'react';
import '@styles/globals.css';
import type { AppProps } from 'next/app';

if (typeof window !== 'undefined' && process.env.NODE_ENV !== 'production') {
  const ReactDOM = require('react-dom'); // eslint-disable-line global-require, @typescript-eslint/no-var-requires
  const axe = require('@axe-core/react'); // eslint-disable-line import/no-extraneous-dependencies, global-require, @typescript-eslint/no-var-requires
  // const config = {} // https://github.com/dequelabs/axe-core-npm/tree/develop/packages/react
  axe(React, ReactDOM, 1000);
}

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
