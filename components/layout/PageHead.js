import Head from 'next/head'

const PageHead = ({ headTitle }) => {
    return (
        <>
            <Head>
                <title>
                    {headTitle ? headTitle : "Digicod | Digital Agency React Nextjs Template"}
                </title>
                <link
                    href="https://fonts.googleapis.com/css2?family=Jost:wght@300;400;500;600;700;800;900&family=Kumbh+Sans:wght@300;400;500;600;700;800;900&display=swap"
                    rel="stylesheet"
                />
            </Head>
        </>
    )
}

export default PageHead