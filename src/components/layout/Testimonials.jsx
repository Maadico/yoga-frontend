import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./Testimonials.css";
import Image1 from "../../assets/testimonials/1.jpeg";
import Image2 from "../../assets/testimonials/2.jpg";
import Image3 from "../../assets/testimonials/3.png";
import Image4 from "../../assets/testimonials/4.png";
import Image5 from "../../assets/testimonials/5.png";
const patients = [
  {
    message:
      "Maadico's personalized food and yoga sessions helped me get stronger, lose weight, and feel better. Now, I can stand without pain, thankful for their clear guidance in improving my health.",
    name: "Anu Gupta",
    image: Image1,
  },
  {
    message:
      "Your morning yoga classes have boosted my energy and strength. Since starting, I've lost 4.5 kgs in a month, feeling more energetic and productive throughout the day. Thank you, sir.",
    name: "Shikha Sherawat",
    image: Image2,
  },
  {
    message:
      "Thankful for today's online yoga class; felt much lighter and relaxed afterward. Your help made it work well. Enjoyed feeling refreshed and focused. Thanks for the great session.",
    name: "Lakshya Arora",
    image: Image4,
  },
  {
    message:
      "Before joining Maadico, I couldn't stand for long and felt weak. Their yoga and diet helped me get stronger; I've lost weight and can stand without pain. Grateful for their help in improving my health.",
    name: "Shristhi Jain",
    image: Image3,
  },
  {
    message:
      "Maadico's sessions made a big difference; I felt lighter and more energetic. Their easy-to-follow guidance helped me regain strength and lose weight. Grateful for their support in my health journey.",
    name: "Jyoti Thakur",
    image: Image5,
  },
  {
    message:
      "Thanks to Maadico, I feel revitalized after each session. Their simple yet effective approach to yoga and diet has boosted my energy and overall well-being. Highly recommend their services!",
    name: "Supriya",
    image: Image3,
  },
];

export default class Testimonials extends Component {
  render() {
    return (
      <div>
        <div className="row aboutSubheading">
          <h3>What people had to say about us</h3>
        </div>
        <Carousel
          showArrows={true}
          infiniteLoop={true}
          showThumbs={false}
          showStatus={false}
          autoPlay={true}
          interval={6100}
        >
          {patients.map((patient, index) => (
            <div key={index}>
              <img alt={patient.name} src={patient.image} />
              <div className="myCarousel">
                <h3>{patient.name}</h3>
                <p>{patient.message}</p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    );
  }
}
