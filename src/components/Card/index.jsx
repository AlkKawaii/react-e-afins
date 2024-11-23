import { Link } from 'react-router-dom';
import styles from './Card.module.css';
import favOut from './heartOutline.svg';
import { useFavoriteContext } from '../../hooks/useFavoriteContext';
// import favFil from './heartFilled.svg';

export default function Card({ element }) {
    const [favorites, addFavorite] = useFavoriteContext();
    return (
        <article className={styles.card} title={element.title}>
            <Link to={`/random/${element.id}`} rel='noreferrer noopener'>
                <img
                    src={`https://picsum.photos/1280/720?random=${Math.random()}&blur`}
                    alt='thumb'
                    className={styles.cape}
                />
                <span>{element.title}</span>
            </Link>
            <figure className={styles.icon}>
                <img
                    src={favOut}
                    alt='Icon'
                    onClick={() => addFavorite(element)}
                />
            </figure>
        </article>
    );
}
