import Link from 'next/link';
import styles from '../../../styles/Home.module.scss';
import { ILanguage } from '../../types';

export const Language = async (props: ILanguage) => {
  const { isKr } = props;

  return (
    <div className={styles['language']}>
      {isKr ? (
        <Link href='/en' prefetch={false}>English 🇺🇸</Link>
      ) : (
        <Link href='/' prefetch={false}>한국어 🇰🇷</Link>
      )}
    </div>
  );
};
