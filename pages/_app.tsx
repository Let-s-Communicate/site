import {  AppProps } from 'next/app';
import Head from 'next/head'
import Script from 'next/script';

import { AppProvider } from '../components/AppProvider';
import { Locale } from '../defs/i18n';

import Page from '../defs/page';

import '../styles/globals.css'
interface Props extends AppProps {
    pages: Page[];
}

function App({ Component, pageProps, router }: Props) {
    const page = pageProps?.page;
    const sitename = `Let's Communicate`;
    const origin = router.basePath;
    const sharedState = {
        router,
        locale: router.locale as Locale
    };
    
    return (
        <>
            <Head>
                <title>{sitename} | {page?.title}</title>

                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content={page?.description} />
                <meta name="keywords" content={page?.keywords} />

                <meta property="og:type" content="Website" />
                <meta property="og:url" content={origin} />
                <meta property="og:image:type" content="image/jpg" />
                <meta property="og:locale" content={(router.locale || '').replace('-', '_')} />
                <meta property="og:site_name" content={sitename} />
                <meta property="og:title" content={sitename} />
                <meta property="og:description" content={page?.description} />
                <meta property="og:image" content={page?.image?.url} />
                <meta property="og:image:width" content={String(page?.image.width)} />
                <meta property="og:image:height" content={String(page?.image.height)} />

                <link rel="icon" type="image/png" href="/image/favicon-16x16.png" sizes="16x16" />
                <link rel="icon" type="image/png" href="/image/favicon-32x32.png" sizes="32x32" />
                <link rel="icon" type="image/png" href="/image/favicon-96x96.png" sizes="96x96" />
                <link rel="icon" type="image/png" href="/image/favicon-128x128.png" sizes="128x128" />
                <link rel="icon" type="image/png" href="/image/favicon-196x196.png" sizes="196x196" />
            </Head>

            <Script
                async
                src="https://www.googletagmanager.com/gtag/js?id=UA-223896208-1"
                onLoad={() => {
                    window.dataLayer = window.dataLayer || [];
                    window.dataLayer.push(['js', new Date()]);
                    window.dataLayer.push(['config', 'UA-223896208-1']);
                }}
            />

            <AppProvider value={sharedState}>
                <Component {...pageProps} />
            </AppProvider>
        </>
    );
}
export default App;
    