import styles from './NotFound.module.css';

export default function NotFound() {
	return (
		<section className={styles.container}>
            <h2>Opa, isso aqui não foi encontrado!</h2>
            <span> :( </span>
		</section>
	);
}
