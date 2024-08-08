import styles from './ArticleList.module.css';
import Card from '../Card';

export default function ArticleList({ articles, emptyHeading }) {
	return (
		<>
			<h2>{emptyHeading}</h2>
			<section className={styles.articles}>
				{articles.map((article) => {
					<Card key={article.id} element={article} />;
				})}
			</section>
		</>
	);
}
