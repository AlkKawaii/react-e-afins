import { useState } from 'react';
import Banner from '../../components/Banner';
import Card from '../../components/Card';
import Category from '../../components/Category';
import Container from '../../components/Container';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import db from '../../database/db.json';

export default function Home() {
	const categories = [
		'Astronomia',
		'Brinquedos',
		'Ciência',
		'Fantasia',
		'Gastronomia',
		'Matemática',
		'Moda',
		'Tecnologia',
	];

	function getRandomPhoto() {
		return `https://picsum.photos/1280/720?random=${Math.random()}&blur`;
	}
	// const [nome, setNome] = useState('');

	// function aoDigitar(e) {
	// 	setNome(e.target.value);
	// }

	return (
		<>
			<Header />
			<Banner image={'home'} />
			<Container>
				{/* <input type="text" placeholder="Nome" onChange={aoDigitar} autoFocus/>
				<h2>{nome}</h2> */}

				{categories.map((category) => {
					const items = db.filter((item) => item.category === category);
					return (
						<Category key={category} category={category}>
							{items.map((item) => (
								<Card
									key={item.id}
									element={item}
									randomThing={getRandomPhoto()}
								/>
							))}
						</Category>
					);
				})}
			</Container>
			<Footer />
		</>
	);
}