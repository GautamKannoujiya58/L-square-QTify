// // import React, { useRef, useState } from "react";
// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";
// import Grid from "@mui/system/Unstable_Grid/Grid";
// import AlbumCard from "../AlbumCard/AlbumCard";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/navigation";

// // import Styles from "./Carousel.module.css";

// // import required modules
// import { Navigation } from "swiper/modules";

// function Carousel(props) {
//   return (
//     <>
//       <Grid container spacing={4}>
//         <Swiper
//           navigation={true}
//           modules={[Navigation]}
//           // spaceBetween={50}
//           slidesPerView={6}
//           className="mySwiper"
//         >
//           {props.topAlbums.map((album) => (
//             <SwiperSlide
//               style={{
//                 color: "white",
//                 margin: "2px",
//                 padding: "4px",
//                 paddingBottom: "10px",
//               }}
//             >
//               {
//                 <Grid key={album.id} item lg={2}>
//                   <AlbumCard
//                     albumImage={album.image}
//                     title={album.title}
//                     follows={album.follows}
//                   />
//                 </Grid>
//               }
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </Grid>
//     </>
//   );
// }
// export default Carousel;
import { Swiper, SwiperSlide } from "swiper/react";
import AlbumCard from "../AlbumCard/AlbumCard";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";

function Carousel(props) {
  console.log("Album in Carousel >>>", props.albums);
  return (
    <>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        slidesPerView={6}
        className="mySwiper"
      >
        {props.albums.map((album) => (
          <SwiperSlide key={album.id}>
            {
              <AlbumCard
                albumImage={album.image}
                title={album.title}
                follows={album.follows}
              />
            }
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
export default Carousel;
