import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import axios from "axios";
import Header from "../../../components/layout/Header";
import Footer from "../../../components/layout/Footer";
export default function YourCourse() {
  const [course, setCourse] = useState([]);
  const [noCourse, setNoCourse] = useState(false);
  const user = JSON.parse(localStorage.getItem("auth"));
  const token = user.token;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API}/api/v1/course/your-course`,
          { headers: { Authorization: token } }
        );
        if (!response.data.message) {
          setCourse(response.data);
          console.log(response.data);
        } else {
          setNoCourse(true);
        }
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };
    fetchData();
  }, [token]);

  return (
    <div>
      <Header />
      <div className="course-view-page">
        <Container>
          {noCourse && <h1>No course available</h1>}
          <Row className="course-container">
            <Col sm={6} key={course._id}>
              <Card className="course-card">
                <Card.Body className="course-card-body">
                  <Card.Title className="course-title">
                    {course.name}
                  </Card.Title>
                  <Card.Text className="course-description">
                    {course.description}
                  </Card.Text>

                  <Card.Text className="course-description">
                    {course.link}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </div>
  );
}
