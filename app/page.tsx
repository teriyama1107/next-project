import styles from './page.module.css'

export default function Home () {
  return (
    <div>
      <h1 className={styles.title}>これはH1のテストです</h1>
      <p className={styles.description}>これはpタグのテストです</p>
    </div>
  )
}