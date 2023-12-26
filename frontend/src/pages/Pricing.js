import React, { useEffect, useState } from "react";
import back from "./breads.jpg";
const Pricing = () => {
  const backgroundStyle = {
    backgroundImage: `url(${back})`,
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
                      <a href="index.html">
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
                            Company.
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
                            <h4 class="sasup-pricing-box-bottom-price-2">
                              $0.0
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
                              $40
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
                            Contact Sales
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
                </div>
                <div
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
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="service-area pb-115">
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
        </div>

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
                      Lorem ipsum dolor sit consectetur adipiscing elit
                      Suspendisse varius enim.
                    </p>
                  </div>
                  <div
                    class="support-sm-team-thumbs wow fadeInUp"
                    data-wow-delay=".6s"
                  >
                    <span class="support-sm-team-label">Support Team</span>
                    <div class="support-sm-team-thumb-group">
                      <div class="single-support-sm-thumb">
                        <img
                          src="assets/img/faq/user-1.webp"
                          alt="image not found"
                        />
                      </div>
                      <div class="single-support-sm-thumb">
                        <img
                          src="assets/img/faq/user-2.webp"
                          alt="image not found"
                        />
                      </div>
                      <div class="single-support-sm-thumb">
                        <img
                          src="assets/img/faq/user-3.webp"
                          alt="image not found"
                        />
                      </div>
                    </div>
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
                        1. What is Sasup?
                      </button>
                      <div
                        id="collapseOne"
                        class="collapse show"
                        data-bs-parent="#accordionExample"
                      >
                        <div class="sasup-accordion-desc">
                          <p>
                            A SaaS landing page template like Sasup would
                            typically feature a modern and clean design. This
                            design approach helps convey professionalism and
                            trustworthiness to potential users.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="sasup-accordion-item">
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
                    </div>
                    <div class="sasup-accordion-item">
                      <button
                        class="collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFive"
                        aria-expanded="false"
                        aria-controls="collapseFive"
                      >
                        5. How do I contact the Sasup support team if I
                        encounter an issue?
                      </button>
                      <div
                        id="collapseFive"
                        class="collapse"
                        data-bs-parent="#accordionExample"
                      >
                        <div class="sasup-accordion-desc">
                          <p>
                            Depending on the template, there may be options for
                            customization, allowing the SaaS company to tailor
                            the design and content to their specific needs and
                            branding.
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

export default Pricing;
