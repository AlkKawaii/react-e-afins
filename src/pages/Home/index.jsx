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
	return (
		<>
			<Header />
			<Banner image={'home'} />
			<Container>
				{categories.map((category) => {
					const items = db.filter((item) => item.category === category);
					return (
						<Category key={category} category={category}>
							{items.map((item) => (
								<Card
									key={item.id}
									title={item.title}
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
