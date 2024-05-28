import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import axios from "axios";

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
          navigate("/dashboard/user/viewcourses");
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
    <div>
      {!hasCourse && <h2>You have no course to join</h2>}
      {hasCourse && (
        <button onClick={openMeet}>Click here to join the meeting</button>
      )}
    </div>
  );
}

export default Joinmeet;
