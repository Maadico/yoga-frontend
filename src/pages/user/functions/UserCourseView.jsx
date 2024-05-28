import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import Header from "../../../components/layout/Header";
import Footer from "../../../components/layout/Footer";
export default function UserCourseView() {
  const [courses, setCourses] = useState([]);
  const user = JSON.parse(localStorage.getItem("auth"));
  const token = user.token;

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/course/get-user-course`
      );
      setCourses(response.data.courses);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  const handleSubscription = async (course_id) => {
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_API}/api/v1/payment/buy-course/`,
        { course_id },
        { headers: { Authorization: token } }
      );
      if (data?.success) {
        console.log(data);

        if (data && data?.data?.data?.instrumentResponse?.redirectInfo?.url) {
          console.log(data?.data?.data?.instrumentResponse?.redirectInfo?.url);
          window.location.href =
            data?.data?.data?.instrumentResponse?.redirectInfo?.url;
        }
      }
    } catch (e) {
      toast(e.response.data.message, {
        style: {
          borderRadius: "10px",
          background: " rgb(24, 50, 91)",
          color: "#fff",
        },
      });
    }
  };

  return (
    <div>
      <Header />
      <div className="course-view-page">
        <Container>
          <h2 className="course-heading">Our Courses</h2>
          <Row className="course-container">
            {courses.map((course) => (
              <Col sm={6} key={course._id}>
                <Card className="course-card">
                  <Card.Body className="course-card-body">
                    <Card.Title className="course-title">
                      {course.name}
                    </Card.Title>
                    <Card.Text className="course-description">
                      {course.description}
                    </Card.Text>
                    <Card.Text className="course-price">
                      Price: Rs {course.price}
                    </Card.Text>
                    <Button
                      onClick={() => handleSubscription(course._id)} // Pass the plan ID to the handleSubscription function
                      variant="primary"
                      className="course-button"
                    >
                      Register Now
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
      <Footer />
      <Toaster />
    </div>
  );
}
