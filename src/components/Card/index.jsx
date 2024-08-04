import { Link } from 'react-router-dom';
import styles from './Card.module.css';

export default function Card({ randomThing, element }) {
	return (
		<article className={styles.card} title={element.title}>
			<Link
				to={`/random/${element.id}`}
				target="_blank"
				rel="noreferrer noopener">
				<img src={randomThing} alt="thumb" />
				<span>{element.title}</span>
			</Link>
		</article>
	);
}
