import React, { useEffect, useState } from "react";

import Header2 from "./Header2";
import back from "./back2.jpg";
const Home2 = () => {
  const backgroundStyle = {
    backgroundImage: `url(${back})`,
  };
  return (
    <>
      <body>
        <Header2 />

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
                      Build better websites
                    </span>
                    <h3 class="sasup-hero-title-4">
                      Take your <br />
                      Saas business
                      <br /> To the next level
                    </h3>
                    <p class="sasup-hero-text-4">
                      Grow your business with an online store that lets you sell
                      to anyone small business global.
                    </p>
                    <a href="contact.html" class="sasup-hero-started-btn-4">
                      <span>Get Started</span>
                    </a>
                  </div>
                </div>
                <div class="col-xxl-6 col-xl-6 col-lg-6">
                  <div class="sasup-hero-content-right-img-4">
                    <img
                      src="assets/img/hero/hero-2.webp"
                      alt="image not found"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="brand-area pt-30 pb-128">
            <div class="container">
              <div class="row">
                <div class="col-xxl-12">
                  <div class="sasup-sm-section-title-wrap">
                    <h5 class="sasup-sm-section-title">
                      Trusted by world class creators
                    </h5>
                    <div class="row">
                      <div class="col-xxl-8 col-xl-12 col-lg-12">
                        <div class="pr-90 sasup-sm-brand-space-right-4">
                          <div class="swiper-container">
                            <div class="swiper-wrapper">
                              <div class="swiper-slide">
                                <div class="sasup-sm-brand-single-4">
                                  <img
                                    src="assets/img/brand/brand-4-1.webp"
                                    alt="image not found"
                                  />
                                </div>
                              </div>
                              <div class="swiper-slide">
                                <div class="sasup-sm-brand-single-4">
                                  <img
                                    src="assets/img/brand/brand-4-2.webp"
                                    alt="image not found"
                                  />
                                </div>
                              </div>
                              <div class="swiper-slide">
                                <div class="sasup-sm-brand-single-4">
                                  <img
                                    src="assets/img/brand/brand-4-3.webp"
                                    alt="image not found"
                                  />
                                </div>
                              </div>
                              <div class="swiper-slide">
                                <div class="sasup-sm-brand-single-4">
                                  <img
                                    src="assets/img/brand/brand-4-4.webp"
                                    alt="image not found"
                                  />
                                </div>
                              </div>
                              <div class="swiper-slide">
                                <div class="sasup-sm-brand-single-4">
                                  <img
                                    src="assets/img/brand/brand-4-5.webp"
                                    alt="image not found"
                                  />
                                </div>
                              </div>
                              <div class="swiper-slide">
                                <div class="sasup-sm-brand-single-4">
                                  <img
                                    src="assets/img/brand/brand-4-6.webp"
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
                      We build ideas driven
                      <br /> by the future.
                    </h4>
                    <p class="sasup-section-subtitle-4">
                      We have three projects with this template and that is
                      because we love the design,
                      <br /> the large number of possibilities.
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
                        See where your efforts are paying your strategy.
                      </h4>
                      <p class="sasup-section-subtitle-4">
                        Lorem ipsum dolor sit amet consectet cing elit, sed do
                        eiusmod tempor.
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
                      If you can think it,you
                      <br /> Can build it.
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
                          Collaborate and plan your
                          <br /> Campaigns
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
                          No screen is
                          <br /> Too big or too small.
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
                          Wasting time
                          <br /> On Google Analytics
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
                          Respond to
                          <br /> Comments twice as fast
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

          <div class="testimonial-area p-rel pt-180 pb-145">
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
          </div>

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

          <div class="blog-area pt-120 pb-90">
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
          </div>

          <div class="cta-area wow fadeInUp" data-wow-delay=".6s">
            <div class="container">
              <div class="row">
                <div class="col-xxl-12 col-xl-12">
                  <div
                    class="sasup-cta-box-4 text-center bg-default  pt-90 pb-95"
                    data-background="assets/img/bg/footer-bg.webp"
                  >
                    <h4 class="sasup-cta-title-4">
                      Dont find the Answer?
                      <br />
                      Contact us for any Query.
                    </h4>
                    <span class="sasup-cta-subtitle-4 mb-30">
                      Request a demo today,
                    </span>
                    <a href="contact.html" class="sasup-hero-started-btn-4">
                      <span>Contact Us</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        <footer
          class="footer-area pt-300 sasup-footer-4-space pb-45"
          data-bg-color="#110F2A"
        >
          <div class="container">
            <div class="row">
              <div class="col-xxl-3 col-xl-3 col-lg-6 col-md-6">
                <div class="sasup-footer-widget-4 sasup-footer-widget-4-1 mb-40">
                  <div class="sasup-logo-4 mb-25">
                    <a href="#">
                      <img
                        src="assets/img/logo/logo-4.webp"
                        alt="image not found"
                      />
                    </a>
                  </div>
                  <p class="mb-25">
                    Build a better website for your technology business today.
                  </p>
                  <div class="sasup-footer-widget-contact-4 mb-25">
                    <a href="#">
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
                      +(264) 474 832 088
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
                      >
                        [email&#160;protected]
                      </span>
                    </a>
                  </div>
                  <div class="sasup-footer-widget-social-link-4">
                    <h5 class="title">Follow Us</h5>
                    <a href="#">
                      <i class="fab fa-facebook-f"></i>
                    </a>
                    <a href="#">
                      <i class="fab fa-twitter"></i>
                    </a>
                    <a href="#">
                      <i class="fab fa-linkedin-in"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-xxl-3 col-xl-3 col-lg-6 col-md-6">
                <div class="sasup-footer-widget-4 pl-100 sasup-footer-widget-4-2 mb-40">
                  <h5 class="sasup-footer-widget-title-4">Overview</h5>
                  <ul class="mt-35">
                    <li>
                      <a href="index.html">Home</a>
                    </li>
                    <li>
                      <a href="portfolio.html">Product</a>
                    </li>
                    <li>
                      <a href="price.html">Pricing</a>
                    </li>
                    <li>
                      <a href="service-details.html">Integrations</a>
                    </li>
                    <li>
                      <a href="portfolio-details.html">Faq Details</a>
                    </li>
                    <li>
                      <a href="team.html">Team</a>
                    </li>
                    <li>
                      <a href="contact.html">Contact US</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-xxl-3 col-xl-3 col-lg-6 col-md-6">
                <div class="sasup-footer-widget-4 pl-30 sasup-footer-widget-4-2 mb-40">
                  <h5 class="sasup-footer-widget-title-4">Company</h5>
                  <ul class="mt-35">
                    <li>
                      <a href="service-details.html">Web Design</a>
                    </li>
                    <li>
                      <a href="portfolio-details.html">Our customers</a>
                    </li>
                    <li>
                      <a href="contact.html">Wordpress</a>
                    </li>
                    <li>
                      <a href="contact.html">Login</a>
                    </li>
                    <li>
                      <a href="portfolio.html">Password</a>
                    </li>
                    <li>
                      <a href="service-details.html">Online Marketing</a>
                    </li>
                    <li>
                      <a href="contact.html">404 page</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-xxl-3 col-xl-3 col-lg-6 col-md-6">
                <div class="sasup-footer-widget-4 sasup-footer-widget-4-2 mb-40">
                  <h5 class="sasup-footer-widget-title-4">Newsletter</h5>
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
                    <p>
                      By using this Website, you agreed to accept all terms and
                      conditions written in here.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>

        <div class="copyright-area" data-bg-color="#110F2A">
          <div class="container">
            <div class="sasup-has-copyright-border-top pt-25 pb-20">
              <div class="row">
                <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                  <p class="sasup-copyright-text-4">
                    Copyright © 2022. Created with love by{" "}
                    <a
                      target="_blank"
                      href="https://themeforest.net/user/bdevs"
                    >
                      Bdevs
                    </a>
                  </p>
                </div>
                <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                  <div class="sasup-copyright-menu-link-4 text-end">
                    <a href="terms.html">Terms & Conditions</a>
                    <a href="policy.html">Privacy Policy</a>
                    <a href="contact.html">Help</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </>
  );
};

export default Home2;
