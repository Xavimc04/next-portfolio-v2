import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <title>Xavier Morell | 2023 Portfolio</title>
                <link rel="icon" type="image/x-icon" href="https://talently.tech/blog/wp-content/uploads/2023/01/sueldo-de-un-programador.png" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Icons" />
            </Head>

            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
