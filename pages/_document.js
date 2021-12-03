import Document, { Head, Html, Main, NextScript } from "next/document";
export default class RootDocument extends Document {
  // nextjs 에서 index.html의 역할
  // _document => _app => index.js
  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <meta name="description" content="Dev.log" />
          <meta
            name="keywords"
            content="blog,react,antd,webpack,css,javascript"
          />
          <link rel="manifest" href="/static/manifest.json" />
          <link rel="shortcut icon" href="/static/favicon.ico" />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/earlyaccess/notosanskr.css"
          />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/3.0.1/github-markdown.min.css"
          />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.15.6/styles/railscasts.min.css"
          />

          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Smooch&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
