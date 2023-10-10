import Script from 'next/script';
import { Analytics } from '@vercel/analytics/react';
import '../styles/globals.css'
import { FixedBackground } from './components/server/FixedBackground';

declare global {
  interface Window {
    dataLayer: unknown[];
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // https://developers.google.com/search/docs/crawling-indexing/special-tags
  // <meta name="google-site-verification" content="...">
  return (
    <html lang="ko">
      <head>
        <title>츄니즘 캐릭터 스토리 | Chunithm Character Story</title>
        <meta charSet='UTF-8' />
        <meta name='application-name' content='츄니즘 캐릭터 스토리 | Chunithm Character Story' />
        <meta name='author' content='©SEGA' />
        <meta name='creator' content='©SEGA' />
        <meta name='copyright' content='©SEGA' />
        <meta name='publisher' content='©ChuStory' />
        <meta name='description' content='츄니즘 캐릭터 스토리 | Chunithm Character Story | 츄니즘 스토리 | Chunithm Story' />
        <meta name='robots' content='츄니즘 캐릭터 스토리 | Chunithm Character Story | 츄니즘 스토리 | Chunithm Story' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='keywords' content='츄니즘, Chunithm, チュウニズム, チューニズム, SEGA, セガ, 리듬게임, Rhythm Game, 音ゲー, BMS,' />
        <meta name='rating' content='general' />
        <meta name='theme-color' content='#040E26' />
        <link rel='icon' href='/favicon.ico' />
      </head>
      <body suppressHydrationWarning={true}>
        {children}
        <FixedBackground />
        <Analytics />
      </body>
    </html>
  )
}
