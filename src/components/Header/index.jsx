import styles from './Header.module.css';

export default function Header() {
	return (
		<header className={styles.header}>
			<span className={styles.title}>RandomThings</span>
			<nav className={styles.nav}>
				<a className={styles.links} href="#">
					Home
				</a>
				<a className={styles.links} href="#">
					See Random Things
				</a>
			</nav>
		</header>
	);
}
