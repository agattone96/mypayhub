/* src/pages/_document.js */
  import Document, { Html, Head, Main, NextScript } from 'next/document';

  class MyDocument extends Document {
    render() {
      return (
        <Html lang="en">
          <Head>
            {/* Add any custom fonts, icons, or meta tags here */}
          </Head>
          <body>
            <Main />
            <NextScript />
          </body>
        </Html>
      );
    }
  }

  export default MyDocument;
  ```