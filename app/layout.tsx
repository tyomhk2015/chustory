import { Analytics } from '@vercel/analytics/react';
import '../styles/globals.css';
import { FixedBackground } from './components/server/FixedBackground';
import Script from 'next/script';

declare global {
  interface Window {
    dataLayer: unknown[];
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // https://developers.google.com/search/docs/crawling-indexing/special-tags
  // <meta name="google-site-verification" content="...">
  return (
    <html lang='ko'>
      <head>
        <title>Chunithm Character Story | 츄니즘 캐릭터 스토리</title>
        <meta charSet='UTF-8' />
        <meta
          name='application-name'
          content='Chunithm Character Story | 츄니즘 캐릭터 스토리'
        />
        <meta name='author' content='©SEGA' />
        <meta name='creator' content='©SEGA' />
        <meta name='copyright' content='©SEGA' />
        <meta name='publisher' content='©ChuStory' />
        <meta
          name='description'
          content='츄니즘 캐릭터 스토리 | Chunithm Character Story | 츄니즘 스토리 | Chunithm Story'
        />
        <meta name='robots' content='index, follow' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta
          name='keywords'
          content='츄니즘, Chunithm, チュウニズム, チューニズム, 세가, SEGA, セガ, 리듬게임, Rhythm Game, 音ゲー, BMS, 스토리, Story, ストーリー, 캐릭터, Character, キャラクター、キャラ―'
        />
        <meta name='rating' content='general' />
        <meta name='theme-color' content='#040E26' />
        <meta name="google-adsense-account" content={process.env.ADSENSE_ID} />
        <link rel='icon' href='/favicon.ico' />
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GTAG_ID}`}
          strategy='afterInteractive'
        />
        <Script id='google-analytics' strategy='afterInteractive'>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${process.env.GTAG_ID}');
          `}
        </Script>
        <script async src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.ADSENSE_ID}`} crossOrigin="anonymous"></script>
      </head>
      <body suppressHydrationWarning={true}>
        {children}
        <FixedBackground />
        <Analytics />
      </body>
    </html>
  );
}
