import React, { useEffect, useState } from "react";
import back from "./breads.jpg";
import park from "./edu.PNG";
const Services = () => {
  const backgroundStyle = {
    backgroundImage: `url('/static/media/breads.png')`,
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
      </main>
    </>
  );
};

export default Services;
