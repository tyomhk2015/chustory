import Head from 'next/head';
import Script from 'next/script';

/**
 * 'Head' tag of HTML
 */
export const MetaHead: React.FC<{gtag: string}> = ({gtag}) => {
  return (
    // https://developers.google.com/search/docs/crawling-indexing/special-tags
    // <meta name="google-site-verification" content="...">
    <>
      <Head>
        <title>Chunithm Character Story</title>
        <meta charSet='UTF-8' />
        <meta name='application-name' content='Chunithm Character Story' />
        <meta name='author' content='©SEGA' />
        <meta name='copyright' content='©SEGA' />
        <meta
          name='description'
          content='츄니즘 캐릭터 스토리 | Chunithm Character Story'
        />
        <meta
          name='robots'
          content='츄니즘 캐릭터 스토리 | Chunithm Character Story'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta
          name='keywords'
          content='츄니즘, Chunithm, チュウニズム, チューニズム, SEGA, セガ, 리듬게임, Rhythm Game, 音ゲー, BMS,'
        />
        <meta name='rating' content='general' />
        <meta name='theme-color' content='#7688d5' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${gtag}');
        `}
      </Script>
    </>
  );
};