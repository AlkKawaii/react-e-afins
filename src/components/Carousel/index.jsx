import { Swiper } from 'swiper/react';
import { Navigation, Mousewheel, FreeMode } from 'swiper/modules';
import './Carousel.css';
import 'swiper/css';
import 'swiper/css/navigation';

export default function Carousel({ children }) {
	return (
		<div className="carousel">
			<Swiper
				navigation={true}
				mousewheel={true}
				freeMode={true}
				modules={[Navigation, Mousewheel, FreeMode]}
				direction="horizontal"
				loop={true}
				grabCursor={true}
				spaceBetween={3}
				slidesPerView={4.85}>
				{children}
			</Swiper>
		</div>
	);
}
