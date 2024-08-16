import { Swiper } from "swiper/react";
import { Mousewheel, FreeMode } from "swiper/modules";
import "./Carousel.css";
import "swiper/css";
import "swiper/css/navigation";

export default function Carousel({ children }) {
  return (
    <div className="carousel">
      <Swiper
        mousewheel={true}
        freeMode={true}
        modules={[Mousewheel, FreeMode]}
        direction="horizontal"
        loop={true}
        grabCursor={true}
        spaceBetween={100}
        slidesPerView={5.5}
      >
        {children}
      </Swiper>
    </div>
  );
}
