import Link from 'next/link';
import styles from '../../../styles/Home.module.scss';
import { ILanguage } from '../../types';

export const Language = async (props: ILanguage) => {
  const { isKr } = props;

  return (
    <div className={styles['language']}>
      {isKr ? (
        <Link href='https://www.chustory.net/en'>English 🇺🇸</Link>
      ) : (
        <Link href='https://www.chustory.net/'>한국어 🇰🇷</Link>
      )}
    </div>
  );
};
