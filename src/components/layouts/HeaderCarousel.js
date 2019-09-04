import React from "react";
// import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css";

// import Carousel from "nuka-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
import iphoneImg from "../../assets/iphone2.webp";
import macbookImg from "../../assets/mac1.jpg";
import iMacImg from "../../assets/imac1.jpeg";
import iwatchImg from "../../assets/iwatch1.jpeg";

const HeaderCarousel = () => {
  return (
    <Carousel showThumbs={false}>
      <div>
        <img src={iphoneImg} alt="" />
        <p>Iphone X... </p>
      </div>
      <div>
        <img src={iphoneImg} alt="" />
        <p>Iphone X... </p>
      </div>
      <div>
        <img src={iphoneImg} alt="" />
        <p>Iphone X... </p>
      </div>
    </Carousel>
  );
};

export default HeaderCarousel;

// const HeaderCarousel = () => {
//   return (
//     <Carousel>
//       <div>
//         <img src={iphoneImg} alt="" />
//         <p>Iphone X... </p>
//       </div>
//       <div>
//         <img src={iphoneImg} alt="" />
//         <p>Iphone X... </p>
//       </div>
//       <div>
//         <img src={iphoneImg} alt="" />
//         <p>Iphone X... </p>
//       </div>
//     </Carousel>
//   );
// };

// export default HeaderCarousel;
