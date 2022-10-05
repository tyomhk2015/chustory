import styles from '../styles/Home.module.scss';

/**
 * 'Footer' content
 */
 export const FooterContent: React.FC = () => {
  return (
    <>
      <p>
        <strong>ChuStory</strong> is an unofficial <a href="https://chunithm.sega.jp/" target="_blank" rel="noopener noreferrer">CHUNITHM</a>-fan-made site.
      </p>
      <p>
        Copyright of all illustrations and contents, related to CHUNITHM, are owned and reserved by <a href="https://www.sega.co.jp/"  target="_blank" rel="noopener noreferrer">©SEGA</a>
      </p>
      <small className={styles['footer__copyright']}>
        2022 &copy;ChuStory
      </small>
      <small className={styles['footer__contact']}>
        chustory2022@gmail.com
      </small>
    </>
  )
 }