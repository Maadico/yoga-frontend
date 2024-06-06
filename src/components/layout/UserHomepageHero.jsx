// UserHomepageHero.jsx
import React from "react";

export default function UserHomepageHero() {
  return (
    <header className="user-homepage-hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1>
            Welcome to <b>Maadico</b>
          </h1>
          <h4>Embark on your journey to inner peace and well-being</h4>
          <div className="cta-buttons">
            <a
              href="/dashboard/user/yourcourse"
              className="cta-button your-course"
            >
              Your Courses
            </a>
            <a
              href="/dashboard/user/viewcourses"
              className="cta-button explore-courses"
            >
              Our Programs
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
