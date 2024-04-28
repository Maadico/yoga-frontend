import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./Testimonials.css";

const patients = [
  {
    message:
      "Maadico's personalized food and yoga sessions helped me get stronger, lose weight, and feel better. Now, I can stand without pain, thankful for their clear guidance in improving my health.",
    name: "Anu Gupta",
    image:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--0SCWkYwS--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/9dhr4cw2s0skgfig8qnw.png",
  },
  {
    message:
      "Your morning yoga classes have boosted my energy and strength. Since starting, I've lost 4.5 kgs in a month, feeling more energetic and productive throughout the day. Thank you, sir.",
    name: "Shikha Sherawat",
    image:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--0SCWkYwS--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/9dhr4cw2s0skgfig8qnw.png",
  },
  {
    message:
      "Thankful for today's online yoga class; felt much lighter and relaxed afterward. Your help made it work well. Enjoyed feeling refreshed and focused. Thanks for the great session.",
    name: "Lakshya Arora",
    image:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--0SCWkYwS--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/9dhr4cw2s0skgfig8qnw.png",
  },
  {
    message:
      "Before joining Maadico, I couldn't stand for long and felt weak. Their yoga and diet helped me get stronger; I've lost weight and can stand without pain. Grateful for their help in improving my health.",
    name: "Shristhi Jain",
    image:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--0SCWkYwS--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/9dhr4cw2s0skgfig8qnw.png",
  },
  {
    message:
      "Maadico's sessions made a big difference; I felt lighter and more energetic. Their easy-to-follow guidance helped me regain strength and lose weight. Grateful for their support in my health journey.",
    name: "Jyoti Thakur",
    image:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--0SCWkYwS--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/9dhr4cw2s0skgfig8qnw.png",
  },
  {
    message:
      "Thanks to Maadico, I feel revitalized after each session. Their simple yet effective approach to yoga and diet has boosted my energy and overall well-being. Highly recommend their services!",
    name: "Supriya",
    image:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--0SCWkYwS--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/9dhr4cw2s0skgfig8qnw.png",
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
