import '../styles/globals.css';
import type { AppProps } from 'next/app';
import AppLayout from './Components/AppLayout';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps ) {
    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <meta name="description" content="개발새발" />
                <title>개발새발</title>
            </Head>
            <AppLayout>
                <Component {...pageProps}></Component>
            </AppLayout>
        </>
        
    )
}

export default MyApp;
