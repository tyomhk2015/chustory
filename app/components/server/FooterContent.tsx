import styles from '../../../styles/Home.module.scss';
import HitCounter from '../client/HitCounter';

export const FooterContent = async () => {
  return (
    <>
      <p>
        <strong>ChuStory</strong> is an unofficial&nbsp;
        <a
          href='https://chunithm.sega.jp/'
          target='_blank'
          rel='noopener noreferrer'
        >
          CHUNITHM
        </a>
        -fan-made site.
      </p>
      <p>
        Copyright of all illustrations and contents, related to CHUNITHM, are
        owned and reserved by&nbsp;
        <a
          href='https://www.sega.co.jp/'
          target='_blank'
          rel='noopener noreferrer'
        >
          ©SEGA
        </a>
      </p>
      <small className={styles['footer__copyright']}>2022 &copy;ChuStory</small>
      <small className={styles['footer__hit']}>
        <HitCounter />
      </small>
      <a className={styles['footer__contact']} href='mailto:chustory2022@gmail.com'>
        chustory2022@gmail.com
      </a>
      <div className={styles['footer__contact-icons']}>
        <a
          className={styles['footer__contact-x']}
          href='https://twitter.com/cheertrain2015'
          target='_blank'
          rel='noopener noreferrer'
        >
          <svg viewBox='0 0 24 24' aria-hidden='true'>
            <g>
              <path d='M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z'></path>
            </g>
          </svg>
        </a>
        <a
          className={styles['footer__contact-toss']}
          href={process.env.TOSS_LINK}
        >
          {/* eslint-disable @next/next/no-img-element */}
          <img src='./toss.webp' alt='TOSS ID' />
        </a>
        <a
          className={styles['footer__contact-paypal']}
          href={process.env.PAYPAL_LINK}
        >
          {/* eslint-disable @next/next/no-img-element */}
          <img src='./paypal-color.svg' alt='Paypal ID' />
        </a>
      </div>
    </>
  );
};
