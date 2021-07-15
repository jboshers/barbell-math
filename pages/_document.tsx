/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import Document, {
  Html, Head, Main, NextScript,
} from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          {/* <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/water.css@2/out/water.css" /> */}
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300&family=Playfair+Display:ital,wght@0,600;1,600&display=swap" rel="stylesheet" />
          <link rel="stylesheet" href="https://unpkg.com/bamboo.css@1.3.7/dist/dark.min.css" />
          <script src="https://cdn.jsdelivr.net/combine/npm/prismjs@1.24.0,npm/prismjs@1.24.0/plugins/show-invisibles/prism-show-invisibles.min.js" />
        </Head>
        <body className="antialiased">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
