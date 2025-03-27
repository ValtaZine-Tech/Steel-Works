import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {

  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="footer">
        <div className="download_brochure">
          <div className="container">
            <div className="bordered_1px">
              <div className="row">
                <div className="col-lg-6 col-md-6">
                  <div className="footer_logo">
                    <a href="#">
                      <img src="/img/footer_logo.png" alt="" className="footer-logo-img"/>
                    </a>
                  </div>
                </div>

                <div className="col-lg-6 col-md-6 ">
                  <div className="download_btn">
                    <a href="/brochures/" className="rounded_corner" download> <img src="/img/icon/down.svg" alt="" /> Download Brochure</a>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
        <div className="footer_top">
          <div className="container">
            <div className="row">
              <div className="col-xl-3 col-md-6 col-lg-3 ">
                <div className="footer_widget">
                  <h3 className="footer_title">
                    About
                  </h3>
                  <p>Kampala, Uganda<br />
                  <a href="tel:+256701546115">0701546115</a> <br />
                    <a href="#">jkworks@gmail.com</a>
                  </p>
                  <p>



                  </p>
                  <div className="socail_links">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="ti-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="ti-twitter-alt"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-instagram"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-pinterest"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-youtube-play"></i>
                        </a>
                      </li>
                    </ul>
                  </div>

                </div>
              </div>

              <div className="col-xl-2 col-md-6 col-lg-2">
                <div className="footer_widget">
                  <h3 className="footer_title">
                    Popular Searches
                  </h3>
                  <ul>
                    <li><a href="#">Apartment for rent </a></li>
                    <li><a href="#">Office for rent</a></li>
                    <li><a href="#"> Apartment for sale</a></li>
                    <li><a href="#"> Luxuries</a></li>
                  </ul>
                </div>
              </div>

              <div className="col-xl-2 col-md-6 col-lg-2 offset-xl-1 offset-lg-1">
                <div className="footer_widget">
                  <h3 className="footer_title">
                    Quick Links
                  </h3>
                  <ul>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/services">Services</Link></li>
                    <li><Link to="/contact"> Contact</Link></li>
                    <li><a href="tel:+256701546115"> Call Us Now</a></li>
                  </ul>
                </div>
              </div>

              <div className="col-xl-4 col-md-6 col-lg-4">
                <div className="footer_widget">
                  <h3 className="footer_title">
                    Subscribe
                  </h3>
                  <form action="#" className="newsletter_form">
                    <input type="text" placeholder="Enter your mail" />
                    <button type="submit">Subscribe</button>
                  </form>
                  <p className="newsletter_text">Stay updated with the latest innovations, and services in the construction and industrial world. Subscribe to our newsletter and never miss an update!</p>
                </div>
              </div>

            </div>
          </div>
        </div>
        <div className="copy-right_text">
          <div className="container">
            <div className="footer_border"></div>
            <div className="row">
              <div className="col-xl-12">
                <p className="copy_right text-center">

                  Copyright &copy; {currentYear} All rights reserved | This website is developed by <a href="https://www.albertwatbin.com" target="_blank">Albert Watbin</a>

                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer