import React, { useEffect, useState } from "react"
import ReactStars from "react-rating-stars-component"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"
import imgg from "./logo192.png"

// Import Swiper styles
import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/pagination"
// import "swiper/Parallax"
// Icons
// Import required modules
import { Autoplay, FreeMode, Pagination,Parallax } from "swiper/modules"

export default function Slidingbar() {
  return (
    <div>
     <Swiper
          slidesPerView={1}
          spaceBetween={25}
          loop={true}
          freeMode={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Parallax, FreeMode,Pagination,Autoplay]}
          className="w-full "
        >
         <SwiperSlide><img src={imgg}/></SwiperSlide>
         <SwiperSlide><img src={imgg}/></SwiperSlide><SwiperSlide><img src={imgg}/></SwiperSlide><SwiperSlide><img src={imgg}/></SwiperSlide><SwiperSlide><img src={imgg}/></SwiperSlide><SwiperSlide><img src={imgg}/></SwiperSlide><SwiperSlide><img src={imgg}/></SwiperSlide>
        </Swiper>
    </div>
  )
}



// import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from './logo192.png';

// function Slidingbar() {
//   return (
//     <Carousel fade>
//       <Carousel.Item>
//         <ExampleCarouselImage  />
//         <Carousel.Caption>
//           <h3>First slide label</h3>
//           <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//         <ExampleCarouselImage />
//         <Carousel.Caption>
//           <h3>Second slide label</h3>
//           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//         <ExampleCarouselImage />
//         <Carousel.Caption>
//           <h3>Third slide label</h3>
//           <p>
//             Praesent commodo cursus magna, vel scelerisque nisl consectetur.
//           </p>
//         </Carousel.Caption>
//       </Carousel.Item>
//     </Carousel>
//   );
// }

// export default Slidingbar;