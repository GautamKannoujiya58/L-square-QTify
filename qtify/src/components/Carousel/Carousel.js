import { Swiper, SwiperSlide } from "swiper/react";
import AlbumCard from "../AlbumCard/AlbumCard";
import "./Carousel.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";

function Carousel(props) {
  console.log("Album in Carousel >>>", props.albums);
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} slidesPerView={6}>
        {props.albums.map((album) => (
          <SwiperSlide key={album.id}>
            {
              <AlbumCard
                albumImage={album.image}
                title={album.title}
                follows={album.follows}
                likes={album.likes}
              />
            }
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
export default Carousel;
