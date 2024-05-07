import React from "react";
import { Row, Col } from "react-bootstrap";
import "./Gallery.css";
import Image1 from "../../assets/gallery/2.jpg";
import Image2 from "../../assets/gallery/3.jpg";
import Image3 from "../../assets/gallery/4.jpg";
import Image4 from "../../assets/gallery/5.jpg";
import Image5 from "../../assets/gallery/6.jpg";
import Image6 from "../../assets/gallery/7.jpg";
import Image8 from "../../assets/gallery/9.jpg";

export default function Gallery() {
  return (
    <div className="gallery-section" id="gallery">
      <div className="row aboutSubheading">
        <h1>
          Our <strong>Gallery</strong>
        </h1>
      </div>
      <Row className="gallery-row">
        <Col lg={4} md={12} className="mb-4 mb-lg-0">
          <div className="image-container">
            <img
              src={Image1}
              className="w-100 rounded"
              alt="Boat on Calm Water"
            />
          </div>
          <div className="image-container">
            <img
              src={Image3}
              className="w-100 rounded"
              alt="Wintry Mountain Landscape"
            />
          </div>
        </Col>

        <Col lg={4} className="mb-4 mb-lg-0">
          <div className="image-container">
            <img
              src={Image4}
              className="w-100 rounded"
              alt="Mountains in the Clouds"
            />
          </div>
          <div className="image-container">
            <img
              src={Image2}
              className="w-100 rounded"
              alt="Boat on Calm Water"
            />
          </div>
        </Col>

        <Col lg={4} className="mb-4 mb-lg-0">
          <div className="image-container">
            <img src={Image6} className="w-100 rounded" alt="Waves at Sea" />
          </div>
          <div className="image-container">
            <img
              src={Image5}
              className="w-100 rounded"
              alt="Yosemite National Park"
            />
          </div>
          <div className="image-container">
            <img
              src={Image8}
              className="w-100 rounded"
              alt="Yosemite Natinal Park"
            />
          </div>
        </Col>
      </Row>
    </div>
  );
}
