import styles from './index.module.scss'
import icon from '@/assets/imgs/react.svg'

export default function Index() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>Hello World!</div>
      <img src={icon} alt="" />
    </div>
  )
}
