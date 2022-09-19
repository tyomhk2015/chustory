import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import { useCharacter } from './hook/useCharacter'

const Home: NextPage = () => {

  const characterHook = useCharacter();


  return (
    <div className={styles['wrapper']}>
      <MetaHead />
      <main>
        <h1 className={styles['main__title']}>Chunithm Character Story</h1>
      </main>

      <footer className={styles['footer']}>

      </footer>
    </div>
  )
}

/**
 * 'Head' tag of HTML
 */
const MetaHead = () => {
  return (
    // https://developers.google.com/search/docs/crawling-indexing/special-tags
    // <meta name="google-site-verification" content="...">

    <Head>
      <title>Chunithm Character Story</title>
      <meta charSet="UTF-8"/>
      <meta name="application-name" content="Chunithm Character Story"/>
      <meta name="author" content="©SEGA"/>
      <meta name="copyright" content="©SEGA"/>
      <meta name="description" content="츄니즘 캐릭터 스토리 | Chunithm Character Story"/>
      <meta name="robots" content="츄니즘 캐릭터 스토리 | Chunithm Character Story"/>
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
      <meta name="keywords" content="츄니즘, Chunithm, チュウニズム, チューニズム, SEGA, セガ, 리듬게임, Rhythm Game, 音ゲー, BMS,"/>
      <meta name="rating" content="general"/>
      <link rel="icon" href="/favicon.ico"/>
    </Head>
  )
}

export default Home
