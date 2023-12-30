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
                      school
                      <br /> to the next level
                    </h3>
                    <p class="sasup-hero-text-4">
                      Your solution to school management hurdles. It has
                      encompassing features that makes school administration
                      stress-free.
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
                      Be abreast with your child's educational
                      <br /> progress with Edu Pro Solutions
                    </h4>
                    <p class="sasup-section-subtitle-4">
                      Our distinctive features for an all round school task.
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
                        src="assets/img/service/stu.png"
                        alt="image not found"
                      />
                    </div>
                    <div class="sasup-service-box-content-4 text-center">
                      <h5 class="sasup-service-box-title-4">
                        <a href="/services">
                          Educational account management and Enrollment
                        </a>
                      </h5>
                      <p class="sasup-service-box-text-4">
                        Easiness in admitting new and returning students. Keeps
                        records of enrolled students over time.
                      </p>
                      <a
                        href="/services"
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
                        src="assets/img/service/time.png"
                        alt="image not found"
                      />
                    </div>
                    <div class="sasup-service-box-content-4 text-center">
                      <h5 class="sasup-service-box-title-4">
                        <a href="/services">Student Attendance</a>
                      </h5>
                      <p class="sasup-service-box-text-4">
                        The teachers marks the automated attendance which can be
                        sent to their parent via sms or mail.
                      </p>
                      <a
                        href="/services"
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
                        src="assets/img/service/rep.png"
                        alt="image not found"
                      />
                    </div>
                    <div class="sasup-service-box-content-4 text-center">
                      <h5 class="sasup-service-box-title-4">
                        <a href="/services">Report card preparation</a>
                      </h5>
                      <p class="sasup-service-box-text-4">
                        Auto-generated report that collates and prepares result.
                        Automatically received by parents through sms and mail.
                      </p>
                      <a
                        href="/services"
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
                        src="assets/img/service/pay.png"
                        alt="image not found"
                      />
                    </div>
                    <div class="sasup-service-box-content-4 text-center">
                      <h5 class="sasup-service-box-title-4">
                        <a href="/services">Online School fees Payment</a>
                      </h5>
                      <p class="sasup-service-box-text-4">
                        It automatically generates receipts for the students for
                        each transactions a student makes and provides instant
                        confirmation of payments to guardians or parents.
                      </p>
                      <a
                        href="/services"
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
                        src="assets/img/service/exam.png"
                        alt="image not found"
                      />
                    </div>
                    <div class="sasup-service-box-content-4 text-center">
                      <h5 class="sasup-service-box-title-4">
                        <a href="/services">Online Exams</a>
                      </h5>
                      <p class="sasup-service-box-text-4">
                        Bulk exams can be set for different classes and time
                        frame can be fixed. Online exams are uploaded to the
                        result portal immediately.
                      </p>
                      <a
                        href="/services"
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
                        src="assets/img/service/note.png"
                        alt="image not found"
                      />
                    </div>
                    <div class="sasup-service-box-content-4 text-center">
                      <h5 class="sasup-service-box-title-4">
                        <a href="/services">Lesson Notes and Attendance</a>
                      </h5>
                      <p class="sasup-service-box-text-4">
                        Upload lesson notes for each subject in different
                        formats, pdf or images. mail.
                      </p>
                      <a
                        href="/services"
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

          <div class="features-area has-feature-top-bg pt-120">
            <div class="container">
              <div class="row">
                <div class="col-xxl-12">
                  <div
                    class="sasup-section-title-wrap-4 mb-70 text-center wow fadeInUp"
                    data-wow-delay=".2s"
                  >
                    <span class="sasup-section-badge-4 mb-15">About Us</span>
                    <h4 class="sasup-section-title-4">
                      Why Choose Edu Pro Solution?
                    </h4>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
                  <div
                    class="sasup-features-box-4 mb-30 bg-default wow fadeInRight"
                    data-wow-delay=".2s"
                    data-background="assets/img/bg/feature-bg-1.webp"
                  >
                    <div class="sasup-features-box-content-top-4 mb-65">
                      <h4 class="sasup-features-box-title-4">
                        To ease the rigor of school administration
                      </h4>
                      <a
                        href="/about"
                        class="sasup-service-box-read-more-link-4"
                      >
                        Learn More <i class="fal fa-long-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
                  <div
                    class="sasup-features-box-4 mb-30 style-2 bg-default wow fadeInLeft"
                    data-wow-delay=".3s"
                    data-background="assets/img/bg/feature-bg-2.webp"
                  >
                    <div class="sasup-features-box-content-top-4 mb-95">
                      <h4 class="sasup-features-box-title-4">
                        To enable vast activities being monitored at a go
                      </h4>
                      <a
                        href="/about"
                        class="sasup-service-box-read-more-link-4"
                      >
                        Learn More <i class="fal fa-long-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
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
                      Edu Pro <span>Termly </span>Price
                    </h3>
                  </div>
                </div>
              </div>
              <div class="advanced-pricing-tab text-center">
                <div class="d-inline-block p-rel advance-pricing-inline-content-2">
                  <div class="advanced-pricing-tab-key">
                    <span class="advanced-pricing-tab-key-text">
                      Save up to <span>20% on referring another school</span>
                    </span>
                    <div class="advanced-pricing-tab-key-shape">
                      <img
                        src="assets/img/shape/line_pricing.webp"
                        alt="no image found"
                      />
                    </div>
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

                            <h3 class="sasup-pricing-box-top-title-2">Basic</h3>

                            <a
                              href="/contact"
                              class="sasup-pricing-box-top-action-2 active"
                            >
                              Get Started
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

                            <p class="sasup-pricing-box-top-desc-2">
                              For access to more features
                            </p>
                            <a
                              href="/contact"
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
                              PREMIUM
                            </span>

                            <p class="sasup-pricing-box-top-desc-2">
                              For access to more features
                            </p>
                            <a
                              href="/contact"
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
