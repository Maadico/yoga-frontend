import React from "react";
import { Carousel } from "react-bootstrap";
import yoga1 from "../../assets/carousel/1.jpeg";
import yoga2 from "../../assets/carousel/2.jpeg";
import yoga3 from "../../assets/carousel/3.jpg";
import yoga4 from "../../assets/carousel/4.jpeg";

export default function YogaCarousel() {
  return (
    <Carousel indicators controls fade className="yoga-carousel">
      <Carousel.Item>
        <img className="carousel-image" src={yoga1} alt="First slide" />
        <Carousel.Caption>
          <h3>Experience Peace Within</h3>
          <p>Connect with your inner self through yoga.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className="carousel-image" src={yoga2} alt="Second slide" />
        <Carousel.Caption>
          <h3>Strengthen Your Body</h3>
          <p>Discover strength and flexibility with yoga.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className="carousel-image" src={yoga3} alt="Third slide" />
        <Carousel.Caption>
          <h3>Find Balance</h3>
          <p>Harmonize your mind, body, and spirit through yoga practice.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className="carousel-image" src={yoga4} alt="Fourth slide" />
        <Carousel.Caption>
          <h3>Join Our Community</h3>
          <p>Connect with like-minded individuals on your yoga journey.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
