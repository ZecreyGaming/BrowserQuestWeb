import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import store from "redux/store";
import Head from "next/head";
import { ApolloProvider } from "@apollo/client";
import { client } from "apollo";
import Wasm from "components/wasm";
import { useEffect, useState } from "react";
import { nftsdk } from "utils/nftsdk";

function MyApp({ Component, pageProps }: AppProps) {
  const [hold, setHold] = useState(true);
  useEffect(() => {
    (window as any).nftsdk = nftsdk;
    setTimeout(() => {
      setHold(false);
    }, 1000);
  }, []);

  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <Head>
          <title>Legend Game Demo</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="charset" content="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="description" content="Legend Game Demo" />
          <link rel="shortcut icon" href="/favicon.svg"></link>
        </Head>
        <Wasm>{hold ? null : <Component {...pageProps} />}</Wasm>
      </Provider>
    </ApolloProvider>
  );
}

export default MyApp;
