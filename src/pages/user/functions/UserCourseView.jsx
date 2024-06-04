import React, { useState, useEffect } from "react";
import { Container, Row, Button } from "react-bootstrap";
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
      debugger;
      const { data } = await axios.post(
        `${process.env.REACT_APP_API}/api/v1/payment/buy-course/`,
        { course_id },
        { headers: { Authorization: token } }
      );
      if (data?.success) {
        console.log(data);

        if (data && data?.data?.data?.instrumentResponse?.redirectInfo?.url) {
          console.log(data?.data?.data?.instrumentResponse?.redirectInfo?.url);

          const redirectUrl =
            data?.data?.data?.instrumentResponse?.redirectInfo?.url;

          setTimeout(() => {
            window.open(redirectUrl, "_blank");
          });
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
      <Container>
        <h2 className="course-heading">Our Courses</h2>
        <Row className="course-container">
          <div className="row m-0 p-0 g-0 ourServices">
            {courses.map((course) => (
              <div className="col-md-4 space">
                <div className="box m-1 text-center">
                  <div className="row m-0 p-0 heading">
                    <h5>{course.name}</h5>
                  </div>
                  <img
                    src={`/assets/Course/${course.image}`}
                    alt={`${course.name}`}
                    className="programImage"
                  />
                  <div className="row SubHeading m-0 p-0">
                    <p>{course.description}</p>
                  </div>
                  <div className="row SubHeading m-0 p-0">
                    <p>Rs {course.price}</p>
                  </div>
                  <Button
                    onClick={() => handleSubscription(course._id)} // Pass the plan ID to the handleSubscription function
                    variant="primary"
                    className="course-button"
                  >
                    Register Now
                  </Button>{" "}
                </div>
              </div>
            ))}
          </div>
        </Row>
      </Container>

      <Footer />
      <Toaster />
    </div>
  );
}
