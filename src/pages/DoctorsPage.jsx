import React from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { FaHandHoldingMedical } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState, useEffect } from "react";
import kunal from "../assets/doctors/Dr_kunal_Vijay_Bagade.jpg";
import gaurav from "../assets/doctors/Dr_govind.JPG";
import komal from "../assets/doctors/Dr. Komals.jpg";
import "../components/layout/Doctors.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
const doctor = [
  {
    name: "Dr Kunal Vijay Bagade",
    imgLink: kunal,
    dep: "BNYS",
    description:
      "A pro expert yoga guru practising yoga since his early childhood. He holds a doctor degree in Naturopathy and Yogic Sciences. He has been practicing yoga for more than 10 years and studied Bachelor's of Naturopathy and Yogic Sciences (B.N.Y.S) 5 and 1/2 years course. He has a warm heart and welcoming nature and is a very motivating person. A person who never did yoga will also feel very safe and encouraged by Dr. Kunal's practice.",
  },
  {
    name: "Dr Gaurav Thakur",
    imgLink: gaurav,
    dep: "BNYS",
    description:
      "An expert in yoga who creates a unique yoga program that fuses ancient practices and modern methods to create sustainable plans for building strong, healthy habits, fostering positive lifestyle changes. He holds a BNYS degree from India's top institution for Naturopathy and Yoga, SDM College of Naturopathy and Yogic Sciences.At a very young age, he felt a strong urge to delve deeper into the mysteries of nature, life, and Yoga Sadhna.",
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
  const [slidesPerView, setSlidesPerView] = useState(3);

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
                    <p>{d.description}</p>
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
      <Footer />
    </div>
  );
}

export default DoctorsPage;
