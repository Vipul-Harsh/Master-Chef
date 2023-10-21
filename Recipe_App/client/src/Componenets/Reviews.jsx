import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "swiper/css";
import "./NavBar.css"
const Reviews = () => {
  return (
<>
<div className="clients">
<h1>...... WHAT OUR CLIENT SAYS ......</h1>
</div>
    <div className="review">
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="https://th.bing.com/th/id/OIP.eHetRaw4ztnnn15Z0anDuAHaHa?pid=ImgDet&rs=1" />
            <Card.Body>
              <Card.Title className="ali">JHON DOE</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              
            </Card.Body>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="https://th.bing.com/th/id/OIP.eHetRaw4ztnnn15Z0anDuAHaHa?pid=ImgDet&rs=1" />
            <Card.Body>
              <Card.Title className="ali">JANE DOE</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
             
            </Card.Body>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="https://th.bing.com/th/id/OIP.eHetRaw4ztnnn15Z0anDuAHaHa?pid=ImgDet&rs=1" />
            <Card.Body>
              <Card.Title className="ali">JHON DOE</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
             
            </Card.Body>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="https://th.bing.com/th/id/OIP.eHetRaw4ztnnn15Z0anDuAHaHa?pid=ImgDet&rs=1" />
            <Card.Body>
              <Card.Title className="ali">JHON DOE</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              
            </Card.Body>
          </Card>
        </SwiperSlide>
        ...
      </Swiper>
    </div>
</>
  );
};

export default Reviews;
