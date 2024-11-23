import { Link } from 'react-router-dom';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <Link to='/' className={styles.title}>
        <span>RandomThings</span>
      </Link>
      <nav className={styles.nav}>
        <Link to='/' className={styles.links}>
          Home
        </Link>
        <Link to='/search' className={styles.links}>
          Pesquisar
        </Link>
        <Link to='/favorites' className={styles.links}>
          Favoritos
        </Link>
        <Link
          to={`/random/${Math.floor(Math.random() * 150) + 1}`}
          className={styles.links}>
          See Random Things
        </Link>
      </nav>
    </header>
  );
}
