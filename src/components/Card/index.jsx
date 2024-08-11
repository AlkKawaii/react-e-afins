import { Link } from 'react-router-dom';
import styles from './Card.module.css';

export default function Card({ element }) {
	return (
		<article className={styles.card} title={element.title}>
			<Link to={`/random/${element.id}`} rel="noreferrer noopener">
				<img
					src={`https://picsum.photos/1280/720?random=${Math.random()}&blur`}
					alt="thumb"
				/>
				<span>{element.title}</span>
			</Link>
		</article>
	);
}
