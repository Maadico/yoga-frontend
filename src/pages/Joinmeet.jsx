import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import axios from "axios";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import "./Joinmeet.css";
function Joinmeet() {
  const [meetingLink, setMeetingLink] = useState("");
  const user = JSON.parse(localStorage.getItem("auth"));
  const [hasCourse, setHasCourse] = useState(true);
  const token = user ? user.token : null;
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API}/api/v1/course/join-meeting`,
          { headers: { Authorization: token } }
        );
        if (response.status === 212) {
          setHasCourse(false);
        }
        setMeetingLink(response.data.link);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    if (!token) {
      // If no token (user not logged in), navigate to /login
      navigate("/login");
    } else {
      fetchData();
    }
  }, [token, navigate]); // Add navigate to dependencies

  const openMeet = () => {
    if (meetingLink) {
      window.open(meetingLink, "_blank");
    }
  };

  return (
    <>
      <Header />
      <div className="joinmeet-container">
        {!hasCourse && (
          <div className="no-course-message">
            <h2>You have no session to join</h2>
            <button onClick={() => navigate("/dashboard/user/viewcourses")}>
              View Available Courses
            </button>
          </div>
        )}
        {hasCourse && (
          <div className="meeting-join-section">
            <h2 className="join-h2">Your Meeting is Ready</h2>
            <button className="join-meeting-button" onClick={openMeet}>
              Click here to join the meeting
            </button>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}

export default Joinmeet;
