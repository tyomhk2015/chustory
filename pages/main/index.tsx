import type { NextPage } from 'next'
import styles from './Main.module.scss'

const Main: NextPage = () => {
  return (
    <h1 className={styles['main__page']}>Main</h1>
  )
}

export default Main;