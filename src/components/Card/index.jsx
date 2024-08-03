import styles from './Card.module.css';

export default function Card({ randomThing, title }) {
	return (
		<article className={styles.card} title={title}>
			<a href={randomThing} target="_blank" rel="noreferrer noopener">
				<img src={randomThing} alt="thumb" />
				<span>{title}</span>
			</a>
		</article>
	);
}
