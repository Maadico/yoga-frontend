import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import axios from "axios";
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

  const handleSubscription = async (planID) => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/payment/buy-course/${planID}`,
        { headers: { Authorization: token } }
      );
      console.log(data.subscription);
      console.log(process.env.REACT_APP_RAZORPAY_KEY_ID);
      if (data.success) {
        const options = {
          key: process.env.REACT_APP_RAZORPAY_KEY_ID,
          name: "Yoga Classes",
          subscription_id: data?.subscription,
          handler: async function (response) {
            try {
              const {
                razorpay_payment_id,
                razorpay_subscription_id,
                razorpay_signature,
              } = response;

              const { data } = await axios.post(
                `${process.env.REACT_APP_API}/api/v1/payment/payment-verify`,
                {
                  razorpay_payment_id,
                  razorpay_subscription_id,
                  razorpay_signature,
                  planID,
                },
                {
                  headers: {
                    "Content-Type": "application/json",
                    Authorization: token,
                  },
                }
              );
              if (data.message === "Payment successful") {
                alert("Payment successful");
              } else {
                alert("Payment failed");
              }

              console.log(data);
            } catch (error) {
              console.log(error);
            }
          },
          prefill: {
            name: user?.name,
            email: user?.email,
          },
          theme: {
            color: "#9c003c",
          },
        };
        const razorpay = new window.Razorpay(options);
        razorpay.open();
      }
    } catch (error) {
      console.log(error);
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
                      onClick={() => handleSubscription(course.razorpayPlanId)} // Pass the plan ID to the handleSubscription function
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
    </div>
  );
}
