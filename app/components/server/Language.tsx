import Link from 'next/link';
import styles from '../../../styles/Home.module.scss';
import { ILanguage } from '../../types';

export const Language = async (props: ILanguage) => {
  const { isKr } = props;

  return (
    <div className={styles['language']}>
      {isKr ? (
        <Link href='/en'>English 🇺🇸</Link>
      ) : (
        <Link href='../'>한국어 🇰🇷</Link>
      )}
    </div>
  );
};
