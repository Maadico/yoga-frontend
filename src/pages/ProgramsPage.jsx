import React, { useState } from "react";
import programInfos from "../assets/programs.json";
import { useNavigate, useParams } from "react-router-dom";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import "./Programs.css";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

const ProgramPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const programInfo = programInfos[id - 1];
  const [thumbsSwiper, setThumbsSwiper] = useState(0);

  const handleBuyProgram = () => {
    navigate("/login");
  };

  const imagesProducts = programInfo?.images;
  const handleRightArrow = () => {
    if (thumbsSwiper < imagesProducts.length - 1) {
      setThumbsSwiper(thumbsSwiper + 1);
    }
  };

  const handleLeftArrow = () => {
    if (thumbsSwiper > 0) {
      setThumbsSwiper(thumbsSwiper - 1);
    }
  };

  return (
    <>
      <Header />
      <div className="container-fluid">
        <div
          className="productDetailsContainerMiddle"
          style={{ backgroundColor: "rgb(246,252,252)" }}
        >
          <div className="productsDetailsMarginWidth97">
            <div className="row">
              <div className="col-md-5 my-2">
                <div className="productsDetailsImage">
                  <img src={imagesProducts[thumbsSwiper]} alt="" />
                  <span className="detailsLeft_arrow" onClick={handleLeftArrow}>
                    <MdOutlineKeyboardArrowLeft fontSize={25} color="white" />
                  </span>
                  <span
                    className="detailsRight_arrow"
                    onClick={handleRightArrow}
                  >
                    <MdOutlineKeyboardArrowRight fontSize={25} color="white" />
                  </span>
                </div>
                <div className="productsDetailsImageChild">
                  {imagesProducts.map((p, i) => (
                    <div
                      className="productsDetailsImageChildImages"
                      onMouseEnter={() => setThumbsSwiper(i)}
                      key={i}
                    >
                      <img src={p} alt="products" />
                    </div>
                  ))}
                </div>
              </div>
              <div className="col-md-6 my-2">
                <div className="row headingOfProduct"></div>
                <div className="row my-3">
                  <div className="d-flex justify-content-between productsDetailsMarginWidth97price"></div>
                </div>
                <div className="ProgramDetailsMarginWidth97instruction mt-2">
                  <h1>{programInfo?.title}</h1>
                  <br />
                  {programInfo?.Components?.map((c, i) => {
                    if (i !== 3) {
                      return (
                        <p className="my-1" key={i}>
                          - {c}
                        </p>
                      );
                    }

                    return null; // Explicit return of null if no condition is met
                  })}
                </div>
                <div className="row price mx-3 my-4">
                  ₹ {programInfo?.price}
                </div>
                <div className="row">
                  <div className="addToCartProductsDetails mt-4 d-flex justify-content-end">
                    <button
                      className="btn px-5 mx-2"
                      onClick={handleBuyProgram}
                    >
                      BUY NOW
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          id="reviews"
          className="customersReview my-5 d-flex justify-content-center align-items-center"
        ></div>
      </div>
      <Footer />
    </>
  );
};

export default ProgramPage;
