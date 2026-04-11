import type { Metadata } from 'next'
import './globals.css'
import Script from 'next/script'

export const metadata: Metadata = {
    title: 'Webgrade - IT Yechimlar, Veb-sayt va Mobil Ilova Yaratish',
    description: 'Webgrade - zamonaviy veb-saytlar, CRM tizimlar, mobil ilovalar va Telegram botlar yaratish. IT yechimlar va texnik qo\'llab-quvvatlash.',
    keywords: 'veb-sayt yaratish, CRM tizim, mobil ilova, Telegram bot, IT xizmatlar, web development, Uzbekistan',
    authors: [{ name: 'Webgrade' }],
    openGraph: {
        type: 'website',
        url: 'https://www.webgrade.uz/',
        title: 'Webgrade - IT Yechimlar va Web Development',
        description: 'Zamonaviy veb-saytlar, CRM tizimlar, mobil ilovalar va Telegram botlar yaratish xizmatları.',
        images: [{
            url: 'https://www.webgrade.uz/webgrade.png',
            width: 1080,
            height: 1080,
            type: 'image/png',
        }],
        siteName: 'Webgrade',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Webgrade - IT Yechimlar va Web Development',
        description: 'Zamonaviy veb-saytlar, CRM tizimlar, mobil ilovalar va Telegram botlar yaratish xizmatları.',
        images: ['https://www.webgrade.uz/webgrade.png'],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    metadataBase: new URL('https://www.webgrade.uz'),
    verification: {
        google: 'your-google-verification-code',
    },
    alternates: {
        canonical: 'https://www.webgrade.uz/',
    },
    other: {
        'language': 'Uzbek',
    },
    manifest: '/manifest.json',
    icons: {
        icon: [
            { url: '/favicon.svg', type: 'image/svg+xml' },
            { url: '/favicon-32x32.svg', type: 'image/svg+xml', sizes: '32x32' },
        ],
        apple: '/favicon.svg',
    },
    themeColor: '#000000',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="uz">
            <head>
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <Script id="gtm" strategy="afterInteractive">
                    {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-PLS4PP63');`}
                </Script>
                <Script id="clarity" strategy="afterInteractive">
                    {`(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
          t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
          y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "v73wi3fdpo");`}
                </Script>
            </head>
            <body>
                <noscript>
                    <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PLS4PP63" height="0" width="0" style={{ display: 'none', visibility: 'hidden' }}></iframe>
                </noscript>
                {children}
            </body>
        </html>
    )
}
