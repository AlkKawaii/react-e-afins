import styles from './Category.module.css';

export default function Category({ children, category }) {
	return (
		<section className={styles.category}>
			<h2>{category}</h2>
			<section>{children}</section>
		</section>
	);
}
