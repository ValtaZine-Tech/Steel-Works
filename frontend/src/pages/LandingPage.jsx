import React from "react";
import Header from "../partials/Header";
import Footer from "../partials/Footer";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link } from "react-router-dom";
import GallerySection from "../partials/Gallery";

const LandingPage = () => {
  return (
    <>
      <Header />

      <div className="slider_area">
        <div className="slider_active">
          <div className="single_slider  d-flex align-items-center slider_bg_1 overlay">
            <div className="container">
              <div className="row align-items-center justify-content-center">
                <div className="col-xl-9 col-md-9 col-md-12">
                  <div className="slider_text text-center">
                    <h3>Transforming Spaces with Precision & Style</h3>
                    <p>Strong, Stylish, and Secure—Crafted with Precision.</p>
                    <Link
                      to="/services"
                      className="boxed-btn3"
                      onClick={() => window.scrollTo(0, 0)}
                    >
                      Our Services
                    </Link>
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
            {/* Feature 1 */}
            <div className="col-lg-4 col-md-4">
              <div className="single_feature text-center rounded_corner">
                <div className="icon">
                  <i className="flaticon-sketch"></i>
                </div>
                <h3>Creative Plan & Design</h3>
                <p>
                  Customized solutions blending innovation with precision
                  engineering, transforming your architectural vision into
                  reality.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="col-lg-4 col-md-4">
              <div className="single_feature text-center rounded_corner">
                <div className="icon">
                  <i className="flaticon-helmet"></i>
                </div>
                <h3>Expert Craftsmanship</h3>
                <p>
                  Certified professionals delivering flawless installations with
                  meticulous attention to detail and safety standards.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="col-lg-4 col-md-4">
              <div className="single_feature text-center rounded_corner">
                <div className="icon">
                  <i className="flaticon-support"></i>
                </div>
                <h3>Advanced Technology</h3>
                <p>
                  State-of-the-art equipment ensuring precision fabrication
                  crafting and efficient project execution from start to finish.
                </p>
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
                <div className="about_thumb rounded_corner">
                  <img
                    src="img/about/about.jpg"
                    alt="Metalwork and interior decor"
                    className="rounded_corner img-fluid"
                  />
                  <div className="pattern_img d-none d-lg-block">
                    <img
                      src="/img/pattern/pattern.svg"
                      alt="Decorative pattern"
                      className="round"
                    />
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-md-6">
                <div className="about_info">
                  <h3>Transforming Spaces with Precision & Style</h3>
                  <p className="first_para">
                    JK Aluminum Work and Steel brings together innovation and
                    craftsmanship to deliver superior metal and interior decor
                    solutions. We specialize in high-quality aluminum cladding,
                    curtain walling, and custom windows and doors, alongside
                    robust steel work and stylish interior finishes.
                  </p>
                  <p>
                    Our expert team is dedicated to transforming both commercial
                    and residential spaces with precision, durability, and a
                    modern aesthetic. From secure burglar-proof grills to
                    elegant office partitions, we combine functionality with
                    contemporary design.
                  </p>
                  <Link
                    to="/about"
                    className="boxed-btn3 extended_button"
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    Learn More
                  </Link>
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
                <h3>Our Specialized Services</h3>
              </div>
            </div>
          </div>
          <div className="border_bottom_1px position-relative">
            <div className="pattern_img d-none d-xl-block">
              <img
                src="/img/pattern/pattern.svg"
                alt="Service pattern"
                className="img-fluid"
              />
            </div>
            <div className="row service_wrapper">
              <div className="col-lg-4 col-md-6 mb-4">
                <div className="single_service">
                  <div className="thumb rounded_corner">
                    <img
                      src="/img/service/1.jpg"
                      alt="Aluminum solutions"
                      className="rounded_corner"
                    />
                  </div>
                  <div className="service_info">
                    <h3>Aluminum Solutions</h3>
                    <ul className="service-list">
                      <li>
                        <i className="bi bi-grid-3x3-gap-fill text-primary me-2"></i>
                        Cladding & Curtain Walling
                      </li>
                      <li>
                        <i className="bi bi-window-dock text-primary me-2"></i>
                        Projected Windows
                      </li>
                      <li>
                        <i className="bi bi-door-open text-primary me-2"></i>
                        Custom Sliding Doors
                      </li>
                      <li>
                        <i className="bi bi-columns-gap text-primary me-2"></i>
                        Architectural Glazing
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 mb-4">
                <div className="single_service">
                  <div className="thumb rounded_corner">
                    <img
                      src="/img/service/2.jpg"
                      alt="Steel fabrication"
                      className="rounded_corner"
                    />
                  </div>
                  <div className="service_info">
                    <h3>Steel Fabrication</h3>
                    <ul className="service-list">
                      <li>
                        <i className="bi bi-shield-lock text-danger me-2"></i>
                        Grill Doors & Security Grills
                      </li>
                      <li>
                        <i className="bi bi-ladder text-danger me-2"></i>Custom
                        Staircases
                      </li>
                      <li>
                        <i className="bi bi-house-door text-danger me-2"></i>
                        Main Gate Designs
                      </li>
                      <li>
                        <i className="bi bi-gear text-danger me-2"></i>
                        Structural Metalwork
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 mb-4">
                <div className="single_service">
                  <div className="thumb rounded_corner">
                    <img
                      src="/img/service/3.jpg"
                      alt="Interior decor"
                      className="rounded_corner"
                    />
                  </div>
                  <div className="service_info">
                    <h3>Interior Decor</h3>
                    <ul className="service-list">
                      <li>
                        <i className="bi bi-layout-split text-success me-2"></i>
                        Vertical Blinds & Ceilings
                      </li>
                      <li>
                        <i className="bi bi-grid-3x3 text-success me-2"></i>
                        Office Partitions
                      </li>
                      <li>
                        <i className="bi bi-droplet text-success me-2"></i>
                        Shower Enclosures
                      </li>
                      <li>
                        <i className="bi bi-brush text-success me-2"></i>
                        Professional Painting
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="gallery_area">
        <div className="container">
          <div className="gallery_nav">
            <div className="row align-items-center">
              <div className="col-lg-8 col-md-6">
                <h3 className="gallery_title">
                  Take a look Some of our <br />
                  awesome projects
                </h3>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="portfolio-menu">
                  <button className="active" data-filter="*">
                    All
                  </button>
                  <button data-filter=".cat1">Architecture</button>
                  <button data-filter=".cat2">Buildings</button>
                  <button data-filter=".cat3">Bridges</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid p-0">
          <div className="row grid no-gutters">
            <div className="col-xl-3 col-lg-3 col-md-6 grid-item cat3 cat3">
              <div className="single_gallery">
                <div className="thumb">
                  <img src="img/gallery/1.jpg" alt="" />
                </div>
                <div className="gallery_hover">
                  <div className="hover_inner d-flex align-items-center justify-content-between">
                    <h3>Maintenance & Repair</h3>
                    <div className="icon">
                      <a href="project_details.html">
                        <i className="ti-angle-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6 grid-item cat3">
              <div className="single_gallery">
                <div className="thumb">
                  <img src="img/gallery/2.jpg" alt="" />
                </div>
                <div className="gallery_hover">
                  <div className="hover_inner d-flex align-items-center justify-content-between">
                    <h3>Maintenance & Repair</h3>
                    <div className="icon">
                      <a href="project_details.html">
                        <i className="ti-angle-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6 grid-item cat2">
              <div className="single_gallery">
                <div className="thumb">
                  <img src="img/gallery/3.jpg" alt="" />
                </div>
                <div className="gallery_hover">
                  <div className="hover_inner d-flex align-items-center justify-content-between">
                    <h3>Maintenance & Repair</h3>
                    <div className="icon">
                      <a href="project_details.html">
                        <i className="ti-angle-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6 grid-item cat1 cat3">
              <div className="single_gallery">
                <div className="thumb">
                  <img src="img/gallery/4.jpg" alt="" />
                </div>
                <div className="gallery_hover">
                  <div className="hover_inner d-flex align-items-center justify-content-between">
                    <h3>Maintenance & Repair</h3>
                    <div className="icon">
                      <a href="project_details.html">
                        <i className="ti-angle-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6 grid-item cat2 cat3 cat4">
              <div className="single_gallery">
                <div className="thumb">
                  <img src="img/gallery/5.jpg" alt="" />
                </div>
                <div className="gallery_hover">
                  <div className="hover_inner d-flex align-items-center justify-content-between">
                    <h3>Maintenance & Repair</h3>
                    <div className="icon">
                      <a href="project_details.html">
                        <i className="ti-angle-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6 grid-item cat1 cat2">
              <div className="single_gallery">
                <div className="thumb">
                  <img src="img/gallery/6.jpg" alt="" />
                </div>
                <div className="gallery_hover">
                  <div className="hover_inner d-flex align-items-center justify-content-between">
                    <h3>Maintenance & Repair</h3>
                    <div className="icon">
                      <a href="project_details.html">
                        <i className="ti-angle-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6 grid-item cat4 cat1">
              <div className="single_gallery">
                <div className="thumb">
                  <img src="img/gallery/7.jpg" alt="" />
                </div>
                <div className="gallery_hover">
                  <div className="hover_inner d-flex align-items-center justify-content-between">
                    <h3>Maintenance & Repair</h3>
                    <div className="icon">
                      <a href="project_details.html">
                        <i className="ti-angle-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6 grid-item cat1 cat2 cat3 cat4">
              <div className="single_gallery">
                <div className="thumb">
                  <img src="img/gallery/8.jpg" alt="" />
                </div>
                <div className="gallery_hover">
                  <div className="hover_inner d-flex align-items-center justify-content-between">
                    <h3>Maintenance & Repair</h3>
                    <div className="icon">
                      <a href="project_details.html">
                        <i className="ti-angle-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <GallerySection />

      <div className="contact_us overlay">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8 col-md-7">
              <div className="contact_text">
                <h3>
                  Are you looking for a Construction and Industrial Experts?
                </h3>
              </div>
            </div>
            <div className="col-lg-4 col-md-5">
              <div className="contact_btn">
                <Link
                  className="boxed-btn3"
                  to="/contact"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default LandingPage;
