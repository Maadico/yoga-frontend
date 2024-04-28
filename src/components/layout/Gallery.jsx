import React from "react";
import { Row, Col } from "react-bootstrap";
import "./Gallery.css";
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
              src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
              className="w-100 rounded"
              alt="Boat on Calm Water"
            />
          </div>
          <div className="image-container">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain1.webp"
              className="w-100 rounded"
              alt="Wintry Mountain Landscape"
            />
          </div>
        </Col>

        <Col lg={4} className="mb-4 mb-lg-0">
          <div className="image-container">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain2.webp"
              className="w-100 rounded"
              alt="Mountains in the Clouds"
            />
          </div>
          <div className="image-container">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
              className="w-100 rounded"
              alt="Boat on Calm Water"
            />
          </div>
        </Col>

        <Col lg={4} className="mb-4 mb-lg-0">
          <div className="image-container">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(18).webp"
              className="w-100 rounded"
              alt="Waves at Sea"
            />
          </div>
          <div className="image-container">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain3.webp"
              className="w-100 rounded"
              alt="Yosemite National Park"
            />
          </div>
        </Col>
      </Row>
    </div>
  );
}
