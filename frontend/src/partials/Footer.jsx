import React from 'react'

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
                      <img src="/src/assets/img/footer_logo.png" alt="" />
                    </a>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 ">
                  <div className="download_btn">
                    <a href="#" className="rounded_corner"> <img src="/img/icon/down.svg" alt="" /> Download Brochure</a>
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
                  <p>5th flora, 700/D kings road, green <br /> lane New York-1782 <br />
                    <a href="#">+10 367 826 2567</a> <br />
                    <a href="#">contact@carpenter.com</a>
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
                    Useful Links
                  </h3>
                  <ul>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#"> Contact</a></li>
                    <li><a href="#"> Appointment</a></li>
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
                  <p className="newsletter_text">Esteem spirit temper too say adieus who direct esteem esteems
                    luckily.</p>
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

                  Copyright &copy; {currentYear} All rights reserved | This website is developed by <a href="https://www.albertwatbin.com" target="_blank">Watbin Albert</a>

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