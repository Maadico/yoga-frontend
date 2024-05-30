import React from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import kunal from "../assets/doctors/Dr_kunal_Vijay_Bagade.jpg";
import gaurav from "../assets/doctors/Dr_govind.JPG";
import komal from "../assets/doctors/Dr. Komals.jpg";
import "../components/layout/Doctors.css";
import { Card, Row, Col, Image } from "react-bootstrap";
const doctor = [
  {
    name: "Dr Gaurav Thakur",
    imgLink: gaurav,
    dep: "BNYS",
    description:
      "An expert in yoga who creates a unique yoga program that fuses ancient practices and modern methods to create sustainable plans for building strong, healthy habits, fostering positive lifestyle changes. He holds a BNYS degree from India's top institution for Naturopathy and Yoga, SDM College of Naturopathy and Yogic Sciences.At a very young age, he felt a strong urge to delve deeper into the mysteries of nature, life, and Yoga Sadhna.",
  },
  {
    name: "Dr Kunal Vijay Bagade",
    imgLink: kunal,
    dep: "BNYS",
    description:
      "A pro expert yoga guru practising yoga since his early childhood. He holds a doctor degree in Naturopathy and Yogic Sciences. He has been practicing yoga for more than 10 years and studied Bachelor's of Naturopathy and Yogic Sciences (B.N.Y.S) 5 and 1/2 years course. He has a warm heart and welcoming nature and is a very motivating person. A person who never did yoga will also feel very safe and encouraged by Dr. Kunal's practice.",
  },
  {
    name: "Dr Komal",
    imgLink: komal,
    dep: "BNYS",
    description:
      "Step onto the mat with Dr. Komal for a transformative experience that will leave you feeling grounded, centered and connected to your true self and embark on a path of growth and healing.A dedicated and passionate female yoga instructor holding a BNYS degree. She has a deep understanding of natural healing practices and holistic wellness, she guides  towards physical, mental, and emotional balance through the practice of yoga",
  },
];

function DoctorsPage() {
  return (
    <div>
      <Header />
      <div className="container2">
        <div className="aboutSubheading">
          <h1>
            Your <strong>Yoga Doctors</strong>
          </h1>
        </div>
        <div className="descdoctor2">
          lorem isrughriu iuhbrfuih iuhrfiu iu hiu biu bi
        </div>
        {doctor.map((d, i) => (
          <Card style={{}}>
            <Row className="g-0">
              <Col md="4">
                <Image src={d.imgLink} alt={d.name} fluid />
              </Col>
              <Col md="8">
                <Card.Body>
                  <Card.Title>{d.name}</Card.Title>
                  <Card.Text>{d.description}</Card.Text>
                  <Card.Text>
                    <small className="text-muted">{d.dep}</small>
                  </Card.Text>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        ))}
      </div>
      <></>

      <Footer />
    </div>
  );
}

export default DoctorsPage;
