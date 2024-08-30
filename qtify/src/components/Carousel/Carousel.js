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
      <div className="swiperContainer">
        <Swiper
          navigation={true}
          modules={[Navigation]}
          slidesPerView={6}
          pagination={{ clickable: true }}
          breakpoints={{
            // breakepoint injection in swiperJS carousel
            320: {
              slidesPerView: 1, // 1 slide on small screens
              spaceBetween: 10,
            },
            // when window width is >= 768px
            500: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 3, // 2 slides on medium screens
              spaceBetween: 20,
            },
            // when window width is >= 1024px
            1024: {
              slidesPerView: 6, // 3 slides on large screens
              spaceBetween: 30,
            },
          }}
        >
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
      </div>
    </>
  );
}
export default Carousel;
