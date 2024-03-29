import React from "react";
import { createCache, extractStyle, StyleProvider } from "@ant-design/cssinjs";
import Document, { Html, Head, Main, NextScript } from "next/document";

const MyDocument = () => (
  <Html lang="en">
    <Head>
      <link
        rel="shortcut icon"
        href="/magenta-icon.ico"
      />

      <link
        rel="preconnect"
        href="https://fonts.googleapis.com"
      />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="true"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Bitter:wght@300;500;700;900&display=swap"
        rel="stylesheet"
      />
    </Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default MyDocument;
