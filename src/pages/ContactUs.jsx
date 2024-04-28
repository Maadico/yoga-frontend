import React, { useState } from "react";
import axios from "axios";
import { IoMdCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { ImLocation } from "react-icons/im";
import toast, { Toaster } from "react-hot-toast";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        `${process.env.REACT_APP_API}/api/v1/contact/add-contact`,
        formData
      );
      // Handle success, e.g., show a success message
      toast.success("Form submitted successfully!");
      console.log("Form submitted successfully!");
    } catch (error) {
      // Handle error, e.g., show an error message
      toast.error("Error submitting form");
      console.error("Error submitting form:", error);
    }
  };

  return (
    <>
      <Toaster />
      <Header />
      <div className="contacts" id="contacts">
        <div className="container">
          <div className="row p-2  ">
            <div className="col-md-4 py-3">
              <div className="row mt-4">
                <div className="leftContactList">
                  <div className="l text-center">
                    <span>
                      <IoMdCall color="rgb(3,69,209)" />
                    </span>
                  </div>
                  <div className="r mx-1">
                    <h6>Phone Number</h6>
                    <p>9601645426</p>
                  </div>
                </div>
                <div className="leftContactList">
                  <div className="l text-center">
                    <span>
                      <MdEmail color="rgb(3,69,209)" />
                    </span>
                  </div>
                  <div className="r mx-1">
                    <h6>Email Address</h6>
                    <p>maadico.in@gmail.com</p>
                  </div>
                </div>
                <div className="leftContactList">
                  <div className="l text-center">
                    <span>
                      <ImLocation color="rgb(3,69,209)" />
                    </span>
                  </div>
                  <div className="r mx-1">
                    <h6>Location</h6>
                    <p>E - 103 , Ramkutir Complex </p>
                    <p>Surat, Gujurat - 395009</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-7  mx-2 my-2 removeMarginAt767 ">
              <div className="row m-0 my-4  px-2 g-0">
                <div className="rightContactList">
                  <div className="row ">
                    <h4>
                      <b> Quick Contact</b>{" "}
                    </h4>
                  </div>
                  <form className="mt-4" onSubmit={handleSubmit}>
                    <div className="row py-2">
                      <div className="col-md-6 mb-2">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="col-md-6 mb-2">
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6 my-2">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <textarea
                          className="form-control"
                          rows="3"
                          placeholder="Message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                        ></textarea>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <button
                          type="submit"
                          className="btn btn-primary mt-3 text-white border-0 px-3 py-2"
                        >
                          <span> SUBMIT</span>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="row locationContact mt-2 text-center d-flex justify-content-center">
            <div className="row text-center ">
              <h3>Find Us on Google Maps</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed ab
                labore ut nobis saepe cupiditate, perspiciatis voluptatum
              </p>
            </div>
            <div className="row my-2">
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3719.8054487302466!2d72.78721437393946!3d21.199886181881496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sMaaDico%20Healthcare%20E%20-%20103%20%2C%20Ramkutir%20Complex%20Surat%2C%20Gujurat%20-%20395009!5e0!3m2!1sen!2sin!4v1705352340716!5m2!1sen!2sin"
                width="600"
                height="450"
                style={{ border: "0" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
