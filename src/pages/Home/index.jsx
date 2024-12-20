import Banner from '../../components/Banner';
import Card from '../../components/Card';
import Category from '../../components/Category';
import Container from '../../components/Container';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Carousel from '../../components/Carousel';
import db from '../../database/db.json';
import { SwiperSlide } from 'swiper/react';

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

	return (
		<>
			<Header />
			<Banner image={'home'} />
			<Container>
				{categories.map((category) => {
					const items = db.filter((item) => item.category === category);
					return (
						<Category key={category} category={category}>
							<Carousel>
								{items.map((item) => (
									<SwiperSlide key={item.id}>
										<Card key={item.id} element={item} />
									</SwiperSlide>
								))}
							</Carousel>
						</Category>
					);
				})}
			</Container>
			<Footer />
		</>
	);
}
