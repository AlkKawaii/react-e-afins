import { useParams } from 'react-router-dom';
import Container from '../../components/Container';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import db from '../../database/db.json';
import styles from './Random.module.css';
import NotFound from '../NotFound';
import { useEffect, useState } from 'react';

export default function Random() {
	const [text, setText] = useState();
	const params = useParams();
	const randomThing = db.find((element) => element.id === +params.id);
	if (!randomThing) return <NotFound />;

	useEffect(() => {
		fetch(
			`https://hipsum.co/api/?type=hipster-centric&paras=${
				Math.floor(Math.random() * 5) + 6
			}&start-with-lorem=true`
		)
			.then((response) => response.json())
			.then((data) => {
				setText(data.map((element, index) => <p key={index}>{element}</p>));
			})
			.catch((err) => console.error(err));
	}, [params]);
	return (
		<>
			<Header />
			<div className={styles.imgContainer}>
				<img
					src={`https://picsum.photos/1280/720?random=${Math.random()}`}
					alt="imagem aleatória"
					className={styles.banner}
				/>
			</div>
			<Container>
				<h1>{randomThing.title}</h1>
				<section className={styles.sect}>{text}</section>
			</Container>
			<Footer />
		</>
	);
}
