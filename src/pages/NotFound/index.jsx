import styles from './NotFound.module.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function NotFound() {
	return (
		<>
			<Header />
			<section className={styles.container}>
				<h2>Opa, isso aqui não foi encontrado!</h2>
				<span className={styles.sadFace}> :( </span>
			</section>
			<Footer />
		</>
	);
}
