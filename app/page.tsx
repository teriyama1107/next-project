import styles from './page.module.css'
import Image from 'next/image' //画像の読み込みにはImageコンポーネントを使用して、画像の最適化を行う

type News ={
  id: string;
  title: string;
  category: {
    name: string;
  };
  publishedAt: string;
  createdAt: string;
};

const data: { contents: News[] } = {
    contents: [
      {
        id: "1",
        title: "テストニュース",
        category: {
          name: "テスト"
        },
        publishedAt: "2023/05/19",
        createdAt: "2023/05/19"
      },
      {
        id: "2",
        title: "テストニュース2",
        category: {
          name: "テスト"
        },
        publishedAt: "2023/05/20",
        createdAt: "2023/05/20"
      },
      {
        id: "3",
        title: "テストニュース3",
        category: {
          name: "テスト"
        },
        publishedAt: "2023/05/22",
        createdAt: "2023/05/22"
      }
    ]
  }

const sliceData = data.contents.slice(0, 2);

export default function Home () {
  return (
    <>
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
    <section className={styles.news}>
      <h2 className={styles.newsTitle}>News</h2>
      <ul>
        {/* 繰り返しにはmapメソッドを使用 keyには繰り返されるli要素に対して配列のどのアイテムを参照すべきか伝える　 */}
        {sliceData.map((article) => (
          <li key={article.id}>
            <div className={styles.link}>
              <Image
                className={styles.image}
                src="/no-image.png"
                alt=""
                width={1200}
                height={630}
              />
              <dl className={styles.content}>
                <dt className={styles.NewsItemTitle}>{article.title}</dt>
                <dd className={styles.meta}>
                  <span className={styles.tag}>{article.category.name}</span>
                  <span className={styles.date}>
                    <Image
                      src="/clock.svg"
                      alt=""
                      width={16}
                      height={16}
                      priority
                    />
                    {article.publishedAt}
                  </span>
                </dd>
              </dl>
          </div>
          </li>
        ))}
      </ul>
    </section>
    </>

  )
}