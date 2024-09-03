import styles from './page.module.css'
import Image from 'next/image' //画像の読み込みにはImageコンポーネントを使用して、画像の最適化を行う

export default function Home () {
  return (
    <section className={styles.top}>
      <div>
        <h1 className={styles.title}>テクノロジーの力で世界を変える</h1>
        <p className={styles.description}>
          私たちは市場をリードしているグローバルテックカンパニーです。
        </p>
      </div>
      <Image
        className={styles.bgimg}
        src="/img-mv.jpg"
        alt=""
        width={4000}
        height={1200}
        />
    </section>
  )
}