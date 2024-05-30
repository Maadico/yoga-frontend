import React from "react";
import { FaHandHoldingMedical } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import kunal from "../../assets/doctors/Dr_kunal_Vijay_Bagade.jpg";
import gaurav from "../../assets/doctors/Dr_govind.JPG";
import komal from "../../assets/doctors/Dr. Komals.jpg";
import "./Doctors.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

const doctor = [
  {
    name: "Dr Gaurav Thakur",
    imgLink: gaurav,
    dep: "BNYS",
    description:
      "An expert in yoga who creates a unique yoga program that fuses ancient practices and modern methods to create sustainable plans for building strong, healthy habits, ",
  },
  {
    name: "Dr Kunal Vijay Bagade",
    imgLink: kunal,
    dep: "BNYS",
    description:
      "A pro expert yoga guru practising yoga since his early childhood. He holds a doctor degree in Naturopathy and Yogic Sciences. He has been practicing yoga for more than ",
  },
  {
    name: "Dr Komal",
    imgLink: komal,
    dep: "BNYS",
    description:
      "Step onto the mat with Dr. Komal for a transformative experience that will leave you feeling grounded, centered and connected to your true self and embark on a ",
  },
];

const Doctor = () => {
  const navigate = useNavigate();
  const [slidesPerView, setSlidesPerView] = useState(3);
  const openDoctor = () => {
    navigate("/doctors");
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 525) {
        setSlidesPerView(1);
      } else if (window.innerWidth <= 991) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(3);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="doctor" id="instructors">
      <div className="container">
        <div className="aboutSubheading">
          <h1>
            Your <strong>Yoga Doctors</strong>
          </h1>
        </div>
        <div className="slider">
          <Swiper
            slidesPerView={slidesPerView}
            centeredSlides={false}
            spaceBetween={15}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            {doctor.map((d, i) => (
              <SwiperSlide key={i}>
                <img src={d.imgLink} alt={d.name} />
                <div className="details">
                  <div className="name">
                    <h6>{d.name}</h6>
                  </div>
                  <div className="department">
                    <span>{d.dep}</span>
                  </div>
                  <div className="description">
                    <p onClick={openDoctor}>
                      <u>Know more</u>{" "}
                    </p>
                  </div>
                  <div className="social">
                    <div className="socialId">
                      <span>
                        <FaHandHoldingMedical fontSize={25} />
                      </span>
                      <span>
                        <FaHandHoldingMedical fontSize={25} />
                      </span>
                      <span>
                        <FaHandHoldingMedical fontSize={25} />
                      </span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Doctor;
