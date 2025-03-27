import React from 'react'
import Header from '../partials/Header'
import Footer from '../partials/Footer'
import { Link } from 'react-router-dom'

const AboutPage = () => {
  return (
    <>
      <Header />

      <div class="bradcam_area bradcam_bg_2 mb-30">
        <div class="container">
          <div class="row">
            <div class="col-xl-12">
              <div class="bradcam_text text-center">
                <h3>About Us</h3>
                <p><Link to="/">Home</Link> / About</p>
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
                  <img src="/img/about/about.jpg" alt="Metalwork and interior decor" className="rounded_corner img-fluid" />
                  <div className="pattern_img d-none d-lg-block">
                    <img src="/img/pattern/pattern.svg" alt="Decorative pattern" className="round" />
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-md-6">
                <div className="about_info">
                  <h3>Transforming Spaces with Precision & Style</h3>
                  <p className="first_para">
                    JK Aluminum Work and Steel brings together innovation and craftsmanship to deliver superior metal and interior decor solutions. We specialize in high-quality aluminum cladding, curtain walling, and custom windows and doors, alongside robust steel work and stylish interior finishes.
                  </p>
                  <p>
                    Our expert team is dedicated to transforming both commercial and residential spaces with precision, durability, and a modern aesthetic. From secure burglar-proof grills to elegant office partitions, we combine functionality with contemporary design.
                  </p>
                  {/* <Link to="/about" className="boxed-btn3 extended_button">Learn More</Link> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div class="features_area add_padding">
        <div class="container">
          <div class="row">
            <div class="col-xl-12">
              <div class="section_title text-center mb-10">
                <h3>Our Features</h3>
              </div>
            </div>
          </div>
          <div class="row">
            <div className="col-lg-4 col-md-4">
              <div className="single_feature text-center rounded_corner">
                <div className="icon">
                  <i className="flaticon-sketch"></i>
                </div>
                <h3>Creative Plan & Design</h3>
                <p>Customized solutions blending innovation with precision engineering, transforming your architectural vision into reality.</p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="col-lg-4 col-md-4">
              <div className="single_feature text-center rounded_corner">
                <div className="icon">
                  <i className="flaticon-helmet"></i>
                </div>
                <h3>Expert Craftsmanship</h3>
                <p>Certified professionals delivering flawless installations with meticulous attention to detail and safety standards.</p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="col-lg-4 col-md-4">
              <div className="single_feature text-center rounded_corner">
                <div className="icon">
                  <i className="flaticon-support"></i>
                </div>
                <h3>Advanced Technology</h3>
                <p>State-of-the-art equipment ensuring precision fabrication crafting and efficient project execution from start to finish.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default AboutPage