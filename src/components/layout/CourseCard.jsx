import React from "react";
import { Carousel } from "react-bootstrap";
import yoga1 from "../../assets/carousel/1.jpeg";
import yoga2 from "../../assets/carousel/2.jpeg";
import yoga3 from "../../assets/carousel/3.jpg";
import yoga4 from "../../assets/carousel/4.jpeg";

export default function YogaCarousel() {
  return (
    <Carousel indicators controls fade>
      <Carousel.Item>
        <img className="carousel-image" src={yoga1} alt="Yoga Slide 1" />
        <Carousel.Caption>
          <h3>Discover Inner Peace</h3>
          <p>Experience tranquility with our yoga sessions.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className="carousel-image" src={yoga2} alt="Yoga Slide 2" />
        <Carousel.Caption>
          <h3>Strengthen Body & Mind</h3>
          <p>Build strength and focus through yoga practice.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className="carousel-image" src={yoga3} alt="Yoga Slide 3" />
        <Carousel.Caption>
          <h3>Connect with Nature</h3>
          <p>Feel the harmony between body, mind, and nature.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className="carousel-image" src={yoga4} alt="Yoga Slide 4" />
        <Carousel.Caption>
          <h3>Find Balance</h3>
          <p>Discover balance and well-being through yoga.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
