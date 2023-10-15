import Link from 'next/link'
import styles from './Header.module.scss'

const Header = () => {
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.navList}>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/products">Products</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header