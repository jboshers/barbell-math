/* eslint-disable react/jsx-props-no-spreading */
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';
import Head from 'next/head';
import { defaultSeo } from '../next-seo.config';

function MyApp({ Component, pageProps }: AppProps):any {
  return (
    <>
      <DefaultSeo {...defaultSeo} />
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
