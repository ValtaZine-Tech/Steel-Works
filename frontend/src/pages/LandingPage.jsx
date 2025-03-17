import React from 'react'
import Header from '../partials/Header'
import Footer from '../partials/Footer'

// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min';

const LandingPage = () => {
  return (
    <>
      <Header />


      <div className="slider_area">
        <div className="slider_active owl-carousel">
          <div className="single_slider  d-flex align-items-center slider_bg_1 overlay">
            <div className="container">
              <div className="row align-items-center justify-content-center">
                <div className="col-xl-9 col-md-9 col-md-12">
                  <div className="slider_text text-center">
                    <h3>We Build Your Home
                      Secure and Safe</h3>
                    <p>Build Your Home Secure and Safe with Professional Touch</p>
                    <a href="services.html" className="boxed-btn3">Our Services</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="features_area">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-4">
              <div className="single_feature text-center rounded_corner">
                <div className="icon">
                  <i className="flaticon-sketch"></i>
                </div>
                <h3>Creative Plan & Design</h3>
                <p>There are many variations of passages of lorem Ipsum available, but the majority have
                  suffered alteration.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-4">
              <div className="single_feature text-center rounded_corner">
                <div className="icon">
                  <i className="flaticon-helmet"></i>
                </div>
                <h3>Talented Peoples</h3>
                <p>There are many variations of passages of lorem Ipsum available, but the majority have
                  suffered alteration.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-4">
              <div className="single_feature text-center rounded_corner">
                <div className="icon">
                  <i className="flaticon-support"></i>
                </div>
                <h3>Modern Tools</h3>
                <p>There are many variations of passages of lorem Ipsum available, but the majority have
                  suffered alteration.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="about_area">
        <div className="container">
          <div className="border_1px">
            <div className="row align-items-center">
              <div className="col-xl-6  col-md-6">
                <div className="about_thumb">
                  <img src="/src/assets/img/about/about.png" alt="" className="rounded_corner" />
                  <div className="pattern_img d-none d-lg-block">
                    <img src="/src/assets/img/pattern/pattern.svg" alt="" className="round" />
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-md-6">
                <div className="about_info">
                  <h3>We Serve all of your <br />
                    Construction Services</h3>
                  <p className="first_para"> “Construction is a full service construction company offering
                    building solutions from start to finish. Our staff has been operating on NYC for ten
                    years.</p>
                  <p>There are many variations of passages of lorem Ipsum available, but the majority have
                    suffered alteration in some form, by injected humour, or randomised words which don't
                    look even slightly believable.</p>
                  <a href="about.html" className="boxed-btn3">About Us</a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="service_area">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="section_title text-center mb-50">
                <h3>Our Services</h3>
              </div>
            </div>
          </div>
          <div className="border_bottom_1px position-relative">
            <div className="pattern_img d-none d-xl-block">
              <img src="/src/assets/img/pattern/pattern.png" alt="" className="rounded_corner" />
            </div>
            <div className="row">
              <div className="col-xl-12">
                <div className="service_active owl-carousel">
                  <div className="single_service">
                    <div className="thumb rounded_corner">
                      <img src="/src/assets/img/service/1.png" alt="" className="rounded_corner" />
                    </div>
                    <div className="service_info">
                      <a href="#">
                        <h3>maintenance & Repair </h3>
                      </a>
                      <p>There are many variations of passages of lorem Ipsum available.</p>
                      <a className="d-flex align-items-center" href="#">More <i className="ti-angle-right"></i>
                      </a>
                    </div>
                  </div>
                  <div className="single_service">
                    <div className="thumb rounded_corner">
                      <img src="/src/assets/img/service/2.png" alt="" className="rounded_corner" />
                    </div>
                    <div className="service_info">
                      <a href="#">
                        <h3>Building Construction</h3>
                      </a>
                      <p>There are many variations of passages of lorem Ipsum available.</p>
                      <a className="d-flex align-items-center" href="#">More <i className="ti-angle-right"></i>
                      </a>
                    </div>
                  </div>
                  <div className="single_service">
                    <div className="thumb rounded_corner">
                      <img src="/src/assets/img/service/3.png" alt="" className="rounded_corner" />
                    </div>
                    <div className="service_info">
                      <a href="#">
                        <h3>Bridge & Road Construction</h3>
                      </a>
                      <p>There are many variations of passages of lorem Ipsum available.</p>
                      <a className="d-flex align-items-center" href="#">More <i className="ti-angle-right"></i>
                      </a>
                    </div>
                  </div>
                  <div className="single_service">
                    <div className="thumb rounded_corner">
                      <img src="/src/assets/img/service/1.png" alt="" className="rounded_corner" />
                    </div>
                    <div className="service_info">
                      <a href="#">
                        <h3>maintenance & Repair </h3>
                      </a>
                      <p>There are many variations of passages of lorem Ipsum available.</p>
                      <a className="d-flex align-items-center" href="#">More <i className="ti-angle-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="contact_us overlay">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8 col-md-7">
              <div className="contact_text">
                <h3>Are you looking for a Construction
                  and Industrial Experts?</h3>
              </div>
            </div>
            <div className="col-lg-4 col-md-5">
              <div className="contact_btn">
                <a className="boxed-btn3" href="contact.html">Contact Us</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default LandingPage