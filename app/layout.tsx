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
  return (
    <html lang='ko'>
      <head>
        <meta name='author' content='©SEGA' />
        <meta name='creator' content='©SEGA' />
        <meta name='copyright' content='©SEGA' />
        <meta name='publisher' content='©ChuStory' />
        <meta name='robots' content='index, follow' />
        <meta
          name='keywords'
          content='츄니즘, Chunithm, チュウニズム, チューニズム, 주식회사 SEGA, SEGA, セガ, 리듬게임, Rhythm Game, 音ゲー, BMS, 스토리, Story, ストーリー, 캐릭터, Character, キャラクター、キャラ―'
        />
        <meta name='rating' content='general' />
        <meta name='theme-color' content='#FDB7CA' />
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
      </head>
      <body suppressHydrationWarning={true}>
        {children}
        <FixedBackground />
        <Analytics />
      </body>
    </html>
  );
}
