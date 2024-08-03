import { Link } from 'react-router-dom';
import styles from './Header.module.css';

export default function Header() {
	return (
		<header className={styles.header}>
			<Link to="/" className={styles.title}>
				<span>RandomThings</span>
			</Link>
			<nav className={styles.nav}>
				<Link to="/" className={styles.links}>
					Home
				</Link>
				<Link to="/random" className={styles.links}>
					See Random Things
				</Link>
			</nav>
		</header>
	);
}
