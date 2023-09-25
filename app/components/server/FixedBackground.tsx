import { FC } from 'react';
import styles from '../../../styles/Home.module.scss';

export const FixedBackground: FC = async () => {
  return (
    <>
      <div className={styles['fixed-background']} />
      <div className={styles['fixed-background-mountain']} />
    </>
  );
};
