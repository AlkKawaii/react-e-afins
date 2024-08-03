import Banner from '../../components/Banner';
import Container from '../../components/Container';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import styles from './Random.module.css';

export default function Random() {
	return (
		<>
			<Header />
			<Banner image={'random'} />
			<Container>
				<p>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus ipsam
					animi voluptates! Modi reprehenderit dolores quisquam est quam cum
					voluptate architecto placeat minima? Modi et voluptas blanditiis
					magnam, praesentium itaque. Inventore, iure possimus nam eum fugit
					nesciunt sunt libero delectus mollitia reprehenderit, cupiditate
					repudiandae ad alias ipsa, at voluptatum molestias debitis quibusdam
					natus! Vitae quam velit dignissimos, esse dolore ducimus?
				</p>
			</Container>
			<Footer />
		</>
	);
}
