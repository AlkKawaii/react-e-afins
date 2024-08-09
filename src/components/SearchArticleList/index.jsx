import styles from './SearchArticleList.module.css';
import ArticleList from '../ArticleList';
import { useState } from 'react';

export default function SearchArticleList({ articles }) {
	const [searchText, setSearchText] = useState('');

	const foundArticles = articles.filter(
		(article) =>
			article.category.toLowerCase().includes(searchText.toLowerCase()) ||
			article.title.toLowerCase().includes(searchText.toLowerCase())
	);

	return (
		<section className={styles.container}>
			<label htmlFor="search">Pesquisar</label>
			<input
				type="search"
				name="search"
				id="search"
				placeholder="Digite aqui"
				onChange={(e) => setSearchText(e.target.value)}
			/>
			<ArticleList articles={foundArticles} emptyHeading={'Nada encontrado :('} />
		</section>
	);
}
