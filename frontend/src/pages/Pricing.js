import React, { useEffect, useState } from "react";
import back from "./breads.jpg";
import park from "./edu.PNG";
const Pricing = () => {
  const backgroundStyle = {
    backgroundImage: `url('/static/media/breads.png')`,
  };
  return (
    <>
      <main>
        <div class="breadcrumb-area pt-215 pb-130" style={backgroundStyle}>
          <div class="container">
            <div class="breadcrumb-content text-center">
              <h3 class="breadcrumb-title">Edu Pro Price</h3>
              <div class="breadcrumb-trail">
                <nav>
                  <ul class="trail-items">
                    <li class="trail-item">
                      <a href="/">
                        <span>Home</span>
                      </a>
                    </li>
                    <li class="trail-item">
                      <span>Price</span>
                    </li>
                  </ul>
                </nav>
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
                  <h5 class="sasup-section-heading-5-subtitle">Our Pricing</h5>
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

        {/* <div class="service-area pb-115">
          <div class="container">
            <div class="row pb-55 wow fadeInUp">
              <div class="col-xxl-12">
                <div class="sasup-section-title-wrap-4">
                  <span class="sasup-s-subtitle" data-color="#ff4e80">
                    Services
                  </span>
                  <h4 class="sasup-section-title-4">Our Latest Services</h4>
                  <p class="sasup-section-subtitle-4">
                    We have three projects with this template and that is
                    because we love the design,
                    <br /> the large number of possibilities.
                  </p>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
                <div class="sasup-service-box-4 p-rel">
                  <div class="sasup-service-box-img-4 pb-35">
                    <img
                      src="assets/img/service/service-4-1.webp"
                      alt="image not found"
                    />
                  </div>
                  <div class="sasup-service-box-content-4 text-center">
                    <h5 class="sasup-service-box-title-4">
                      <a href="service-details.html">Powerful Analytics</a>
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
              <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
                <div class="sasup-service-box-4 pl-55 p-rel">
                  <div class="sasup-service-box-img-4 pb-35">
                    <img
                      src="assets/img/service/service-4-3.webp"
                      alt="image not found"
                    />
                  </div>
                  <div class="sasup-service-box-content-4 text-center">
                    <h5 class="sasup-service-box-title-4">
                      <a href="service-details.html">Digital Solutions</a>
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
              <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
                <div class="sasup-service-box-4 pl-65 p-rel">
                  <div class="sasup-service-box-img-4 pb-35">
                    <img
                      src="assets/img/service/service-4-2.webp"
                      alt="image not found"
                    />
                  </div>
                  <div class="sasup-service-box-content-4 text-center">
                    <h5 class="sasup-service-box-title-4">
                      <a href="service-details.html">Digital Solutions</a>
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
        </div> */}

        <div class="faq-area pb-130">
          <div class="container">
            <div class="row">
              <div class="col-xxl-5 col-xl-5 col-lg-5">
                <div class="faq-left mb-50 mb-lg-0">
                  <div class="section-title mb-35">
                    <span
                      class="sasup-s-subtitle wow fadeInUp"
                      data-color="#ff4e80"
                    >
                      Stay Connected
                    </span>
                    <h3 class="sasup-s-title wow fadeInUp" data-wow-delay=".2s">
                      Frequently
                      <br />
                      Asked questions.
                    </h3>
                    <p class="sasup-s-desc wow fadeInUp" data-wow-delay=".4s">
                      Here are some frequently asked questions on Edu Pro
                      Solutions
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-xxl-7 col-xl-7  col-lg-7">
                <div class="faq-breadcrumb">
                  <div class="accordion" id="accordionExample">
                    <div class="sasup-accordion-item sasup-active-item">
                      <button
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                      >
                        1. What is the last price Edu Pro can take?
                      </button>
                      <div
                        id="collapseOne"
                        class="collapse show"
                        data-bs-parent="#accordionExample"
                      >
                        <div class="sasup-accordion-desc">
                          <p>
                            A School Portal that enhances the Schools
                            Administrations to not only work more efficiently
                            but effortlessly as well. Our platform is extremely
                            user friendly and has the embodiment of
                            proffesionalism
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="sasup-accordion-item sasup-active-item">
                      <button
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                      >
                        2. How do we register our school?
                      </button>
                      <div
                        id="collapseOne"
                        class="collapse show"
                        data-bs-parent="#accordionExample"
                      >
                        <div class="sasup-accordion-desc">
                          <p>
                            A School Portal that enhances the Schools
                            Administrations to not only work more efficiently
                            but effortlessly as well. Our platform is extremely
                            user friendly and has the embodiment of
                            proffesionalism
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* <div class="sasup-accordion-item">
                      <button
                        class="collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        2. How can I get started with Sasup?
                      </button>
                      <div
                        id="collapseTwo"
                        class="collapse"
                        data-bs-parent="#accordionExample"
                      >
                        <div class="sasup-accordion-desc">
                          <p>
                            The template is likely built with HTML5 and CSS3,
                            ensuring a responsive layout. This means that the
                            landing page will adapt and look good on various
                            devices and screen sizes, including desktops,
                            tablets, and mobile phones.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="sasup-accordion-item">
                      <button
                        class="collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        3. What are the pricing plans for Sasup?
                      </button>
                      <div
                        id="collapseThree"
                        class="collapse"
                        data-bs-parent="#accordionExample"
                      >
                        <div class="sasup-accordion-desc">
                          <p>
                            If the SaaS product has different pricing tiers or
                            plans, the template should offer a section to
                            display pricing details, including features
                            available in each plan.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="sasup-accordion-item">
                      <button
                        class="collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFour"
                        aria-expanded="false"
                        aria-controls="collapseFour"
                      >
                        4. Is Sasup compatible with all devices and browsers?
                      </button>
                      <div
                        id="collapseFour"
                        class="collapse"
                        data-bs-parent="#accordionExample"
                      >
                        <div class="sasup-accordion-desc">
                          <p>
                            The template should provide sections to highlight
                            the key features and functionalities of the SaaS
                            product. These sections might include graphics,
                            icons, and concise descriptions.
                          </p>
                        </div>
                      </div>
                    </div> */}
                    <div class="sasup-accordion-item">
                      <button
                        class="collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFive"
                        aria-expanded="false"
                        aria-controls="collapseFive"
                      >
                        2. How do I contact the support team if I encounter an
                        issue?
                      </button>
                      <div
                        id="collapseFive"
                        class="collapse"
                        data-bs-parent="#accordionExample"
                      >
                        <div class="sasup-accordion-desc">
                          <p>
                            If there is an issue whatsoever you can simply go to
                            the contact page/section and send us a message
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          class="cta-area cta-1-space pt-135 pb-135 bg-default"
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
                    Join Edu Pro Solutions and increase your productivity.
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
                        src={park}
                        alt="image not found"
                        style={{ width: "100px", height: "30px" }}
                      />
                    </a>
                  </div>
                  <p class="mb-25">
                    Your solution to school management hurdles. It has
                    encompassing features that makes school administration
                    stress-free.
                  </p>
                  <div class="sasup-footer-widget-contact-4 mb-25">
                    <a href="#" style={{ color: "black" }}>
                      <svg
                        width="19"
                        height="19"
                        viewBox="0 0 19 19"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M17.9745 14.8805C17.9745 15.1865 17.9065 15.501 17.762 15.807C17.6175 16.113 17.4305 16.402 17.184 16.674C16.7675 17.133 16.3085 17.4645 15.79 17.677C15.28 17.8895 14.7275 18 14.1325 18C13.2655 18 12.339 17.796 11.3615 17.3795C10.384 16.963 9.4065 16.402 8.4375 15.6965C7.46 14.9825 6.5335 14.192 5.6495 13.3165C4.774 12.4325 3.9835 11.506 3.278 10.537C2.581 9.568 2.02 8.599 1.612 7.6385C1.204 6.6695 1 5.743 1 4.859C1 4.281 1.102 3.7285 1.306 3.2185C1.51 2.7 1.833 2.224 2.2835 1.799C2.8275 1.2635 3.4225 1 4.0515 1C4.2895 1 4.5275 1.051 4.74 1.153C4.961 1.255 5.1565 1.408 5.3095 1.629L7.2815 4.4085C7.4345 4.621 7.545 4.8165 7.6215 5.0035C7.698 5.182 7.7405 5.3605 7.7405 5.522C7.7405 5.726 7.681 5.93 7.562 6.1255C7.4515 6.321 7.29 6.525 7.086 6.729L6.44 7.4005C6.3465 7.494 6.304 7.6045 6.304 7.7405C6.304 7.8085 6.3125 7.868 6.3295 7.936C6.355 8.004 6.3805 8.055 6.3975 8.106C6.5505 8.3865 6.814 8.752 7.188 9.194C7.5705 9.636 7.9785 10.0865 8.4205 10.537C8.8795 10.9875 9.3215 11.404 9.772 11.7865C10.214 12.1605 10.5795 12.4155 10.8685 12.5685C10.911 12.5855 10.962 12.611 11.0215 12.6365C11.0895 12.662 11.1575 12.6705 11.234 12.6705C11.3785 12.6705 11.489 12.6195 11.5825 12.526L12.2285 11.8885C12.441 11.676 12.645 11.5145 12.8405 11.4125C13.036 11.2935 13.2315 11.234 13.444 11.234C13.6055 11.234 13.7755 11.268 13.9625 11.3445C14.1495 11.421 14.345 11.5315 14.5575 11.676L17.371 13.6735C17.592 13.8265 17.745 14.005 17.8385 14.2175C17.9235 14.43 17.9745 14.6425 17.9745 14.8805Z"
                          stroke="#FF785A"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                        />
                        <path
                          d="M15.0253 6.95059C15.0253 6.44059 14.6258 5.65859 14.0308 5.02109C13.4868 4.43459 12.7643 3.97559 12.0503 3.97559"
                          stroke="#FF785A"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M18.0003 6.95C18.0003 3.6605 15.3398 1 12.0503 1"
                          stroke="#FF785A"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      +(234) 703 841 2640, +(234) 816 505 1826
                    </a>
                    <a href="#">
                      <svg
                        width="20"
                        height="18"
                        viewBox="0 0 20 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 6C1 2.85 2.8 1.5 5.5 1.5H14.5C17.2 1.5 19 2.85 19 6V12.3C19 15.45 17.2 16.8 14.5 16.8H5.5"
                          stroke="#FF785A"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M14.5 6.44971L11.683 8.69971C10.756 9.43771 9.235 9.43771 8.308 8.69971L5.5 6.44971"
                          stroke="#FF785A"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M1 13.1997H6.4"
                          stroke="#FF785A"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M1 9.6001H3.7"
                          stroke="#FF785A"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>{" "}
                      <span
                        class="__cf_email__"
                        data-cfemail="e088858c8c8fa09381939590ce838f8d"
                        style={{ color: "black" }}
                      >
                        info@edupro.com.ng
                      </span>
                    </a>
                  </div>
                  <div class="sasup-footer-widget-social-link-4">
                    <h5 class="title">Follow Us</h5>
                    <a href="https://facebook.com/edu_school_solution">
                      <i class="fab fa-facebook-f"></i>
                    </a>
                    <a href="https://instagram.com/eduprosolution">
                      <i class="fab fa-instagram"></i>
                    </a>
                    <a href="#">
                      <i class="fab fa-linkedin-in"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-xxl-8 col-xl-8 col-lg-8">
                <div class="row mb-30 mb-lg-0">
                  <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-6">
                    <div
                      class="footer-widget wow fadeInUp mb-30 mb-md-0"
                      data-wow-delay=".4s"
                    >
                      <h5>Overview</h5>
                      <ul>
                        <li></li>
                        <li>
                          <a href="service.html">Home</a>
                        </li>
                        <li>
                          <a href="about.html">About</a>
                        </li>
                        <li>
                          <a href="service-details.html">Pricing</a>
                        </li>
                        <li>
                          <a href="about.html">Services</a>
                        </li>
                        <li>
                          <a href="portfolio.html">Team</a>
                        </li>
                        <li>
                          <a href="about.html">Contact Us</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div
                    class="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-6 wow fadeInUp"
                    data-wow-delay=".6s"
                  >
                    <div class="footer-widget">
                      <h5>Quick Links</h5>
                      <ul>
                        <li></li>
                        <li>
                          <a href="about.html">Privacy policy</a>
                        </li>
                        <li>
                          <a href="service.html">Terms</a>
                        </li>
                        <li>
                          <a href="about.html">Help</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="col-xxl-3 col-xl-3 col-lg-6 col-md-6">
                    <div class="sasup-footer-widget-4 sasup-footer-widget-4-2 mb-40">
                      <h5
                        class="sasup-footer-widget-title-4"
                        style={{ color: "black" }}
                      >
                        Newsletter
                      </h5>
                      <div class="sasup-newspaper-form-4 mt-35">
                        <form action="#" class="mb-15">
                          <input
                            type="email"
                            placeholder="Email"
                            name="email"
                            id="email"
                          />
                          <button type="submit">Submit</button>
                        </form>
                      </div>
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

export default Pricing;
