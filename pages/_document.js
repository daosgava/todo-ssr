// _document is only rendered on the server side and not on the client side
// Event handlers like onClick can't be added to this file

// ./pages/_document.js
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
            <link href="https://fonts.googleapis.com/css?family=Poppins&display=swap" rel="stylesheet"/>
        </Head>
        <style jsx global>{`
            :root {
              --badass: #BADA55;
              --gray: #b4b4b4;
              --dark: #303030;
            }
            
            html {
                box-sizing: border-box;
                font-family: 'Poppins', sans-serif;
                font-size: 12px;
            }

            *,
            *:before,
            *:after {
                box-sizing: inherit;
            }

            body {
                margin: 0;
                padding: 0;
            }
        `}</style>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;