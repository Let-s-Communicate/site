import type { NextPage, NextPageContext } from 'next';
import Head from 'next/head'
import Link from 'next/link'
import dictionary from '../contentful/dictionary';

import service from '../contentful/service';
import { Locale } from '../defs/i18n';

interface Props {
    locale: Locale,
    services: [
        {
            name: 'string',
            description: 'string',
            slug: 'string',
        }
    ];
}

export const getStaticProps = async (context: NextPageContext) => {
    const locale = context.locale;
    const services = await service.getAll(locale);

    return {
        props: { services, locale },
        revalidate: 10
    };
}

const Home: NextPage<Props> = ({ services, locale }) =>
    <>
        <Head>
            <title>Let&apos;s Communicate</title>
            <meta name="description" content="Generated by Let's Communicate" />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <header>
            <div>
                <h4>{dictionary(locale, 'locale')} - {locale}</h4>
                <Link href="/" locale="en-US"><a>en</a></Link> | <Link href="/" locale="pt-BR"><a>pt</a></Link>
            </div>
        </header>

        <main>
            <h1>Welcome to Let&apos;s Communicate</h1>
            <h4>Services</h4>

            {services.map((service, i) => (
                <div key={i}>
                    <p>{service.name}</p>
                    <p>{service.description}</p>
                </div>
            ))}
        </main>

        <footer>footer</footer>
    </>

export default Home;