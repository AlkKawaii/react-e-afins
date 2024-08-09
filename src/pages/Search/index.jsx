import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Container from '../../components/Container';
import SearchArticleList from '../../components/SearchArticleList';
import db from '../../database/db.json';
import styles from './Search.module.css';

export default function Search() {
	return (
		<>
			<Header />
			<Container>
				<section className={styles.search}>
					<SearchArticleList articles={db} />
				</section>
			</Container>
			<Footer />
		</>
	);
}
