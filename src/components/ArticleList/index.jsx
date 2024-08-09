import styles from './ArticleList.module.css';
import Card from '../Card';

export default function ArticleList({ articles, emptyHeading }) {
	const count = articles.length;
	let heading = emptyHeading;
	if (count > 0) {
		const noun = count > 1 ? 'artigos' : 'artigo';
		heading = `${count} ${noun}`;
	}

	const listOf = articles.map((article) => {
		return <Card key={article.id} element={article} />;
	})

	return (
		<>
			<h2>{heading}</h2>
			<section className={styles.articles}>
				{listOf}
			</section>
		</>
	);
}
