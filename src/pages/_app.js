import Head from 'next/head';
import Header from '../components/Header';
import GlobalStyles from '../styles/global';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="favicon-32x32.png"
        />
        <meta
          name="description"
          content="Our multifunctional collection blends design and function to suit your individual taste. Make each room unique"
        />
        <title>Frontend Mentor | Room homepage</title>
      </Head>
      <GlobalStyles />
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
