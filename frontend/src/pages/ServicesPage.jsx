import React from 'react'
import Header from '../partials/Header'
import Footer from '../partials/Footer'
import { Link } from 'react-router-dom'

const ServicesPage = () => {
  return (
    <>
      <Header />

      <div class="bradcam_area bradcam_bg_2 mb-70">
        <div class="container">
          <div class="row">
            <div class="col-xl-12">
              <div class="bradcam_text text-center">
                <h3>Services</h3>
                <p><Link to="/">Home</Link> / Services</p>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="service_area">
        <div className="container">
          <div className="row">

          </div>
          <div className="border_bottom_1px position-relative">
            <div className="pattern_img d-none d-xl-block">
              <img src="/img/pattern/pattern.png" alt="Service pattern" className="img-fluid" />
            </div>
            <div className="row service_wrapper">
              <div className="col-lg-4 col-md-6 mb-4">
                <div className="single_service">
                  <div className="thumb rounded_corner">
                    <img src="/img/service/1.png" alt="Aluminum solutions" className="rounded_corner" />
                  </div>
                  <div className="service_info">
                    <h3>Aluminum Solutions</h3>
                    <ul className="service-list">
                      <li><i className="bi bi-grid-3x3-gap-fill text-primary me-2"></i>Cladding & Curtain Walling</li>
                      <li><i className="bi bi-window-dock text-primary me-2"></i>Projected Windows</li>
                      <li><i className="bi bi-door-open text-primary me-2"></i>Custom Sliding Doors</li>
                      <li><i className="bi bi-columns-gap text-primary me-2"></i>Architectural Glazing</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 mb-4">
                <div className="single_service">
                  <div className="thumb rounded_corner">
                    <img src="/img/service/2.png" alt="Steel fabrication" className="rounded_corner" />
                  </div>
                  <div className="service_info">
                    <h3>Steel Fabrication</h3>
                    <ul className="service-list">
                      <li><i className="bi bi-shield-lock text-danger me-2"></i>Grill Doors & Security Grills</li>
                      <li><i className="bi bi-ladder text-danger me-2"></i>Custom Staircases</li>
                      <li><i className="bi bi-house-door text-danger me-2"></i>Main Gate Designs</li>
                      <li><i className="bi bi-gear text-danger me-2"></i>Structural Metalwork</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 mb-4">
                <div className="single_service">
                  <div className="thumb rounded_corner">
                    <img src="/img/service/3.png" alt="Interior decor" className="rounded_corner" />
                  </div>
                  <div className="service_info">
                    <h3>Interior Decor</h3>
                    <ul className="service-list">
                      <li><i className="bi bi-layout-split text-success me-2"></i>Vertical Blinds & Ceilings</li>
                      <li><i className="bi bi-grid-3x3 text-success me-2"></i>Office Partitions</li>
                      <li><i className="bi bi-droplet text-success me-2"></i>Shower Enclosures</li>
                      <li><i className="bi bi-brush text-success me-2"></i>Professional Painting</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div class="contact_us overlay">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-8 col-md-7">
              <div class="contact_text">
                <h3>Are you looking for a Construction
                  and Industrial Experts?</h3>
              </div>
            </div>
            <div class="col-lg-4 col-md-5">
              <div class="contact_btn">
                <a class="boxed-btn3" href="contact.html">Contact Us</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default ServicesPage