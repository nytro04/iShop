import React from "react";
import iphoneImg from "../../assets/iphone1.jpg";
import macbookImg from "../../assets/macbook3.jpg";
import iMacImg from "../../assets/imac.jpg";
import iwatchImg from "../../assets/iwatch4.jpg";
import { Carousel } from "react-bootstrap";

const CarouselSlider = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item className="header__carousel">
          <div className="carouselCont">
            <div className="ImgCont">
              <img className="d-block w-100" src={iphoneImg} alt="Ipone" />
            </div>
            <div className="TextCont"></div>
            {/* <Carousel.Caption>
              <h3>iPhones</h3>
              <p>Grab your latest and authentic iphones at affordable prices</p>
            </Carousel.Caption> */}
          </div>
        </Carousel.Item>
        <Carousel.Item className="header__carousel">
          <div className="carouselCont">
            <div className="ImgCont">
              <img className="d-block w-100" src={macbookImg} alt="MacBooks" />
            </div>
            <div className="TextCont"></div>
            {/* <Carousel.Caption>
              <h3>MacBooks</h3>
              <p>
                Grab your latest and authentic MacBooks at affordable prices
              </p>
            </Carousel.Caption> */}
          </div>
        </Carousel.Item>
        <Carousel.Item className="header__carousel">
          <div className="carouselCont">
            <div className="ImgCont">
              <img className="d-block w-100" src={iMacImg} alt="iMac" />
            </div>
            <div className="TextCont"></div>
            {/* <Carousel.Caption>
              <h3>iMac </h3>
              <p>Grab your latest and authentic iMacs at affordable prices</p>
            </Carousel.Caption> */}
          </div>
        </Carousel.Item>
        <Carousel.Item className="header__carousel">
          <div className="carouselCont">
            <div className="ImgCont">
              <img className="d-block w-100" src={iwatchImg} alt="iWatch" />
            </div>
            <div className="TextCont"></div>
            {/* <Carousel.Caption> */}
            {/* <h3>iWatch </h3>
              <p>
                Grab your latest and authentic iWatches at affordable prices
              </p> */}
            {/* <p>
                Grab your latest and authentic iWatches at affordable prices
              </p>
              <p>
                Grab your latest and authentic iWatches at affordable prices
              </p> */}
            {/* </Carousel.Caption> */}
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarouselSlider;
