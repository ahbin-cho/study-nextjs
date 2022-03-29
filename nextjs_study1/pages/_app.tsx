// import '../styles/globals.css';
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Hydrate } from 'react-query/hydration'
import type { AppProps } from 'next/app';
import AppLayout from './Components/AppLayout';
import Head from 'next/head';

import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';
import { GlobalStyle } from '../styles/global-styles';

function MyApp({ Component, pageProps }: AppProps ) {
    const queryClientRef = React.useRef<QueryClient>();

    if ( !queryClientRef.current ) {
        queryClientRef.current = new QueryClient()
    }

      
    return (
        <>
            <QueryClientProvider client={queryClientRef.current}>
                <Hydrate state={pageProps.dehydratedState}>
                    <ThemeProvider theme={ theme }>
                        <GlobalStyle/>
                        <Head>
                            <meta charSet="utf-8" />
                            <meta name="description" content="개발새발" />
                            <title>개발새발</title>
                        </Head>
                        <AppLayout>
                            <Component {...pageProps}></Component>
                        </AppLayout>
                    </ThemeProvider>
                </Hydrate>
            </QueryClientProvider>
           
        </>
        
    )
}

export default MyApp;
