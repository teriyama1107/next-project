import styles from './index.module.css';

type Proprs = {
  href: string;
  chilren: React.ReactNode;
}

export default function ButtonLink({href, children}: Proprs) {
  return (
    <a href={href} className={styles.button}>
      {children}
    </a>
  )
}