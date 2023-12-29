import React, { useEffect, useState } from "react";

import Header2 from "./Header2";
import back from "./outo.png";
import backs from "./footimg.jpg";
import pro from "./protwo.webp";
import Footer from "./Footer";
const Home2 = () => {
  const backgroundStyle = {
    backgroundImage: `url(${back})`,
  };
  const backgroundStyles = {
    backgroundImage: `url(${backs})`,
  };
  return (
    <>
      <body>
        <main>
          <div
            class="hero-area sasup-hero-height-4 p-rel bg-top-left d-flex align-items-center"
            // data-background="assets/img/bg/banner-1.webp"
            style={backgroundStyle}
          >
            <div class="hero-area-shape-wrap-4">
              <div class="shape-1">
                <img
                  src="assets/img/icon/icon-4-1.webp"
                  alt="image not found"
                />
              </div>
              <div class="shape-2">
                <img
                  src="assets/img/icon/icon-4-4.webp"
                  alt="image not found"
                />
              </div>
              <div class="shape-3">
                <img
                  src="assets/img/icon/icon-4-6.webp"
                  alt="image not found"
                />
              </div>
            </div>
            <div class="container p-rel">
              <div class="hero-container-shape-wrap-4">
                <div class="shape-3">
                  <img
                    src="assets/img/icon/icon-4-3.webp"
                    alt="image not found"
                  />
                </div>
                <div class="shape-4">
                  <img
                    src="assets/img/icon/icon-4-5.webp"
                    alt="image not found"
                  />
                </div>
              </div>
              <div class="row align-items-center">
                <div class="col-xxl-6 col-xl-6 col-lg-6">
                  <div class="sasup-hero-content-4">
                    <span class="sasup-hero-subtitle-4">
                      Welcome to Edu Pro
                    </span>
                    <h3 class="sasup-hero-title-4" style={{ color: "#ffc107" }}>
                      Take your <br />
                      School
                      <br /> To the next level
                    </h3>
                    <p class="sasup-hero-text-4">
                      Get your school management solution and other school
                      related software from us
                    </p>
                    <a href="contact.html" class="sasup-hero-started-btn-4">
                      <span>Get Started</span>
                    </a>
                  </div>
                </div>
                <div class="col-xxl-6 col-xl-6 col-lg-6">
                  <div class="sasup-hero-content-right-img-4">
                    <img
                      src={pro}
                      alt="image not found"
                      style={{
                        float: "right",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="service-area pb-180">
            <div class="container">
              <div class="row pb-55">
                <div class="col-xxl-12">
                  <div
                    class="sasup-section-title-wrap-4 text-center wow fadeInUp"
                    data-wow-delay=".2s"
                  >
                    <h4 class="sasup-section-title-4">
                      Simplify your child's education
                      <br /> with Edu Pro Solutions
                    </h4>
                    <p class="sasup-section-subtitle-4">
                      We offer a remedy to stressful school management task
                      <br /> Here are some of the key features we offer:
                    </p>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12">
                  <div
                    class="sasup-service-box-4 p-rel wow fadeInUp"
                    data-wow-delay=".2s"
                  >
                    <div class="sasup-service-box-img-4 pb-35">
                      <img
                        src="assets/img/service/service-4-1.webp"
                        alt="image not found"
                      />
                    </div>
                    <div class="sasup-service-box-content-4 text-center">
                      <h5 class="sasup-service-box-title-4">
                        <a href="service-details.html">
                          Educational account management
                        </a>
                      </h5>
                      <p class="sasup-service-box-text-4">
                        Grow your business with an online store that anyonesmall
                        business global.
                      </p>
                      <a
                        href="service-details.html"
                        class="sasup-service-box-read-more-link-4"
                      >
                        Learn More <i class="fal fa-long-arrow-right"></i>
                      </a>
                    </div>
                    <div class="sasup-vertical-animated-line-4"></div>
                  </div>
                </div>
                <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12">
                  <div
                    class="sasup-service-box-4 pl-55 p-rel wow fadeInUp"
                    data-wow-delay=".4s"
                  >
                    <div class="sasup-service-box-img-4 pb-35">
                      <img
                        src="assets/img/service/service-4-2.webp"
                        alt="image not found"
                      />
                    </div>
                    <div class="sasup-service-box-content-4 text-center">
                      <h5 class="sasup-service-box-title-4">
                        <a href="service-details.html">Student Enrollment</a>
                      </h5>
                      <p class="sasup-service-box-text-4">
                        Grow your business with an online store that anyonesmall
                        business global.
                      </p>
                      <a
                        href="service-details.html"
                        class="sasup-service-box-read-more-link-4"
                      >
                        Learn More <i class="fal fa-long-arrow-right"></i>
                      </a>
                    </div>
                    <div class="sasup-vertical-animated-line-4 slow"></div>
                  </div>
                </div>
                <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12">
                  <div
                    class="sasup-service-box-4 pl-65 p-rel wow fadeInUp"
                    data-wow-delay=".6s"
                  >
                    <div class="sasup-service-box-img-4 pb-35">
                      <img
                        src="assets/img/service/service-4-3.webp"
                        alt="image not found"
                      />
                    </div>
                    <div class="sasup-service-box-content-4 text-center">
                      <h5 class="sasup-service-box-title-4">
                        <a href="service-details.html">
                          Report card preparation
                        </a>
                      </h5>
                      <p class="sasup-service-box-text-4">
                        Grow your business with an online store that anyonesmall
                        business global.
                      </p>
                      <a
                        href="service-details.html"
                        class="sasup-service-box-read-more-link-4"
                      >
                        Learn More <i class="fal fa-long-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12">
                  <div
                    class="sasup-service-box-4 p-rel wow fadeInUp"
                    data-wow-delay=".2s"
                  >
                    <div class="sasup-service-box-img-4 pb-35">
                      <img
                        src="assets/img/service/service-4-1.webp"
                        alt="image not found"
                      />
                    </div>
                    <div class="sasup-service-box-content-4 text-center">
                      <h5 class="sasup-service-box-title-4">
                        <a href="service-details.html">
                          Online School fees Payment
                        </a>
                      </h5>
                      <p class="sasup-service-box-text-4">
                        Grow your business with an online store that anyonesmall
                        business global.
                      </p>
                      <a
                        href="service-details.html"
                        class="sasup-service-box-read-more-link-4"
                      >
                        Learn More <i class="fal fa-long-arrow-right"></i>
                      </a>
                    </div>
                    <div class="sasup-vertical-animated-line-4"></div>
                  </div>
                </div>
                <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12">
                  <div
                    class="sasup-service-box-4 pl-55 p-rel wow fadeInUp"
                    data-wow-delay=".4s"
                  >
                    <div class="sasup-service-box-img-4 pb-35">
                      <img
                        src="assets/img/service/service-4-2.webp"
                        alt="image not found"
                      />
                    </div>
                    <div class="sasup-service-box-content-4 text-center">
                      <h5 class="sasup-service-box-title-4">
                        <a href="service-details.html">Online Exams</a>
                      </h5>
                      <p class="sasup-service-box-text-4">
                        Grow your business with an online store that anyonesmall
                        business global.
                      </p>
                      <a
                        href="service-details.html"
                        class="sasup-service-box-read-more-link-4"
                      >
                        Learn More <i class="fal fa-long-arrow-right"></i>
                      </a>
                    </div>
                    <div class="sasup-vertical-animated-line-4 slow"></div>
                  </div>
                </div>
                <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12">
                  <div
                    class="sasup-service-box-4 pl-65 p-rel wow fadeInUp"
                    data-wow-delay=".6s"
                  >
                    <div class="sasup-service-box-img-4 pb-35">
                      <img
                        src="assets/img/service/service-4-3.webp"
                        alt="image not found"
                      />
                    </div>
                    <div class="sasup-service-box-content-4 text-center">
                      <h5 class="sasup-service-box-title-4">
                        <a href="service-details.html">
                          Lesson Notes and Attendance
                        </a>
                      </h5>
                      <p class="sasup-service-box-text-4">
                        Grow your business with an online store that anyonesmall
                        business global.
                      </p>
                      <a
                        href="service-details.html"
                        class="sasup-service-box-read-more-link-4"
                      >
                        Learn More <i class="fal fa-long-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="features-about-area pb-150">
            <div class="container p-rel">
              <div class="sasup-features-about-left-shape-4">
                <img
                  src="assets/img/shape/line-section.webp"
                  alt="image not found"
                />
              </div>
              <div class="sasup-features-about-left-shape-4-2">
                <img
                  src="assets/img/shape/line-section-inner.webp"
                  alt="image not found"
                />
              </div>
              <div class="row">
                <div class="col-xxl-8 col-xl-6 col-lg-6">
                  <div class="sasup-features-about-box-main-space pl-10 pr-90">
                    <div class="sasup-features-about-dashbord-wrap-4 sasup-features-about-dashbord-has-before">
                      <div class="row g-20  sasup-features-about-custom-row">
                        <div class="col-xxl-6 col-xl-6 col-lg-6">
                          <div class="sasup-features-about-dashbord-img-4-1">
                            <img
                              src="assets/img/dashbord/dashbord-4-1.webp"
                              class="wow bounceInUp"
                              data-wow-delay=".1"
                              alt="image not found"
                            />
                          </div>
                          <div class="sasup-features-about-dashbord-img-4-2">
                            <img
                              src="assets/img/dashbord/dashbord-4-3.webp"
                              class="wow bounceInUp"
                              data-wow-delay=".2s"
                              alt="image not found"
                            />
                          </div>
                        </div>
                        <div class="col-xxl-6 col-xl-6 col-lg-6">
                          <div class="sasup-features-about-dashbord-img-4-3">
                            <img
                              src="assets/img/dashbord/dashbord-4-2.webp"
                              class="wow bounceInUp"
                              data-wow-delay=".3s"
                              alt="image not found"
                            />
                          </div>
                          <div class="sasup-features-about-dashbord-img-4-4">
                            <img
                              src="assets/img/dashbord/dashbord-4-4.webp"
                              class="wow bounceInUp"
                              data-wow-delay=".4s"
                              alt="image not found"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-xxl-4 col-xl-6 col-lg-6">
                  <div
                    class="sasup-features-about-box-right pt-15 wow fadeInUp"
                    data-wow-delay=".2s"
                  >
                    <div class="sasup-section-title-wrap-4 mb-30">
                      <span class="sasup-section-badge-4 mb-15">
                        Modern Graphics
                      </span>
                      <h4 class="sasup-section-title-4">
                        A feature rich software that puts you in charge
                      </h4>
                      <p class="sasup-section-subtitle-4">
                        Edu Pro is loaded with numerous features that puts you
                        in charge and allow you to manage your school from
                        anywhere. Our features includes School fees payment
                        online, CBT, E-learning, school accounting amongst,
                        staff payroll system and many others
                      </p>
                    </div>
                    <a
                      href="service-details.html"
                      class="sasup-featured-bordered-btn-4"
                    >
                      <span>View all Features</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="features-area has-feature-top-bg pt-120">
            <div class="container">
              <div class="row">
                <div class="col-xxl-12">
                  <div
                    class="sasup-section-title-wrap-4 mb-70 text-center wow fadeInUp"
                    data-wow-delay=".2s"
                  >
                    <span class="sasup-section-badge-4 mb-15">Features</span>
                    <h4 class="sasup-section-title-4">
                      How Edu Pro Can Benefit your School
                      <br />
                      Get the best solution
                    </h4>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                  <div
                    class="sasup-features-box-4 mb-30 bg-default wow fadeInRight"
                    data-wow-delay=".2s"
                    data-background="assets/img/bg/feature-bg-1.webp"
                  >
                    <div class="sasup-features-box-content-top-4 mb-65">
                      <h4 class="sasup-features-box-title-4">
                        <a href="service.html">
                          Reduce Costs and increase
                          <br /> financial efficiency
                        </a>
                      </h4>
                      <a
                        href="service.html"
                        class="sasup-service-box-read-more-link-4"
                      >
                        Learn More <i class="fal fa-long-arrow-right"></i>
                      </a>
                    </div>
                    <div class="sasup-features-box-content-bottom-4-1">
                      <div class="sasup-features-box-content-img-left-4">
                        <img
                          src="assets/img/feature/feature-3d-1.webp"
                          alt="image not found"
                        />
                      </div>
                      <div class="sasup-features-box-content-img-wrap-4">
                        <div class="item-1">
                          <img
                            src="assets/img/dashbord/dashbord-feature-4-1.webp"
                            class="wow bounceInUp"
                            data-wow-delay=".1s"
                            alt="image not found"
                          />
                        </div>
                        <div class="item-2">
                          <img
                            src="assets/img/dashbord/dashbord-feature-4-2.webp"
                            class="wow bounceInUp"
                            data-wow-delay=".3s"
                            alt="image not found"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                  <div
                    class="sasup-features-box-4 mb-30 style-2 bg-default wow fadeInLeft"
                    data-wow-delay=".3s"
                    data-background="assets/img/bg/feature-bg-2.webp"
                  >
                    <div class="sasup-features-box-content-top-4 mb-95">
                      <h4 class="sasup-features-box-title-4">
                        <a href="service.html">
                          Enhanced parent
                          <br /> engagement systems
                        </a>
                      </h4>
                      <a
                        href="service.html"
                        class="sasup-service-box-read-more-link-4"
                      >
                        Learn More <i class="fal fa-long-arrow-right"></i>
                      </a>
                    </div>
                    <div class="sasup-features-box-content-bottom-4-2">
                      <div class="sasup-features-box-3d-img-4-2">
                        <img
                          src="assets/img/feature/feature-3d-2.webp"
                          alt="image not found"
                        />
                      </div>
                      <div class="sasup-features-box-3d-img-4-2-2">
                        <img
                          src="assets/img/dashbord/dashbord-4-2-1.webp"
                          alt="image not found"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                  <div
                    class="sasup-features-box-4 mb-30 style-3 bg-default wow fadeInRight"
                    data-wow-delay=".4s"
                    data-background="assets/img/bg/feature-bg-4.webp"
                  >
                    <div class="sasup-features-box-content-top-4 mb-60">
                      <h4 class="sasup-features-box-title-4">
                        <a href="service.html">
                          Enhance student’s
                          <br /> learning experience
                        </a>
                      </h4>
                      <a
                        href="service.html"
                        class="sasup-service-box-read-more-link-4"
                      >
                        Learn More <i class="fal fa-long-arrow-right"></i>
                      </a>
                    </div>
                    <div class="row">
                      <div class="col-xxl-8">
                        <div class="sasup-features-box-content-bottom-4-3">
                          <div class="sasup-features-box-3d-img-4-3">
                            <img
                              src="assets/img/dashbord/analytics-dashbord-4-1.webp"
                              class="wow bounceInUp"
                              data-wow-delay=".1s"
                              alt="image not found"
                            />
                          </div>
                          <div class="sasup-features-box-3d-img-4-2-3">
                            <img
                              src="assets/img/dashbord/analytics-dashbord-4-2.webp"
                              class="wow bounceInUp"
                              data-wow-delay=".3s"
                              alt="image not found"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="col-xxl-4">
                        <div class="sasup-features-box-3d-img-4-3-img">
                          <img
                            src="assets/img/feature/feature-3d-3.webp"
                            alt="image not found"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                  <div
                    class="sasup-features-box-4 mb-30 style-4 bg-default wow fadeInLeft"
                    data-wow-delay=".6s"
                    data-background="assets/img/bg/feature-bg-5.webp"
                  >
                    <div class="sasup-features-box-content-top-4 mb-60">
                      <h4 class="sasup-features-box-title-4">
                        <a href="service.html">
                          Improve staff productivity
                          <br /> Productivity
                        </a>
                      </h4>
                      <a
                        href="service.html"
                        class="sasup-service-box-read-more-link-4"
                      >
                        Learn More <i class="fal fa-long-arrow-right"></i>
                      </a>
                    </div>
                    <div class="row">
                      <div class="col-xxl-7">
                        <div class="sasup-features-message-img-4-1">
                          <img
                            src="assets/img/feature/feature-3d-4.webp"
                            class="wow bounceInUp"
                            data-wow-delay=".1s"
                            alt="image not found"
                          />
                        </div>
                      </div>
                      <div class="col-xxl-5">
                        <div class="sasup-features-message-img-4-2">
                          <img
                            src="assets/img/feature/feature-3d-5.webp"
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

          {/*}   <div class="testimonial-area p-rel pt-180 pb-145">
            <div class="sasup-testimonial-line-shape-4">
              <img
                src="assets/img/shape/line-testimonial.webp"
                alt="image not found"
              />
            </div>
            <div class="sasup-testimonial-user-control-active-4">
              <div class="sasup-t-user-1">
                <img
                  src="assets/img/user/t-user-1.webp"
                  alt="image not found"
                />
              </div>
              <div class="sasup-t-user-2">
                <img
                  src="assets/img/user/t-user-2.webp"
                  alt="image not found"
                />
              </div>
              <div class="sasup-t-user-3">
                <img
                  src="assets/img/user/t-user-4.webp"
                  alt="image not found"
                />
              </div>
              <div class="sasup-t-user-4">
                <img
                  src="assets/img/user/t-user-5.webp"
                  alt="image not found"
                />
              </div>
            </div>
            <div class="container">
              <div
                class="sasup-testimonial-has-map-bg-4"
                data-background="assets/img/bg/map.webp"
              >
                <div class="row justify-content-center mb-40">
                  <div class="col-xxl-8 col-xl-10">
                    <div class="p-rel">
                      <div class=" swiper-container">
                        <div class="swiper-wrapper">
                          <div class="swiper-slide">
                            <div class="sasup-testimonial-box-4  text-center">
                              <div class="sasup-testimonial-author-box mb-15">
                                <div class="sasup-testimonial-author-box-img-4">
                                  <img
                                    src="assets/img/user/user-4.webp"
                                    alt="image not found"
                                  />
                                </div>
                                <div class="sasup-testimonial-author-box-content-4">
                                  <h5 class="sasup-testimonial-author-box-name-4">
                                    Elle Rabe,{" "}
                                  </h5>
                                  <span class="sasup-testimonial-author-box-designation-4">
                                    co founder
                                  </span>
                                </div>
                              </div>
                              <div class="sasup-testimonial-box-content-main-4">
                                <h4 class="sasup-testimonial-box-content-title-4">
                                  “Helps me Stay
                                  <br /> On top of saas and software."
                                </h4>
                                <p class="sasup-testimonial-box-content-text-4">
                                  Explain how the customer was in a similar
                                  situation as your user, struggling with
                                  similar problems. Talk about their transition
                                  to your product and the outcome: how it solved
                                  their problems and helped them achieve their
                                  goals.
                                </p>
                                <div class="sasup-testimonial-box-brand-4">
                                  <img
                                    src="assets/img/brand/brand-4-1-1.webp"
                                    alt="image not found"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="swiper-slide">
                            <div class="sasup-testimonial-box-4  text-center">
                              <div class="sasup-testimonial-author-box mb-15">
                                <div class="sasup-testimonial-author-box-img-4">
                                  <img
                                    src="assets/img/user/user-4.webp"
                                    alt="image not found"
                                  />
                                </div>
                                <div class="sasup-testimonial-author-box-content-4">
                                  <h5 class="sasup-testimonial-author-box-name-4">
                                    Elle Rabe,{" "}
                                  </h5>
                                  <span class="sasup-testimonial-author-box-designation-4">
                                    co founder
                                  </span>
                                </div>
                              </div>
                              <div class="sasup-testimonial-box-content-main-4">
                                <h4 class="sasup-testimonial-box-content-title-4">
                                  “Helps me Stay
                                  <br /> On top of saas and software."
                                </h4>
                                <p class="sasup-testimonial-box-content-text-4">
                                  Explain how the customer was in a similar
                                  situation as your user, struggling with
                                  similar problems. Talk about their transition
                                  to your product and the outcome: how it solved
                                  their problems and helped them achieve their
                                  goals.
                                </p>
                                <div class="sasup-testimonial-box-brand-4">
                                  <img
                                    src="assets/img/brand/brand-4-1-1.webp"
                                    alt="image not found"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="sasup-testimonial-arrow-4">
                        <button class="testimonial-swiper-button-prev-4 sasup-common-swiper-arrow">
                          <i class="fal fa-angle-left"></i>
                        </button>
                        <button class="testimonial-swiper-button-next-4 sasup-common-swiper-arrow">
                          <i class="fal fa-angle-right"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row justify-content-center">
                  <div class="col-xxl-6 col-xl-8">
                    <div class="sasup-testimonial-funfect-wrap-4">
                      <div class="row">
                        <div class="col-xxl-6 col-xl-6 col-lg-6 col-6">
                          <div class="pl-85">
                            <div class="sasup-testimonial-funfect-single-4">
                              <h4 class="sasup-testimonial-funfect-title-4">
                                28%
                              </h4>
                              <span class="sasup-testimonial-funfect-subtitle-4">
                                Primary Result Stat
                              </span>
                            </div>
                          </div>
                        </div>
                        <div class="col-xxl-6 col-xl-6 col-lg-6 col-6">
                          <div class="text-end">
                            <div class="pr-25">
                              <div class="sasup-testimonial-funfect-single-4 d-inline-block text-start">
                                <h4 class="sasup-testimonial-funfect-title-4">
                                  34x
                                </h4>
                                <span class="sasup-testimonial-funfect-subtitle-4">
                                  Return on Investment
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
                    </div>*/}

          <div
            class="about-dashbord-area pt-120 pb-130 p-rel"
            data-bg-color="#F8F9FA"
          >
            <div class="sasup-about-dashbord-shape-wrap">
              <div class="shape-1">
                <img
                  src="assets/img/shape/shape-4-1.webp"
                  alt="image not found"
                />
              </div>
              <div class="shape-2">
                <img
                  src="assets/img/shape/shape-4-2.webp"
                  alt="image not found"
                />
              </div>
              <div class="shape-3">
                <img
                  src="assets/img/shape/shape-4-3.webp"
                  alt="image not found"
                />
              </div>
              <div class="shape-4">
                <img
                  src="assets/img/shape/shape-4-4.webp"
                  alt="image not found"
                />
              </div>
              <div class="shape-5">
                <img
                  src="assets/img/shape/shape-4-5.webp"
                  alt="image not found"
                />
              </div>
            </div>
            <div class="container">
              <div class="row pb-65">
                <div class="col-xxl-7 col-xl-7 col-lg-12">
                  <div class="sasup-about-dashbord-left-4">
                    <div class="sasup-about-dashbord-avatar-4">
                      <img
                        src="assets/img/feature/about-3d.webp"
                        alt="image not found"
                      />
                    </div>
                    <div class="sasup-about-dashbord-avatar-4-2">
                      <img
                        src="assets/img/dashbord/tablet.webp"
                        alt="image not found"
                      />
                    </div>
                  </div>
                </div>
                <div class="col-xxl-5 col-xl-5 col-lg-12">
                  <div
                    class="sasup-about-dashbord-right-4 pt-25 wow fadeInUp"
                    data-wow-delay=".2s"
                  >
                    <div class="sasup-section-title-wrap-4 mb-30">
                      <span class="sasup-section-badge-4 mb-15">
                        {" "}
                        Workflow Integration
                      </span>
                      <h4 class="sasup-section-title-4">
                        Why you
                        <br /> Should choose Sasup
                      </h4>
                      <p class="sasup-section-subtitle-4">
                        So how does it work? Lets check our Getting Started
                        tutorial pre-made templates.
                      </p>
                    </div>
                    <div class="sasup-sm-project-template-box-4">
                      <div class="sasup-sm-project-template-box-img-4">
                        <img
                          src="assets/img/user/t-user-2.webp"
                          alt="image not found"
                        />
                        <div class="sasup-sm-project-template-box-icon-4">
                          <img
                            src="assets/img/icon/star.webp"
                            alt="image not found"
                          />
                        </div>
                      </div>
                      <div class="sasup-sm-project-template-box-content-4">
                        <p>
                          <span>We have three projects template</span> large
                          number of possibilities to customize.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="sasup-about-dashbord-service-wrap-4">
                <div class="row">
                  <div class="col-xxl-3 col-xl-3 col-lg-6 col-md-6 col-sm-12">
                    <div
                      class="sasup-about-dashbord-service-single-4 wow fadeInUp"
                      data-wow-delay=".2s"
                    >
                      <div class="sasup-about-dashbord-service-icon-4">
                        <img
                          src="assets/img/icon/service-icon-1.webp"
                          alt="image not found"
                        />
                      </div>
                      <div class="sasup-about-dashbord-service-content-4">
                        <h5 class="sasup-about-dashbord-service-title-4">
                          Daily Auto Update
                        </h5>
                        <a
                          href="service.html"
                          class="sasup-about-dashbord-service-link-4"
                        >
                          Learn More <i class="fal fa-long-arrow-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="col-xxl-3 col-xl-3 col-lg-6 col-md-6 col-sm-12">
                    <div
                      class="sasup-about-dashbord-service-single-4 wow fadeInUp"
                      data-wow-delay=".3s"
                    >
                      <div class="sasup-about-dashbord-service-icon-4">
                        <img
                          src="assets/img/icon/service-icon-2.webp"
                          alt="image not found"
                        />
                      </div>
                      <div class="sasup-about-dashbord-service-content-4">
                        <h5 class="sasup-about-dashbord-service-title-4">
                          Why Choose Sasup
                        </h5>
                        <a
                          href="service.html"
                          class="sasup-about-dashbord-service-link-4"
                        >
                          Learn More <i class="fal fa-long-arrow-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="col-xxl-3 col-xl-3 col-lg-6 col-md-6 col-sm-12">
                    <div
                      class="sasup-about-dashbord-service-single-4 wow fadeInUp"
                      data-wow-delay=".4s"
                    >
                      <div class="sasup-about-dashbord-service-icon-4">
                        <img
                          src="assets/img/icon/service-icon-3.webp"
                          alt="image not found"
                        />
                      </div>
                      <div class="sasup-about-dashbord-service-content-4">
                        <h5 class="sasup-about-dashbord-service-title-4">
                          Accelerated Process
                        </h5>
                        <a
                          href="service.html"
                          class="sasup-about-dashbord-service-link-4"
                        >
                          Learn More <i class="fal fa-long-arrow-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="col-xxl-3 col-xl-3 col-lg-6 col-md-6 col-sm-12">
                    <div
                      class="sasup-about-dashbord-service-single-4 wow fadeInUp"
                      data-wow-delay=".5s"
                    >
                      <div class="sasup-about-dashbord-service-icon-4">
                        <img
                          src="assets/img/icon/service-icon-4.webp"
                          alt="image not found"
                        />
                      </div>
                      <div class="sasup-about-dashbord-service-content-4">
                        <h5 class="sasup-about-dashbord-service-title-4">
                          Google Analytics
                        </h5>
                        <a
                          href="service.html"
                          class="sasup-about-dashbord-service-link-4"
                        >
                          Learn More <i class="fal fa-long-arrow-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="priceing-area pt-115 pb-115 fix">
            <div class="container">
              <div class="row">
                <div class="col-xxl-12">
                  <div
                    class="sasup-section-heading-5 text-center wow fadeInUp"
                    data-wow-delay=".4s"
                  >
                    <h5 class="sasup-section-heading-5-subtitle">
                      Our Pricing
                    </h5>
                    <h3
                      class="sasup-section-heading-5-title"
                      data-wow-delay=".2s"
                    >
                      The right <span>Pricing </span>for you
                    </h3>
                  </div>
                </div>
              </div>
              <div class="advanced-pricing-tab text-center">
                <div class="d-inline-block p-rel advance-pricing-inline-content-2">
                  <div class="advanced-pricing-tab-key">
                    <span class="advanced-pricing-tab-key-text">
                      Save up to <span>50%</span>
                    </span>
                    <div class="advanced-pricing-tab-key-shape">
                      <img
                        src="assets/img/shape/line_pricing.webp"
                        alt="no image found"
                      />
                    </div>
                  </div>
                  <div class="advanced-pricing-tab-key-2">
                    <ul class="nav" id="myTab" role="tablist">
                      <li class="nav-item" role="presentation">
                        <a
                          class="advanced-tab-1 active annual-tab-btn"
                          id="monthly-tab0"
                          data-bs-toggle="tab"
                          href="#monthly-tab-content0"
                          role="tab"
                        >
                          Monthly{" "}
                        </a>
                      </li>
                      <li class="nav-item" role="presentation">
                        <a
                          class="advanced-tab-2 "
                          id="monthly-tab1"
                          data-bs-toggle="tab"
                          href="#monthly-tab-content1"
                          role="tab"
                        >
                          Yearly
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="advanced-pricing-widget-tab-content-wrapper-2">
                <div class="tab-content" id="myTabContent">
                  <div
                    class="tab-pane fade show show active"
                    id="monthly-tab-content0"
                    role="tabpanel"
                    aria-labelledby="monthly-tab0"
                  >
                    <div class="row">
                      <div class="col-xl-4 col-lg-4 col-md-6">
                        <div class="sasup-pricing-box-2 mb-30">
                          <div class="sasup-pricing-box-top-2">
                            <div class="sasup-pricing-box-hover-bg">
                              <img
                                src="assets/img/shape/shape_circle_price.webp"
                                alt="image not found"
                              />
                            </div>
                            <span class="sasup-pricing-box-top-subtitle-2">
                              Free
                            </span>
                            <h3 class="sasup-pricing-box-top-title-2">Basic</h3>
                            <p class="sasup-pricing-box-top-desc-2">
                              For those getting started with
                              <br />
                              Edu Pro Solutions.
                            </p>
                            <a
                              href="price-02.html"
                              class="sasup-pricing-box-top-action-2 "
                            >
                              Try for Free
                            </a>
                          </div>
                          <div class="sasup-pricing-box-bottom-2">
                            <div class="sasup-pricing-box-bottom-title-wrap-2">
                              {/* <h4 class="sasup-pricing-box-bottom-price-2">
                              $0.0
                            </h4>
                            <span class="sasup-pricing-box-bottom-subtitle-2">
                              Free forever
                            </span> */}
                            </div>
                            <div class="sasup-pricing-box-bottom-list-2">
                              <ul>
                                <li>
                                  <i class="fal fa-check"></i>
                                  <span class="price-feature-text">
                                    Educational account management
                                  </span>
                                </li>
                                <li>
                                  <i class="fal fa-check"></i>
                                  <span class="price-feature-text">
                                    Student Enrollment
                                  </span>
                                </li>
                                <li>
                                  <i class="fal fa-check"></i>
                                  <span class="price-feature-text">
                                    Report Card Preparation
                                  </span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-xl-4 col-lg-4 col-md-6">
                        <div class="sasup-pricing-box-2 mb-30">
                          <div class="sasup-pricing-box-top-2 ">
                            <div class="sasup-pricing-box-hover-bg">
                              <img
                                src="assets/img/shape/shape_circle_price.webp"
                                alt="image not found"
                              />
                            </div>
                            <span class="sasup-pricing-box-top-subtitle-2">
                              STANDARD
                            </span>
                            <h3 class="sasup-pricing-box-top-title-2">
                              Professional
                            </h3>
                            <p class="sasup-pricing-box-top-desc-2">
                              For access to more features
                            </p>
                            <a
                              href="price-02.html"
                              class="sasup-pricing-box-top-action-2 active"
                            >
                              Get Started
                            </a>
                          </div>
                          <div class="sasup-pricing-box-bottom-2">
                            {/* <div class="sasup-pricing-box-bottom-title-wrap-2">
                            <h4 class="sasup-pricing-box-bottom-price-2">
                              $40
                            </h4>
                            <span class="sasup-pricing-box-bottom-subtitle-2">
                              Per editor, per month
                            </span>
                          </div> */}
                            <div class="sasup-pricing-box-bottom-list-2">
                              <ul>
                                <li>
                                  <i class="fal fa-check"></i>
                                  <span class="price-feature-text">
                                    Educational account management
                                  </span>
                                </li>
                                <li>
                                  <i class="fal fa-check"></i>
                                  <span class="price-feature-text">
                                    Student Enrollment
                                  </span>
                                </li>
                                <li>
                                  <i class="fal fa-check"></i>
                                  <span class="price-feature-text">
                                    Report Card Preparation
                                  </span>
                                </li>
                                <li>
                                  <i class="fal fa-check"></i>
                                  <span class="price-feature-text">
                                    Generate Payment Receipt
                                  </span>
                                </li>
                                <li>
                                  <i class="fal fa-check"></i>
                                  <span class="price-feature-text">
                                    Online Exam
                                  </span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-xl-4 col-lg-4 col-md-6">
                        <div class="sasup-pricing-box-2 mb-30">
                          <div class="sasup-pricing-box-top-2 ">
                            <div class="sasup-pricing-box-hover-bg">
                              <img
                                src="assets/img/shape/shape_circle_price.webp"
                                alt="image not found"
                              />
                            </div>
                            <span class="sasup-pricing-box-top-subtitle-2">
                              Premium
                            </span>
                            <h3 class="sasup-pricing-box-top-title-2">
                              Enterprise
                            </h3>
                            <p class="sasup-pricing-box-top-desc-2">
                              For even more features
                            </p>
                            <div class="sasup-pricing-box-bottom-list-2">
                              <ul>
                                <li>
                                  <i class="fal fa-check"></i>
                                  <span class="price-feature-text">
                                    Educational account management
                                  </span>
                                </li>
                                <li>
                                  <i class="fal fa-check"></i>
                                  <span class="price-feature-text">
                                    Student Enrollment
                                  </span>
                                </li>
                                <li>
                                  <i class="fal fa-check"></i>
                                  <span class="price-feature-text">
                                    Report Card Preparation
                                  </span>
                                </li>
                                <li>
                                  <i class="fal fa-check"></i>
                                  <span class="price-feature-text">
                                    Generate Payment Receipt
                                  </span>
                                </li>
                                <li>
                                  <i class="fal fa-check"></i>
                                  <span class="price-feature-text">
                                    Online Exam
                                  </span>
                                </li>
                                <li>
                                  <i class="fal fa-check"></i>
                                  <span class="price-feature-text">
                                    Lesson Notes
                                  </span>
                                </li>
                                <li>
                                  <i class="fal fa-check"></i>
                                  <span class="price-feature-text">
                                    Student Attendance
                                  </span>
                                </li>
                              </ul>
                            </div>
                          </div>
                          {/* <div class="sasup-pricing-box-bottom-2">
                          <div class="sasup-pricing-box-bottom-title-wrap-2">
                            <h4 class="sasup-pricing-box-bottom-price-2">
                              Custom
                            </h4>
                            <span class="sasup-pricing-box-bottom-subtitle-2">
                              Contact our sales team
                            </span>
                          </div>
                          <div class="sasup-pricing-box-bottom-list-2">
                            <ul>
                              <li>
                                <i class="fal fa-check"></i>
                                <span class="price-feature-text">
                                  Private cloud hosting
                                </span>
                              </li>
                              <li>
                                <i class="fal fa-check"></i>
                                <span class="price-feature-text">
                                  SSO / SAML
                                </span>
                              </li>
                              <li>
                                <i class="fal fa-check"></i>
                                <span class="price-feature-text">
                                  Full security
                                </span>
                              </li>
                              <li>
                                <i class="fal fa-check"></i>
                                <span class="price-feature-text">
                                  Uptime agreement
                                </span>
                              </li>
                              <li>
                                <i class="fal fa-check"></i>
                                <span class="price-feature-text">
                                  Custom integrations
                                </span>
                              </li>
                              <li>
                                <i class="fal fa-check"></i>
                                <span class="price-feature-text">
                                  Priority support
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div> */}
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <div
                  class="tab-pane fade show "
                  id="monthly-tab-content1"
                  role="tabpanel"
                  aria-labelledby="monthly-tab1"
                >
                  <div class="row">
                    <div class="col-xl-4 col-lg-4 col-md-6">
                      <div class="sasup-pricing-box-2 mb-30">
                        <div class="sasup-pricing-box-top-2 ">
                          <div class="sasup-pricing-box-hover-bg">
                            <img
                              src="assets/img/shape/shape_circle_price.webp"
                              alt="image not found"
                            />
                          </div>
                          <span class="sasup-pricing-box-top-subtitle-2">
                            Free
                          </span>
                          <h3 class="sasup-pricing-box-top-title-2">Basic</h3>
                          <p class="sasup-pricing-box-top-desc-2">
                            For those getting started with
                            <br />
                            Company.
                          </p>
                          <a
                            href="price-02.html"
                            class="sasup-pricing-box-top-action-2 "
                          >
                            Get Started
                          </a>
                        </div>
                        <div class="sasup-pricing-box-bottom-2">
                          <div class="sasup-pricing-box-bottom-title-wrap-2">
                            <h4 class="sasup-pricing-box-bottom-price-2">
                              $30.0
                            </h4>
                            <span class="sasup-pricing-box-bottom-subtitle-2">
                              Free forever
                            </span>
                          </div>
                          <div class="sasup-pricing-box-bottom-list-2">
                            <ul>
                              <li>
                                <i class="fal fa-check"></i>
                                <span class="price-feature-text">
                                  4 free projects
                                </span>
                              </li>
                              <li>
                                <i class="fal fa-check"></i>
                                <span class="price-feature-text">
                                  Data storage
                                </span>
                              </li>
                              <li>
                                <i class="fal fa-check"></i>
                                <span class="price-feature-text">
                                  For personal us
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-xl-4 col-lg-4 col-md-6">
                      <div class="sasup-pricing-box-2 mb-30">
                        <div class="sasup-pricing-box-top-2 ">
                          <div class="sasup-pricing-box-hover-bg">
                            <img
                              src="assets/img/shape/shape_circle_price.webp"
                              alt="image not found"
                            />
                          </div>
                          <span class="sasup-pricing-box-top-subtitle-2">
                            BEST SELLER
                          </span>
                          <h3 class="sasup-pricing-box-top-title-2">
                            Professional
                          </h3>
                          <p class="sasup-pricing-box-top-desc-2">
                            For smaller teams and professional
                            <br />
                            users.
                          </p>
                          <a
                            href="price-02.html"
                            class="sasup-pricing-box-top-action-2 active"
                          >
                            Get Started
                          </a>
                        </div>
                        <div class="sasup-pricing-box-bottom-2">
                          <div class="sasup-pricing-box-bottom-title-wrap-2">
                            <h4 class="sasup-pricing-box-bottom-price-2">
                              $45
                            </h4>
                            <span class="sasup-pricing-box-bottom-subtitle-2">
                              Per editor, per month
                            </span>
                          </div>
                          <div class="sasup-pricing-box-bottom-list-2">
                            <ul>
                              <li>
                                <i class="fal fa-check"></i>
                                <span class="price-feature-text">
                                  Unlimited projects
                                </span>
                              </li>
                              <li>
                                <i class="fal fa-check"></i>
                                <span class="price-feature-text">
                                  Data storage
                                </span>
                              </li>
                              <li>
                                <i class="fal fa-check"></i>
                                <span class="price-feature-text">
                                  For personal us
                                </span>
                              </li>
                              <li>
                                <i class="fal fa-check"></i>
                                <span class="price-feature-text">
                                  Mobile verison
                                </span>
                              </li>
                              <li>
                                <i class="fal fa-check"></i>
                                <span class="price-feature-text">
                                  Full security
                                </span>
                              </li>
                              <li>
                                <i class="fal fa-check"></i>
                                <span class="price-feature-text">
                                  Priority support
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-xl-4 col-lg-4 col-md-6">
                      <div class="sasup-pricing-box-2 mb-30">
                        <div class="sasup-pricing-box-top-2 ">
                          <div class="sasup-pricing-box-hover-bg">
                            <img
                              src="assets/img/shape/shape_circle_price.webp"
                              alt="image not found"
                            />
                          </div>
                          <span class="sasup-pricing-box-top-subtitle-2">
                            POG CHAMP
                          </span>
                          <h3 class="sasup-pricing-box-top-title-2">
                            Enterprise
                          </h3>
                          <p class="sasup-pricing-box-top-desc-2">
                            For scaling teams requiring customization and
                            security.
                          </p>
                          <a
                            href="price-02.html"
                            class="sasup-pricing-box-top-action-2 "
                          >
                            Get Started
                          </a>
                        </div>
                        <div class="sasup-pricing-box-bottom-2">
                          <div class="sasup-pricing-box-bottom-title-wrap-2">
                            <h4 class="sasup-pricing-box-bottom-price-2">
                              Custom
                            </h4>
                            <span class="sasup-pricing-box-bottom-subtitle-2">
                              Contact our sales team
                            </span>
                          </div>
                          <div class="sasup-pricing-box-bottom-list-2">
                            <ul>
                              <li>
                                <i class="fal fa-check"></i>
                                <span class="price-feature-text">
                                  Private cloud hosting
                                </span>
                              </li>
                              <li>
                                <i class="fal fa-check"></i>
                                <span class="price-feature-text">
                                  SSO / SAML
                                </span>
                              </li>
                              <li>
                                <i class="fal fa-check"></i>
                                <span class="price-feature-text">
                                  Full security
                                </span>
                              </li>
                              <li>
                                <i class="fal fa-check"></i>
                                <span class="price-feature-text">
                                  Uptime agreement
                                </span>
                              </li>
                              <li>
                                <i class="fal fa-check"></i>
                                <span class="price-feature-text">
                                  Custom integrations
                                </span>
                              </li>
                              <li>
                                <i class="fal fa-check"></i>
                                <span class="price-feature-text">
                                  Priority support
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}
                </div>
              </div>
            </div>
          </div>
          {/*}    <div class="blog-area pt-120 pb-90">
            <div class="container">
              <div class="row">
                <div class="col-xxl-12">
                  <div
                    class="sasup-section-title-wrap-4 mb-30 text-center wow fadeInUp"
                    data-wow-delay=".3s"
                  >
                    <span class="sasup-section-badge-4 mb-15">
                      {" "}
                      Letest Post
                    </span>
                    <h4 class="sasup-section-title-4">
                      Take a look at the latest
                      <br /> Articles from
                    </h4>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                  <div
                    class="sasup-blog-box-4 mb-30 wow fadeInUp"
                    data-wow-delay=".3s"
                  >
                    <div class="sasup-blog-box-img-4">
                      <a href="blog-details.html">
                        <img
                          src="assets/img/blog/blog-4-1.webp"
                          alt="image not found"
                        />
                      </a>
                    </div>
                    <div class="sasup-blog-box-content-4 pt-25">
                      <a
                        href="blog-details.html"
                        class="sasup-blog-box-category-4 mb-10"
                      >
                        Design Tools
                      </a>
                      <h4 class="sasup-blog-box-title-4">
                        <a href="blog-details.html">
                          A guide to market your Saas product
                        </a>
                      </h4>
                    </div>
                    <div class="sasup-blog-box-meta-4">
                      <span>October 28, 2022</span>
                      <span>4 min read</span>
                    </div>
                  </div>
                </div>
                <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                  <div
                    class="sasup-blog-box-4 mb-30 wow fadeInUp"
                    data-wow-delay=".5s"
                  >
                    <div class="sasup-blog-box-img-4">
                      <a href="blog-details.html">
                        <img
                          src="assets/img/blog/blog-4-2.webp"
                          alt="image not found"
                        />
                      </a>
                    </div>
                    <div class="sasup-blog-box-content-4 pt-25">
                      <a
                        href="blog-details.html"
                        class="sasup-blog-box-category-4 mb-10"
                      >
                        Development
                      </a>
                      <h4 class="sasup-blog-box-title-4">
                        <a href="blog-details.html">
                          Is your company facing a social media crisis?
                        </a>
                      </h4>
                    </div>
                    <div class="sasup-blog-box-meta-4">
                      <span>April 12, 2022</span>
                      <span>4 min read</span>
                    </div>
                  </div>
                </div>
                <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                  <div
                    class="sasup-blog-box-4 mb-30 wow fadeInUp"
                    data-wow-delay=".7s"
                  >
                    <div class="sasup-blog-box-img-4">
                      <a href="blog-details.html">
                        <img
                          src="assets/img/blog/blog-4-3.webp"
                          alt="image not found"
                        />
                      </a>
                    </div>
                    <div class="sasup-blog-box-content-4 pt-25">
                      <a
                        href="blog-details.html"
                        class="sasup-blog-box-category-4 mb-10"
                      >
                        Design Tools
                      </a>
                      <h4 class="sasup-blog-box-title-4">
                        <a href="blog-details.html">
                          A guide to market your Saas product
                        </a>
                      </h4>
                    </div>
                    <div class="sasup-blog-box-meta-4">
                      <span>October 28, 2022</span>
                      <span>4 min read</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
                    </div>*/}

          <div class="cta-area wow fadeInUp" data-wow-delay=".6s">
            <div class="container">
              <div class="row">
                <div class="col-xxl-12 col-xl-12">
                  <div
                    class="sasup-cta-box-4 text-center bg-default  pt-90 pb-95"
                    style={backgroundStyles}
                  >
                    <h4 class="sasup-cta-title-4">
                      Do you want to get in touch with us?
                      <br />
                      Do you have any question?
                    </h4>
                    <span class="sasup-cta-subtitle-4 mb-30">
                      We implore you to try out school solution without stress
                    </span>
                    <a href="/contact" class="sasup-hero-started-btn-4">
                      <span>Contact Us</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </body>
    </>
  );
};

export default Home2;
