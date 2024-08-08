import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Container from '../../components/Container';
import styles from './Search.module.css';

export default function Search() {
	return (
		<>
			<Header />
			<Container>
				<section className={styles.search}>
					<label htmlFor="search">Pesquise aqui!</label>
					<input type="search" name="search" id="search" placeholder='Digite algo aqui' title='Barra de Pesquisa'/>
				</section>
			</Container>
			<Footer />
		</>
	);
}
