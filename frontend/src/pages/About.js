import React, { useEffect, useState } from "react";
import back from "./breads.jpg";
import Footer from "./Footer";
const About = () => {
  const backgroundStyle = {
    backgroundImage: `url(${back})`,
  };
  return (
    <>
      <main>
        <div
          class="breadcrumb-area pt-215 pb-140 mb-110 pb-130"
          data-background="assets/img/bg/breadcrumb_bg.webp"
          style={backgroundStyle}
        >
          <div class="container">
            <div class="breadcrumb-content text-center">
              <h3 class="breadcrumb-title">About Us</h3>
              <div class="breadcrumb-trail">
                <nav>
                  <ul class="trail-items">
                    <li class="trail-item">
                      <a href="index.html">
                        <span>Home</span>
                      </a>
                    </li>
                    <li class="trail-item">
                      <span>About Us</span>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>

        <div class="feature-area pb-165">
          <div class="container">
            <div class="row mb-45">
              <div class="col-xxl-12">
                <div class="section-title-2 text-center">
                  <h3 class="s-title visile-br-lg">
                    Features that
                    <br />
                    Help you build better.
                  </h3>
                  <p class="s-desc">
                    Naff the little rotter have gutted mate James cuppa baking
                    legged.
                  </p>
                </div>
              </div>
            </div>
            <div class="row">
              <div
                class="col-xxl-4 col-xl-4 col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay=".2s"
              >
                <div class="single-feature-2 mb-55">
                  <div class="feature-icon-2">
                    <img
                      src="assets/img/icon/icon_1.webp"
                      alt="image not found"
                    />
                  </div>
                  <div class="feature-content-2">
                    <h4 class="feature-content-title-2">
                      <a href="service-details.html">Website Optimization</a>
                    </h4>
                    <p class="feature-content-desc-2">
                      Only a quid victoria spong cack matie boy bum bag burke a
                      blinding shot James bond pear.
                    </p>
                  </div>
                  <div class="feature-action-2">
                    <a href="service-details.html" class="icon-box-rounded">
                      <i class="fal fa-arrow-right"></i>
                      <i class="fal fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div
                class="col-xxl-4 col-xl-4 col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay=".4s"
              >
                <div class="single-feature-2 mb-55">
                  <div class="feature-icon-2">
                    <img
                      src="assets/img/icon/icon_2.webp"
                      alt="image not found"
                    />
                  </div>
                  <div class="feature-content-2">
                    <h4 class="feature-content-title-2">
                      <a href="service-details.html">Built-in AI features</a>
                    </h4>
                    <p class="feature-content-desc-2">
                      Only a quid victoria spong cack matie boy bum bag burke a
                      blinding shot James bond pear.
                    </p>
                  </div>
                  <div class="feature-action-2">
                    <a href="service-details.html" class="icon-box-rounded">
                      <i class="fal fa-arrow-right"></i>
                      <i class="fal fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div
                class="col-xxl-4 col-xl-4 col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay=".6s"
              >
                <div class="single-feature-2 mb-55">
                  <div class="feature-icon-2">
                    <img
                      src="assets/img/icon/icon-3.webp"
                      alt="image not found"
                    />
                  </div>
                  <div class="feature-content-2">
                    <h4 class="feature-content-title-2">
                      <a href="service-details.html">Full Optimization</a>
                    </h4>
                    <p class="feature-content-desc-2">
                      Only a quid victoria spong cack matie boy bum bag burke a
                      blinding shot James bond pear.
                    </p>
                  </div>
                  <div class="feature-action-2">
                    <a href="service-details.html" class="icon-box-rounded">
                      <i class="fal fa-arrow-right"></i>
                      <i class="fal fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-xxl-12">
                <div class="feature-link-2 text-center">
                  <a href="service.html">
                    View All Services <i class="fal fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="service-area pb-110">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-xxl-6 col-xl-6 col-lg-6">
                <div class="service-left-2 pl-70 pr-10">
                  <div class="row mb-60 mb-lg-0">
                    <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6">
                      <div class="service-left-2-wrap">
                        <div
                          class="service-left-2-thumb mb-30 wow fadeInUp"
                          data-wow-delay=".2s"
                        >
                          <img
                            src="assets/img/service/service_img_1.webp"
                            alt="image not found"
                          />
                        </div>
                        <div
                          class="service-left-2-thumb mb-30 wow fadeInUp"
                          data-wow-delay=".6s"
                        >
                          <img
                            src="assets/img/service/service_img_2.webp"
                            alt="image not found"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6">
                      <div class="service-left-2-wrap mt-30">
                        <div
                          class="service-left-2-thumb mb-30 wow fadeInUp"
                          data-wow-delay=".4s"
                        >
                          <img
                            src="assets/img/service/service_img_3.webp"
                            alt="image not found"
                          />
                        </div>
                        <div
                          class="service-left-2-thumb mb-30 wow fadeInUp"
                          data-wow-delay=".8s"
                        >
                          <img
                            src="assets/img/service/service_img_4.webp"
                            alt="image not found"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xxl-6 col-xl-6 col-lg-6">
                <div class="service-right-area-2 pl-70">
                  <div class="section-title-2 mb-30">
                    <h3
                      class="s-title visible-br-lg visible-br-md wow fadeInUp"
                      data-wow-delay=".2s"
                    >
                      Designed with
                      <br />
                      the applicant in mind.
                    </h3>
                    <p
                      class="s-desc wow fadeInUp line-height-24"
                      data-wow-delay=".4s"
                    >
                      The wireless young delinquent get stuffed bugger super
                      what a load of rubbish chimney pot.
                    </p>
                  </div>
                  <div
                    class="service-right-list-2 w-list-50 mb-30 wow fadeInUp"
                    data-wow-delay=".6s"
                  >
                    <ul>
                      <li class="service-right-list-item">
                        <i class="fal fa-check"></i> Faster Response Time
                      </li>
                      <li class="service-right-list-item">
                        <i class="fal fa-check"></i> Top Audiences
                      </li>
                      <li class="service-right-list-item">
                        <i class="fal fa-check"></i> Automation builder
                      </li>
                      <li class="service-right-list-item">
                        <i class="fal fa-check"></i> Safe and Private
                      </li>
                      <li class="service-right-list-item">
                        <i class="fal fa-check"></i> External data
                      </li>
                    </ul>
                  </div>
                  <div
                    class="service-right-link-2 wow fadeInUp"
                    data-wow-delay=".8s"
                  >
                    <a href="service-details.html" class="sasup-theme-btn">
                      <span>Discover More</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="testimonial-area pt-110 pb-40" data-bg-color="#eeeff4">
          <div class="container">
            <div class="row align-items-end mb-45">
              <div class="col-xxl-7 col-sm-8 col-md-8">
                <div class="section-title-2">
                  <h3
                    class="s-title s-title-about visible-br-lg visible-br-md wow fadeInUp"
                    data-wow-delay=".2s"
                  >
                    We have got over
                    <br />
                    7,000 companies covered.
                  </h3>
                  <p class="s-desc wow fadeInUp" data-wow-delay=".4s">
                    Naff the little rotter have gutted mate James cuppa baking
                    legged.
                  </p>
                </div>
              </div>
              <div class="col-xxl-5 col-sm-4 col-md-4">
                <div class="saasup-news-nav-controls text-sm-end sasup-news-nav-transform">
                  <div class="testi-swiper-button-next-2">
                    <i class="fal fa-angle-left"></i>
                  </div>
                  <div class="testi-swiper-button-prev-2">
                    <i class="fal fa-angle-right"></i>
                  </div>
                </div>
              </div>
            </div>
            <div class="testimonial-active-2 swiper-container">
              <div class="swiper-wrapper">
                <div class="swiper-slide">
                  <div
                    class="single-testimonial-2 wow fadeInUp"
                    data-wow-delay=".2s"
                  >
                    <div class="single-testimonial-2-content">
                      <div class="rating">
                        <i class="fas fa-star active"></i>
                        <i class="fas fa-star active"></i>
                        <i class="fas fa-star active"></i>
                        <i class="fas fa-star active"></i>
                        <i class="fas fa-star active"></i>
                      </div>
                      <h4 class="single-testimonial-2-link">
                        Top notch support
                      </h4>
                      <p class="single-testimonial-2-desc">
                        On your bike mate for quaint burke naff daft bite, your
                        arm give us bell blimey barmy crack school.
                      </p>
                    </div>
                    <div class="single-testimonial-2-user">
                      <div class="thumb mr-15">
                        <img
                          src="assets/img/user/user-1.webp"
                          alt="image not found"
                        />
                      </div>
                      <div class="content">
                        <h4 class="testimonial-user-title">Eleanor Fant</h4>
                        <span class="testimonial-user-designation">
                          Developer
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="swiper-slide">
                  <div
                    class="single-testimonial-2 wow fadeInUp"
                    data-wow-delay=".2s"
                  >
                    <div class="single-testimonial-2-content">
                      <div class="rating">
                        <i class="fas fa-star active"></i>
                        <i class="fas fa-star active"></i>
                        <i class="fas fa-star active"></i>
                        <i class="fas fa-star active"></i>
                        <i class="fas fa-star active"></i>
                      </div>
                      <h4 class="single-testimonial-2-link">
                        Featured customer
                      </h4>
                      <p class="single-testimonial-2-desc">
                        On your bike mate for quaint burke naff daft bite, your
                        arm give us bell blimey barmy crack school.
                      </p>
                    </div>
                    <div class="single-testimonial-2-user">
                      <div class="thumb mr-15">
                        <img
                          src="assets/img/user/user-2.webp"
                          alt="image not found"
                        />
                      </div>
                      <div class="content">
                        <h4 class="testimonial-user-title">Hilary Ouse</h4>
                        <span class="testimonial-user-designation">
                          Customer
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="swiper-slide">
                  <div
                    class="single-testimonial-2 wow fadeInUp"
                    data-wow-delay=".2s"
                  >
                    <div class="single-testimonial-2-content">
                      <div class="rating">
                        <i class="fas fa-star active"></i>
                        <i class="fas fa-star active"></i>
                        <i class="fas fa-star active"></i>
                        <i class="fas fa-star active"></i>
                        <i class="fas fa-star active"></i>
                      </div>
                      <h4 class="single-testimonial-2-link">Amazing product</h4>
                      <p class="single-testimonial-2-desc">
                        On your bike mate for quaint burke naff daft bite, your
                        arm give us bell blimey barmy crack school.
                      </p>
                    </div>
                    <div class="single-testimonial-2-user">
                      <div class="thumb mr-15">
                        <img
                          src="assets/img/user/user-1.webp"
                          alt="image not found"
                        />
                      </div>
                      <div class="content">
                        <h4 class="testimonial-user-title">Fig Nelson</h4>
                        <span class="testimonial-user-designation">
                          Manager
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="client-area pt-40 pb-115 mb-110" data-bg-color="#eeeff4">
          <div class="container">
            <div class="row">
              <div class="col-xxl-12">
                <div class="client-s-title-parent mb-28">
                  <h4 class="client-s-title">
                    6 Tips to
                    <br />
                    Our satisfy your clients
                  </h4>
                </div>
              </div>
              <div class="row">
                <div class="col-xxl-12">
                  <div class="brand-active-2 swiper-container">
                    <div class="swiper-wrapper">
                      <div class="single-brand swiper-slide">
                        <img
                          src="assets/img/brand/band-1-1.webp"
                          width="105"
                          alt="image not found"
                        />
                      </div>
                      <div class="single-brand swiper-slide">
                        <img
                          src="assets/img/brand/brand-1-2.webp"
                          width="105"
                          alt="image not found"
                        />
                      </div>
                      <div class="single-brand swiper-slide">
                        <img
                          src="assets/img/brand/brand-1-3.webp"
                          width="105"
                          alt="image not found"
                        />
                      </div>
                      <div class="single-brand swiper-slide">
                        <img
                          src="assets/img/brand/brand-1-4.webp"
                          width="105"
                          alt="image not found"
                        />
                      </div>
                      <div class="single-brand swiper-slide">
                        <img
                          src="assets/img/brand/brand-1-5.webp"
                          width="105"
                          alt="image not found"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="team-area pb-130">
          <div class="container">
            <div class="row mb-45">
              <div class="col-xxl-12">
                <div class="section-title-2 text-center">
                  <h3
                    class="s-title wow fadeInUp visile-br-lg"
                    data-wow-delay=".2s"
                  >
                    Meet our
                    <br />
                    The team member
                  </h3>
                  <p class="s-desc wow fadeInUp" data-wow-delay=".4s">
                    Naff the little rotter have gutted mate James cuppa baking
                    legged.
                  </p>
                </div>
              </div>
            </div>
            <div class="row mb-45">
              <div
                class="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6 wow fadeInUp"
                data-wow-delay=".2s"
              >
                <div class="single-team mb-30">
                  <div class="thumb">
                    <img
                      src="assets/img/team/team-1.webp"
                      alt="image not found"
                    />
                  </div>
                  <div class="content text-center">
                    <div class="team-desc">
                      <a href="team.html" class="job">
                        Marketing
                      </a>
                      <h5>
                        <a href="team-details.html" class="title">
                          Druid Wensleydale
                        </a>
                      </h5>
                    </div>
                    <div class="team-social">
                      <a href="#">
                        <i class="fab fa-facebook-f"></i>
                      </a>
                      <a href="#">
                        <i class="fab fa-twitter"></i>
                      </a>
                      <a href="#">
                        <i class="fab fa-pinterest-p"></i>
                      </a>
                      <a href="#">
                        <i class="fab fa-vimeo-v"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="col-xxl-4 col-xl-4  col-lg-4 col-md-6 col-sm-6 wow fadeInUp"
                data-wow-delay=".4s"
              >
                <div class="single-team mb-30">
                  <div class="thumb">
                    <img
                      src="assets/img/team/team-2.webp"
                      alt="image not found"
                    />
                  </div>
                  <div class="content text-center">
                    <div class="team-desc">
                      <a href="team.html" class="job">
                        Teacher
                      </a>
                      <h5>
                        <a href="team-details.html" class="title">
                          Suraiya akter rika
                        </a>
                      </h5>
                    </div>
                    <div class="team-social">
                      <a href="#">
                        <i class="fab fa-facebook-f"></i>
                      </a>
                      <a href="#">
                        <i class="fab fa-twitter"></i>
                      </a>
                      <a href="#">
                        <i class="fab fa-pinterest-p"></i>
                      </a>
                      <a href="#">
                        <i class="fab fa-vimeo-v"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="col-xxl-4  col-xl-4  col-lg-4 col-md-6 col-sm-6 wow fadeInUp"
                data-wow-delay=".6s"
              >
                <div class="single-team mb-30">
                  <div class="thumb">
                    <img
                      src="assets/img/team/team-3.webp"
                      alt="image not found"
                    />
                  </div>
                  <div class="content text-center">
                    <div class="team-desc">
                      <a href="team.html" class="job">
                        Designer
                      </a>
                      <h5>
                        <a href="team-details.html" class="title">
                          Malcolm Function
                        </a>
                      </h5>
                    </div>
                    <div class="team-social">
                      <a href="#">
                        <i class="fab fa-facebook-f"></i>
                      </a>
                      <a href="#">
                        <i class="fab fa-twitter"></i>
                      </a>
                      <a href="#">
                        <i class="fab fa-pinterest-p"></i>
                      </a>
                      <a href="#">
                        <i class="fab fa-vimeo-v"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-xxl-12">
                <div class="text-center">
                  <a href="team.html" class="team-action-btn">
                    View All Team <i class="fal fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          class="cta-area cta-1-space pt-135 pb-135 bg-default"
          data-bg-color="#4a2593"
          // data-background="assets/img/bg/cta-1.webp"
          style={{ backgroundColor: "rgb(74, 37, 147)" }}
        >
          <div class="container">
            <div class="row align-items-center">
              <div
                class="col-xxl-6 col-xl-8 col-lg-7 wow fadeInUp"
                data-wow-delay=".2s"
              >
                <div class="cta-left mb-30 mb-lg-0">
                  <span class="cta-subtitle-1">Call To Action</span>
                  <h3 class="cta-title-1">
                    Join Sasup and increase your productivity.
                  </h3>
                </div>
              </div>
              <div
                class="col-xxl-6 col-xl-4 col-lg-5 wow fadeInUp"
                data-wow-delay=".4s"
              >
                <div class="cta-actions text-lg-end">
                  <a href="sign-in.html" class="cta-border-btn">
                    Get Started
                  </a>
                  <a href="sign-up.html" class="cta-solid-btn ml-15">
                    Sign Up Free
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer class="footer-area pt-90">
        <div class=" container pb-80 has-border-bottom">
          <div class="footer-1">
            <div class="row">
              <div class="col-xxl-4 col-xl-4 col-lg-4 order-last col-sm-12 order-lg-first">
                <div
                  class="footer-widget wow fadeInUp mb-30 mb-md-0"
                  data-wow-delay=".2s"
                >
                  <div class="logo mb-20">
                    <a href="index-3.html">
                      <img
                        src="assets/img/logo/logo.webp"
                        alt="image not found"
                      />
                    </a>
                  </div>
                  <p class="widget-text">
                    Me old mucker cheeky bugger is dont
                    <br /> want agro in my flat little.
                  </p>
                  <a
                    href="contact.html"
                    class="sasup-theme-btn sasup-theme-btn-2"
                  >
                    <span>Get started</span>
                  </a>
                </div>
              </div>
              <div class="col-xxl-8 col-xl-8 col-lg-8">
                <div class="row mb-30 mb-lg-0">
                  <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-6">
                    <div
                      class="footer-widget wow fadeInUp mb-30 mb-md-0"
                      data-wow-delay=".4s"
                    >
                      <h5>Product</h5>
                      <ul>
                        <li></li>
                        <li>
                          <a href="service.html">Product Tour</a>
                        </li>
                        <li>
                          <a href="about.html">Analytics</a>
                        </li>
                        <li>
                          <a href="service-details.html">Product Overview</a>
                        </li>
                        <li>
                          <a href="about.html">Whats New</a>
                        </li>
                        <li>
                          <a href="portfolio.html">Templates</a>
                        </li>
                        <li>
                          <a href="about.html">Quotes</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div
                    class="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-6 wow fadeInUp"
                    data-wow-delay=".6s"
                  >
                    <div class="footer-widget">
                      <h5>Resources</h5>
                      <ul>
                        <li></li>
                        <li>
                          <a href="about.html">Documentation</a>
                        </li>
                        <li>
                          <a href="service.html">Solutions</a>
                        </li>
                        <li>
                          <a href="about.html">Road Map</a>
                        </li>
                        <li>
                          <a href="portfolio.html">Brand Assets</a>
                        </li>
                        <li>
                          <a href="service.html">Feature List</a>
                        </li>
                        <li>
                          <a href="team.html">User Flow</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div
                    class="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-6 wow fadeInUp"
                    data-wow-delay=".8s"
                  >
                    <div class="footer-widget">
                      <h5>Solutions</h5>
                      <ul>
                        <li></li>
                        <li>
                          <a href="contact.html">Support</a>
                        </li>
                        <li>
                          <a href="about.html">Proposals</a>
                        </li>
                        <li>
                          <a href="about.html">Guides</a>
                        </li>
                        <li>
                          <a href="contact.html">Contracts</a>
                        </li>
                        <li>
                          <a href="about.html">Signatures</a>
                        </li>
                        <li>
                          <a href="about.html">Payments</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default About;
