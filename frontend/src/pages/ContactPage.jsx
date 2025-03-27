/* eslint-disable no-unused-vars */
import React, { useRef } from "react";
import Header from "../partials/Header";
import Footer from "../partials/Footer";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import { Link } from "react-router-dom";

const containerStyle = {
  width: "100%",
  height: "480px",
  borderRadius: "15px",
};

const center = {
  lat: 0.3152,
  lng: 32.5816,
};

const ContactPage = () => {
  const nameRef = useRef();
  const contactRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: import.meta.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = nameRef.current.value;
    const contact = contactRef.current.value;
    const email = emailRef.current.value;
    const message = messageRef.current.value;

    const whatsappMessage = `\n*JK Aluminum & Steel Works*,\n\n${message}\n\nFrom\nname: ${name},\n\ncontact: ${contact},\n\n email: ${email}`;
    const encodedMessage = encodeURIComponent(whatsappMessage);

    window.open(
      `https://wa.me/256701546115?text=${encodedMessage}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <>
      <Header />

      <div className="bradcam_area bradcam_bg_2">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="bradcam_text text-center">
                <h3>Get in Touch</h3>
                <p>
                  <Link to="/">Home</Link> / contact us
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="contact-section">
        <div className="container">
          <div className="row mb-10">
            <div className="col-12">
              <h2 className="contact-title">Leave a Message</h2>
            </div>

            <div className="col-lg-7">
              <form
                className="form-contact contact_form"
                id="contactForm"
                onSubmit={handleSubmit}
              >
                <div className="row">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <input
                        ref={nameRef}
                        className="form-control valid"
                        name="name"
                        id="name"
                        type="text"
                        placeholder="Enter your name"
                        required
                        style={{ borderRadius: 30, height: 50 }}
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <input
                        ref={contactRef}
                        className="form-control valid"
                        name="contact"
                        id="contact"
                        type="tel"
                        placeholder="Contact"
                        pattern="[0-9]{10}"
                        maxLength={10}
                        required
                        style={{ borderRadius: 30, height: 50 }}
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group">
                      <input
                        ref={emailRef}
                        className="form-control valid"
                        name="email"
                        id="email"
                        type="email"
                        placeholder="Email"
                        required
                        style={{ borderRadius: 30, height: 50 }}
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group">
                      <textarea
                        ref={messageRef}
                        className="form-control w-100"
                        name="message"
                        id="message"
                        cols="30"
                        rows="9"
                        placeholder=" Enter Message"
                        required
                        style={{ borderRadius: 15 }}
                      ></textarea>
                    </div>
                  </div>
                </div>

                <div className="form-group mt-3">
                  <button
                    type="submit"
                    className="button button-contactForm boxed-btn rounded_corner extended_button"
                  >
                    Send
                  </button>
                </div>
              </form>
            </div>

            <div className="col-lg-4 offset-1">
              <div className="media contact-info">
                <span className="contact-info__icon">
                  <div className="icon">
                    <img src="/img/icon/header-address.svg" alt="" />
                  </div>
                </span>
                <div className="media-body">
                  <h3>Buttonwood, California.</h3>
                  <p>Rosemead, CA 91770</p>
                </div>
              </div>
              <div className="media contact-info">
                <span className="contact-info__icon">
                  <div className="icon">
                    <img src="/img/icon/headset.svg" alt="" />
                  </div>
                </span>
                <div className="media-body">
                  <h3>+1 253 565 2365</h3>
                  <p>Mon to Fri 9am to 6pm</p>
                </div>
              </div>
              <div className="media contact-info">
                <span className="contact-info__icon">
                  <div className="icon">
                    <img
                      src="/img/icon/mail.png"
                      alt=""
                      style={{ width: 32, height: 35 }}
                    />
                  </div>
                </span>
                <div className="media-body">
                  <h3>support@colorlib.com</h3>
                  <p>Send us your query anytime!</p>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="d-none d-sm-block mb-5 pb-4">
            {isLoaded ? (
              <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={9}
                options={{
                  styles: [
                    {
                      featureType: "all",
                      stylers: [
                        { saturation: -90 },
                        { lightness: 50 }
                      ]
                    },
                    {
                      elementType: 'labels.text.fill',
                      stylers: [{ color: '#ccdee9' }]
                    }
                  ],
                  scrollwheel: false
                }}
              >
              </GoogleMap>
            ) : (
              <div>Loading map...</div>
            )}
          </div> */}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ContactPage;
