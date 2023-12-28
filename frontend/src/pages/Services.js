import React, { useEffect, useState } from "react";
import back from "./breads.jpg";
const Services = () => {
  const backgroundStyle = {
    backgroundImage: `url(${back})`,
  };
  return (
    <>
      <main>
        <div
          class="breadcrumb-area pt-215 pb-140 mb-115 pb-130"
          style={backgroundStyle}
        >
          <div class="container">
            <div class="breadcrumb-content text-center">
              <h3 class="breadcrumb-title">Services</h3>
              <div class="breadcrumb-trail">
                <nav>
                  <ul class="trail-items">
                    <li class="trail-item">
                      <a href="/">
                        <span>Home</span>
                      </a>
                    </li>
                    <li class="trail-item">
                      <span>Services</span>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>

        <section class="faetures-area features-space-1 pb-110">
          <div class="container">
            <div class="row mb-40">
              <div class="col-xxl-12">
                <div class="section-title text-center">
                  <span
                    class="sasup-s-subtitle wow fadeInUp"
                    data-wow-delay="0"
                  >
                    Special Layout
                  </span>
                  <h3 class="sasup-s-title wow fadeInUp" data-wow-delay=".2s">
                    Features that
                    <br /> Help you build better.
                  </h3>
                </div>
              </div>
            </div>
            <div class="row justify-content-center">
              <div class="col-xxl-10">
                <div class="row">
                  <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                    <div
                      class="sasup-single-feature has-feature-shadow mb-30 wow fadeInUp"
                      data-wow-delay=".2s"
                      data-bg-color="#fff"
                    >
                      <div class="sasup-feature-logo mb-35">
                        <img
                          src="assets/img/feature/feature-1.webp"
                          alt="image not found"
                        />
                      </div>
                      <div class="sasup-feature-content">
                        <h4 class="sasup-feature-title">
                          <a href="service-details.html">
                            Create pages using tons of hand crafted sections
                          </a>
                        </h4>
                        <a href="service-details.html" class="read-more-btn">
                          Read More<i class="fal fa-arrow-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                    <div
                      class="sasup-single-feature has-feature-shadow mb-30  wow fadeInUp"
                      data-wow-delay=".4s"
                      data-bg-color="#fff"
                    >
                      <div class="sasup-feature-logo mb-35">
                        <img
                          src="assets/img/feature/feature-2.webp"
                          alt="image not found"
                        />
                      </div>
                      <div class="sasup-feature-content">
                        <h4 class="sasup-feature-title">
                          <a href="service-details.html">
                            Start your website project the right way with Inform
                          </a>
                        </h4>
                        <a href="service-details.html" class="read-more-btn">
                          Read More<i class="fal fa-arrow-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                    <div
                      class="sasup-single-feature has-feature-shadow mb-30  wow fadeInUp"
                      data-wow-delay=".6s"
                      data-bg-color="#fff"
                    >
                      <div class="sasup-feature-logo mb-35">
                        <img
                          src="assets/img/feature/feature-3.webp"
                          alt="image not found"
                        />
                      </div>
                      <div class="sasup-feature-content">
                        <h4 class="sasup-feature-title">
                          <a href="service-details.html">
                            Adapt Inform to your brand Using the style guide
                          </a>
                        </h4>
                        <a href="service-details.html" class="read-more-btn">
                          Read More<i class="fal fa-arrow-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                    <div
                      class="sasup-single-feature has-feature-shadow mb-30  wow fadeInUp"
                      data-wow-delay=".8s"
                      data-bg-color="#fff"
                    >
                      <div class="sasup-feature-logo mb-35">
                        <img
                          src="assets/img/feature/feature-4.webp"
                          alt="image not found"
                        />
                      </div>
                      <div class="sasup-feature-content">
                        <h4 class="sasup-feature-title">
                          <a href="service-details.html">
                            Power your business
                            <br />
                            with multiple CMS integrations
                          </a>
                        </h4>
                        <a href="service-details.html" class="read-more-btn">
                          Read More<i class="fal fa-arrow-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div class="service-area pt-110 pb-115 mb-115 sasup-bg-1">
          <div class="container">
            <div class="row">
              <div class="col-xxl-12">
                <div class="section-title-3 mb-60 text-center">
                  <h3 class="s-title visile-br-lg">
                    The only one
                    <br />
                    Template you need
                  </h3>
                  <p class="s-desc">
                    Explore 50+ integrations that make your apps do more.
                  </p>
                </div>
              </div>
            </div>
            <div class="row g-0 mb-80">
              <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                <div class="service-left mb-30 mb-md-0">
                  <div
                    class="service-info-wrapper"
                    style={{ backgroundColor: "#0a1426" }}
                  >
                    <div
                      class="icon mb-35 wow fadeInUp"
                      data-wow-delay=".2s"
                    ></div>
                    <div class="content">
                      <h4
                        class="service-info-title white-color wow fadeInUp"
                        data-wow-delay=".4s"
                      >
                        <a href="service-details.html">
                          Personal agent dashboard
                        </a>
                      </h4>
                      <p
                        class="service-info-desc white-color wow fadeInUp"
                        data-wow-delay=".6s"
                      >
                        Increase your revenue bye participating for exclusive
                        brand funded promotions affect gross margins.
                      </p>
                      <a
                        href="service-details.html"
                        class="service-read-more-btn white-color wow fadeInUp"
                        data-wow-delay=".8s"
                      >
                        Read More <i class="fal fa-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                <div class="service-right custom-h-100 fix">
                  <div
                    class="service-img-boxed-group custom-h-100"
                    // data-bg-color="#2d73f8"

                    style={{ backgroundColor: "#2d73f8" }}
                  >
                    <div class="single-service-img has-shadow animated-top-bottom d-inline-block">
                      <div
                        class="single-service-img-inner wow bounceInUp"
                        data-wow-delay=".2s"
                      >
                        <img
                          class="service-img-1 "
                          src="assets/img/service/service-dashbord-1.webp"
                          alt="image not found"
                        />
                      </div>
                    </div>
                    <div class="single-service-img negative-space text-end">
                      <div
                        class="single-service-img-inner wow bounceInUp"
                        data-wow-delay=".4s"
                      >
                        <img
                          class="service-img-2 animated-cornar"
                          src="assets/img/service/service-dashbord-2.webp"
                          alt="image not found"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="service-list">
              <div class="row">
                <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                  <div class="single-service-list">
                    <div class="service-count-list">
                      <span class="service-count-number">1</span>
                    </div>
                    <div class="service-content-list">
                      <h4 class="service-title-list">
                        <a href="service-details.html">Schedule Appointment</a>
                      </h4>
                      <p class="service-content-list">
                        The wireless horse play all gone <br />
                        to that down.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                  <div class="single-service-list">
                    <div class="service-count-list">
                      <span class="service-count-number">2</span>
                    </div>
                    <div class="service-content-list">
                      <h4 class="service-title-list">
                        <a href="service-details.html">Business Consultation</a>
                      </h4>
                      <p class="service-content-list">
                        The wireless horse play all gone <br />
                        to that down.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                  <div class="single-service-list">
                    <div class="service-count-list">
                      <span class="service-count-number">3</span>
                    </div>
                    <div class="service-content-list">
                      <h4 class="service-title-list">
                        <a href="service-details.html">Launch Your Business</a>
                      </h4>
                      <p class="service-content-list">
                        The wireless horse play all gone <br />
                        to that down.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="pricing-area pricing-space pb-115">
          <div class="container">
            <div class="pricing-tab-top mb-40">
              <div class="row">
                <div class="col-xxl-12 mb-45">
                  <div class="section-title text-center">
                    <span
                      class="sasup-s-subtitle wow fadeInUp"
                      data-wow-delay="0"
                    >
                      Pricing Plans
                    </span>
                    <h3 class="sasup-s-title wow fadeInUp" data-wow-delay=".2s">
                      Choose a plan and
                      <br />
                      start your business today
                    </h3>
                  </div>
                </div>
                <div class="col-xxl-12">
                  <div class="pricing-tab-control">
                    <ul class="nav justify-content-center">
                      <li class="nav-item">
                        <button
                          class="monthly-tab-btn"
                          data-bs-toggle="pill"
                          data-bs-target="#tab-1-1"
                          type="button"
                        >
                          Monthly
                        </button>
                      </li>
                      <li class="nav-item">
                        <button
                          data-bs-toggle="pill"
                          class="annual-tab-btn active"
                          data-bs-target="#tab-1-2"
                          type="button"
                        >
                          Annually Save 30%
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="pricing-tab-bottom mb-25">
              <div class="tab-content" id="pills-tabContent">
                <div class="tab-pane fade" id="tab-1-1">
                  <div class="row">
                    <div class="col-xxl-3 col-xl-3 col-lg-6 col-md-6">
                      <div class="single-price item-1 mb-30 text-center">
                        <div class="pricing-shapes">
                          <div class="shape-1">
                            <img
                              src="assets/img/shape/pricing-shape/shape_01.webp"
                              alt="image not found"
                            />
                          </div>
                          <div class="shape-2">
                            <img
                              src="assets/img/shape/pricing-shape/shape_02.webp"
                              alt="image not found"
                            />
                          </div>
                          <div class="shape-3">
                            <img
                              src="assets/img/shape/pricing-shape/shape_03.webp"
                              alt="image not found"
                            />
                          </div>
                          <div class="shape-4">
                            <img
                              src="assets/img/shape/pricing-shape/shape_04.webp"
                              alt="image not found"
                            />
                          </div>
                          <div class="shape-5">
                            <img
                              src="assets/img/shape/pricing-shape/shape_05.webp"
                              alt="image not found"
                            />
                          </div>
                          <div class="shape-6">
                            <img
                              src="assets/img/shape/pricing-shape/shape_06.webp"
                              alt="image not found"
                            />
                          </div>
                        </div>
                        <div class="single-price-wrap">
                          <h4 class="single-pricing-title">Free</h4>
                          <p class="single-pricing-info">
                            For individuals and small projects
                          </p>
                          <h3 class="single-pricing-amount">$0</h3>
                          <span class="single-pricing-label">Free Forever</span>
                          <a href="price.html" class="sasup-gray-border-btn">
                            Get started for free
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="col-xxl-3  col-xl-3 col-lg-6 col-md-6">
                      <div class="single-price item-2  mb-30 text-center">
                        <div class="pricing-shapes">
                          <div class="shape-1">
                            <img
                              src="assets/img/shape/pricing-shape/shape_01.webp"
                              alt="image not found"
                            />
                          </div>
                          <div class="shape-2">
                            <img
                              src="assets/img/shape/pricing-shape/shape_02.webp"
                              alt="image not found"
                            />
                          </div>
                          <div class="shape-3">
                            <img
                              src="assets/img/shape/pricing-shape/shape_03.webp"
                              alt="image not found"
                            />
                          </div>
                          <div class="shape-4">
                            <img
                              src="assets/img/shape/pricing-shape/shape_04.webp"
                              alt="image not found"
                            />
                          </div>
                          <div class="shape-5">
                            <img
                              src="assets/img/shape/pricing-shape/shape_05.webp"
                              alt="image not found"
                            />
                          </div>
                          <div class="shape-6">
                            <img
                              src="assets/img/shape/pricing-shape/shape_06.webp"
                              alt="image not found"
                            />
                          </div>
                        </div>
                        <div class="single-price-wrap">
                          <h4 class="single-pricing-title">Plus</h4>
                          <p class="single-pricing-info">
                            For small teams with simple workflows
                          </p>
                          <h3 class="single-pricing-amount">$10</h3>
                          <span class="single-pricing-label">User / Month</span>
                          <a
                            href="price.html"
                            class="sasup-gray-border-btn theme-bg"
                          >
                            Get started for free
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="col-xxl-3  col-xl-3 col-lg-6 col-md-6">
                      <div class="single-price item-3  mb-30 text-center">
                        <div class="pricing-shapes">
                          <div class="shape-1">
                            <img
                              src="assets/img/shape/pricing-shape/shape_01.webp"
                              alt="image not found"
                            />
                          </div>
                          <div class="shape-2">
                            <img
                              src="assets/img/shape/pricing-shape/shape_02.webp"
                              alt="image not found"
                            />
                          </div>
                          <div class="shape-3">
                            <img
                              src="assets/img/shape/pricing-shape/shape_03.webp"
                              alt="image not found"
                            />
                          </div>
                          <div class="shape-4">
                            <img
                              src="assets/img/shape/pricing-shape/shape_04.webp"
                              alt="image not found"
                            />
                          </div>
                          <div class="shape-5">
                            <img
                              src="assets/img/shape/pricing-shape/shape_05.webp"
                              alt="image not found"
                            />
                          </div>
                          <div class="shape-6">
                            <img
                              src="assets/img/shape/pricing-shape/shape_06.webp"
                              alt="image not found"
                            />
                          </div>
                        </div>
                        <div class="single-price-wrap">
                          <h4 class="single-pricing-title">Pro</h4>
                          <p class="single-pricing-info">
                            For small teams with simple workflows
                          </p>
                          <h3 class="single-pricing-amount">$24</h3>
                          <span class="single-pricing-label">User / Month</span>
                          <a href="price.html" class="sasup-gray-border-btn">
                            Get started for free
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="col-xxl-3  col-xl-3 col-lg-6 col-md-6">
                      <div class="single-price item-4  mb-30 text-center">
                        <div class="pricing-shapes show-shapes">
                          <div class="shape-1">
                            <img
                              src="assets/img/shape/pricing-shape/shape_01.webp"
                              alt="image not found"
                            />
                          </div>
                          <div class="shape-2">
                            <img
                              src="assets/img/shape/pricing-shape/shape_02.webp"
                              alt="image not found"
                            />
                          </div>
                          <div class="shape-3">
                            <img
                              src="assets/img/shape/pricing-shape/shape_03.webp"
                              alt="image not found"
                            />
                          </div>
                          <div class="shape-4">
                            <img
                              src="assets/img/shape/pricing-shape/shape_04.webp"
                              alt="image not found"
                            />
                          </div>
                          <div class="shape-5">
                            <img
                              src="assets/img/shape/pricing-shape/shape_05.webp"
                              alt="image not found"
                            />
                          </div>
                          <div class="shape-6">
                            <img
                              src="assets/img/shape/pricing-shape/shape_06.webp"
                              alt="image not found"
                            />
                          </div>
                        </div>
                        <div class="single-price-wrap">
                          <h4 class="single-pricing-title">Enterprise</h4>
                          <p class="single-pricing-info space-last">
                            For medium to large teams with 20+ members
                          </p>
                          <h3 class="lets-chet">Let's chat!</h3>
                          <a
                            href="price.html"
                            class="sasup-gray-border-btn theme-3"
                          >
                            Contact Sales
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="tab-pane fade show active" id="tab-1-2">
                  <div class="row">
                    <div class="col-xxl-3  col-xl-3 col-lg-6  col-md-6">
                      <div class="single-price item-1 mb-30 text-center">
                        <div class="pricing-shapes">
                          <div class="shape-1">
                            <img
                              src="assets/img/shape/pricing-shape/shape_01.webp"
                              alt="image not found"
                            />
                          </div>
                          <div class="shape-2">
                            <img
                              src="assets/img/shape/pricing-shape/shape_02.webp"
                              alt="image not found"
                            />
                          </div>
                          <div class="shape-3">
                            <img
                              src="assets/img/shape/pricing-shape/shape_03.webp"
                              alt="image not found"
                            />
                          </div>
                          <div class="shape-4">
                            <img
                              src="assets/img/shape/pricing-shape/shape_04.webp"
                              alt="image not found"
                            />
                          </div>
                          <div class="shape-5">
                            <img
                              src="assets/img/shape/pricing-shape/shape_05.webp"
                              alt="image not found"
                            />
                          </div>
                          <div class="shape-6">
                            <img
                              src="assets/img/shape/pricing-shape/shape_06.webp"
                              alt="image not found"
                            />
                          </div>
                        </div>
                        <div class="single-price-wrap">
                          <h4 class="single-pricing-title">Free</h4>
                          <p class="single-pricing-info">
                            For individuals and small projects
                          </p>
                          <h3 class="single-pricing-amount">$40</h3>
                          <span class="single-pricing-label">Free Forever</span>
                          <a href="price.html" class="sasup-gray-border-btn">
                            Get started for free
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="col-xxl-3  col-xl-3 col-lg-6  col-md-6">
                      <div class="single-price item-2  mb-30 text-center">
                        <div class="pricing-shapes">
                          <div class="shape-1">
                            <img
                              src="assets/img/shape/pricing-shape/shape_01.webp"
                              alt="image not found"
                            />
                          </div>
                          <div class="shape-2">
                            <img
                              src="assets/img/shape/pricing-shape/shape_02.webp"
                              alt="image not found"
                            />
                          </div>
                          <div class="shape-3">
                            <img
                              src="assets/img/shape/pricing-shape/shape_03.webp"
                              alt="image not found"
                            />
                          </div>
                          <div class="shape-4">
                            <img
                              src="assets/img/shape/pricing-shape/shape_04.webp"
                              alt="image not found"
                            />
                          </div>
                          <div class="shape-5">
                            <img
                              src="assets/img/shape/pricing-shape/shape_05.webp"
                              alt="image not found"
                            />
                          </div>
                          <div class="shape-6">
                            <img
                              src="assets/img/shape/pricing-shape/shape_06.webp"
                              alt="image not found"
                            />
                          </div>
                        </div>
                        <div class="single-price-wrap">
                          <h4 class="single-pricing-title">Plus</h4>
                          <p class="single-pricing-info">
                            For small teams with simple workflows
                          </p>
                          <h3 class="single-pricing-amount">$20</h3>
                          <span class="single-pricing-label">User / Month</span>
                          <a
                            href="price.html"
                            class="sasup-gray-border-btn theme-bg"
                          >
                            Get started for free
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="col-xxl-3  col-xl-3 col-lg-6  col-md-6">
                      <div class="single-price item-3  mb-30 text-center">
                        <div class="pricing-shapes">
                          <div class="shape-1">
                            <img
                              src="assets/img/shape/pricing-shape/shape_01.webp"
                              alt="image not found"
                            />
                          </div>
                          <div class="shape-2">
                            <img
                              src="assets/img/shape/pricing-shape/shape_02.webp"
                              alt="image not found"
                            />
                          </div>
                          <div class="shape-3">
                            <img
                              src="assets/img/shape/pricing-shape/shape_03.webp"
                              alt="image not found"
                            />
                          </div>
                          <div class="shape-4">
                            <img
                              src="assets/img/shape/pricing-shape/shape_04.webp"
                              alt="image not found"
                            />
                          </div>
                          <div class="shape-5">
                            <img
                              src="assets/img/shape/pricing-shape/shape_05.webp"
                              alt="image not found"
                            />
                          </div>
                          <div class="shape-6">
                            <img
                              src="assets/img/shape/pricing-shape/shape_06.webp"
                              alt="image not found"
                            />
                          </div>
                        </div>
                        <div class="single-price-wrap">
                          <h4 class="single-pricing-title">Pro</h4>
                          <p class="single-pricing-info">
                            For small teams with simple workflows
                          </p>
                          <h3 class="single-pricing-amount">$45</h3>
                          <span class="single-pricing-label">User / Month</span>
                          <a href="price.html" class="sasup-gray-border-btn">
                            Get started for free
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="col-xxl-3  col-xl-3 col-lg-6  col-md-6">
                      <div class="single-price item-4  mb-30 text-center">
                        <div class="pricing-shapes show-shapes">
                          <div class="shape-1">
                            <img
                              src="assets/img/shape/pricing-shape/shape_01.webp"
                              alt="image not found"
                            />
                          </div>
                          <div class="shape-2">
                            <img
                              src="assets/img/shape/pricing-shape/shape_02.webp"
                              alt="image not found"
                            />
                          </div>
                          <div class="shape-3">
                            <img
                              src="assets/img/shape/pricing-shape/shape_03.webp"
                              alt="image not found"
                            />
                          </div>
                          <div class="shape-4">
                            <img
                              src="assets/img/shape/pricing-shape/shape_04.webp"
                              alt="image not found"
                            />
                          </div>
                          <div class="shape-5">
                            <img
                              src="assets/img/shape/pricing-shape/shape_05.webp"
                              alt="image not found"
                            />
                          </div>
                          <div class="shape-6">
                            <img
                              src="assets/img/shape/pricing-shape/shape_06.webp"
                              alt="image not found"
                            />
                          </div>
                        </div>
                        <div class="single-price-wrap">
                          <h4 class="single-pricing-title">Enterprise</h4>
                          <p class="single-pricing-info space-last">
                            For medium to large teams with 20+ members
                          </p>
                          <h3 class="lets-chet">Let's chat!</h3>
                          <a
                            href="price.html"
                            class="sasup-gray-border-btn theme-3"
                          >
                            Contact Sales
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="pricing-tab-extra-info text-center">
              <div class="icon d-inline-block mb-3 mb-lg-0">
                <img src="assets/img/icon/i_icon.webp" alt="image not found" />
              </div>
              <div class="content d-inline-block">
                <p class="text-center text-md-start">
                  Les services de paiement sont disponibles via des
                  <br />
                  applications mobiles et de bureau.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          class="cta-area cta-1-space pt-135 pb-135 bg-default"
          data-bg-color="#4a2593"
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
      </main>
    </>
  );
};

export default Services;
