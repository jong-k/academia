import type { AppProps } from "next/app";
import Head from "next/head";
import { AuthProvider } from "context/AuthContext";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <Head>
        <link rel="shortcut icon" href="/images/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </AuthProvider>
  );
}
