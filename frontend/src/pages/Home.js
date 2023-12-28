import React, { useEffect, useState } from "react";
import Header from "./Header";

const Home = () => {
  return (
<>
<body>
<Header />

<div class="responsive-sidebar d-block d-lg-none">
<div class="responsive-sidebar-inner">
<div class="logo mb-30">
<div class="row">
<div class="col-6">
<img src="assets/img/logo/logo.webp" alt="image not found" />
</div>
<div class="col-6">
<div class="text-end">
<button class="responsive-sidebar-close">
<i class="fal fa-times"></i>
</button>
</div>
</div>
</div>
</div>
<div class="resposive-sidebar-menu mb-50">
<div class="mobile-menu"></div>
</div>
<div class="responsive-sidebar-actions">
<a
                href="contact.html"
                class="sasup-border-btn d-block sasup-broder-btn-space-3 ms-0 text-center mb-2"
>
                login
</a>
<a
                href="contact.html"
                class="sasup-theme-btn text-center d-inline-block d-sm-none w-100"
>
<span>Free Trial</span>
</a>
</div>
</div>
</div>

<main>
<div
            class="hero-area sasup-hero-height-4 p-rel bg-top-left d-flex align-items-center"
            data-background="assets/img/bg/banner-1.webp"
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
                      Build Future-Ready Schools
</span>
<h3 class="sasup-hero-title-4">
                      Take your <br />
                      School Management 
<br /> To New Heights
</h3>
<p class="sasup-hero-text-4">
                      Fuel Academic Success Worldwide: Transform Education on a Global ScaleYour Gateway to Advanced School Management
</p>
<a href="contact.html" class="sasup-hero-started-btn-4">
<span>Get Started</span>
</a>
</div>
</div>
<div class="col-xxl-6 col-xl-6 col-lg-6">
<div class="sasup-hero-content-right-img-4">
<img
                      src="assets/img/hero/hero.png"
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
                      Empower Education, Simplify Management 
<br /> with Edu Pro Solutions 
</h4>
<p class="sasup-section-subtitle-4">
                      Here are Three of our Prominent features 
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
<a href="service-details.html">Effortless Fee Management:</a>
</h5>
<p class="sasup-service-box-text-4">
                        Simplify financial operations by effortlessly managing student fees, from invoicing to transparent financial reporting i.e: Receipts.
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
<a href="service-details.html">Dynamic Class Organization:</a>
</h5>
<p class="sasup-service-box-text-4">
                        Streamline class management, allowing administrators to efficiently assign students, update information, and monitor attendance seamlessly.
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
<a href="service-details.html">Dynamic Class Organization:</a>
</h5>
<p class="sasup-service-box-text-4">
                        Streamline class management, allowing administrators to efficiently assign students, update information, and monitor attendance seamlessly.
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
<a href="service-details.html">Dynamic Class Organization:</a>
</h5>
<p class="sasup-service-box-text-4">
                        Streamline class management, allowing administrators to efficiently assign students, update information, and monitor attendance seamlessly.
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
<a href="service-details.html">Digitized Exam Administration:</a>
</h5>
<p class="sasup-service-box-text-4">
                        Facilitate online exams with a feature-rich module, empowering educators to create, conduct, and evaluate exams digitally.
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
<div class="swiper-container">
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
                                    Elle Rabe,{""}
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
                                    Elle Rabe,{""}
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
{/* <div class="col-xxl-5 col-xl-5 col-lg-12">
<div
                    class="sasup-about-dashbord-right-4 pt-25 wow fadeInUp"
                    data-wow-delay=".2s"
>
<div class="sasup-section-title-wrap-4 mb-30">
<span class="sasup-section-badge-4 mb-15">
                        {""}
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
</div> */}
</div>
{/* <div class="sasup-about-dashbord-service-wrap-4">
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
</div> */}
</div>
</div>

{/* about us */}


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
                    Here's a list of features that make us 90% better than most school portals
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
                      <a href="service-details.html">Fee Management</a>
                    </h4>
                    <p class="feature-content-desc-2">
                    Simplify financial operations by effortlessly managing student fees, from invoicing to transparent financial reporting i.e: Receipts.

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
                      <a href="service-details.html">Student Management</a>
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
                      <a href="service-details.html">Online Exam Administration</a>
                    </h4>
                    <p class="feature-content-desc-2">
                    Facilitate online exams with a feature-rich module, empowering educators to create, conduct, and evaluate exams digitally.
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
                      Created with
                      <br />
                      the parents in mind.
                    </h3>
                    <p
                      class="s-desc wow fadeInUp line-height-24"
                      data-wow-delay=".4s"
                    >
                      The parent is the connection between the school and pupils now imagine a parent being able to track down their child's journey in school, certainily that will be fantanstic right? Well that's basically what we have in store for you and lots more.
                    </p>
                  </div>
                  <div
                    class="service-right-list-2 w-list-50 mb-30 wow fadeInUp"
                    data-wow-delay=".6s"
                  >
                    <ul>
                      <li class="service-right-list-item">
                        <i class="fal fa-check"></i> Top Notch Support
                      </li>
                      <li class="service-right-list-item">
                        <i class="fal fa-check"></i> Report Card Preparation
                      </li>
                      <li class="service-right-list-item">
                        <i class="fal fa-check"></i> Lesson Notes
                      </li>
                      <li class="service-right-list-item">
                        <i class="fal fa-check"></i> Generate Payment Receipts
                      </li>
                      <li class="service-right-list-item">
                        <i class="fal fa-check"></i> Student Attendance
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
                      Here are some frequently asked questions on Edu Pro Solutions
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
                        1. What is Edu Pro Solutions?
                      </button>
                      <div
                        id="collapseOne"
                        class="collapse show"
                        data-bs-parent="#accordionExample"
                      >
                        <div class="sasup-accordion-desc">
                          <p>
                          A School Portal that enhances the Schools Administrations to not only work more efficiently but effortlessly as well.
                          Our platform is extremely user friendly and has the embodiment of proffesionalism
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
                        2. How do I contact the support team if I
                        encounter an issue?
                      </button>
                      <div
                        id="collapseFive"
                        class="collapse"
                        data-bs-parent="#accordionExample"
                      >
                        <div class="sasup-accordion-desc">
                          <p>
                            If there is an issue whatsoever you can simply go to the contact page/section and send us a message
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

        <div class="contact-area">
          <div class="container">
            <div class="row pb-140 justify-content-between">
              <div class="col-xxl-5 col-xl-6 col-lg-6 mb-40 mb-lg-0">
                <div class="contact-left-info">
                  <div class="contact-info-left-top mb-30">
                    <h4 class="contact-info-title">Contact Information</h4>
                    <span class="contact-info-subtitle">
                      Having an issue of some sort? Or any enquiries? Just leave us a message!
                    </span>
                  </div>
                  <div class="contact-left-list-wrapper">
                    <div class="single-contact-left-item mb-10">
                      <div class="icon">
                        <i class="fal fa-phone-alt"></i>
                      </div>
                      <div class="content">
                        <h4 class="single-contact-left-label">Phone Number</h4>
                        <span class="single-contact-left-info">
                          +(234) 703 841 2640
                        </span>
                      </div>
                    </div>
                    <div class="single-contact-left-item mb-10">
                      <div class="icon">
                        <i class="fal fa-envelope"></i>
                      </div>
                      <div class="content">
                        <h4 class="single-contact-left-label">Email Adress</h4>
                        <span class="single-contact-left-info">
                          <a
                            href="https://www.devsnews.com/cdn-cgi/l/email-protection"
                            class="__cf_email__"
                            data-cfemail="0e7d6f7d7b7e4e69636f6762206d6163"
                          >
                            info@edupro.com.ng
                          </a>
                        </span>
                      </div>
                    </div>
                    <div class="single-contact-left-item mb-10">
                      <div class="icon">
                        <i class="fal fa-map-marker-alt"></i>
                      </div>
                      <div class="content">
                        <h4 class="single-contact-left-label">Local Address</h4>
                        <span class="single-contact-left-info">
                          Lagos, Nigeria
                        </span>
                      </div>
                    </div>
                    <div class="single-contact-left-item mb-10">
                      <div class="icon">
                        <i class="fal fa-share-alt"></i>
                      </div>
                      <div class="content">
                        <h4 class="single-contact-left-label contact-left-label-space">
                          Share
                        </h4>
                        <div class="share-social">
                          <a href="#" data-color="#1877f2">
                            <i class="fab fa-facebook-f"></i>
                          </a>
                          <a href="#" data-color="#1da1f2">
                            <i class="fab fa-twitter"></i>
                          </a>
                          <a href="#" data-color="#ed445e">
                            <i class="fab fa-pinterest-p"></i>
                          </a>
                          <a href="#" data-color="#1ab7ea">
                            <i class="fab fa-vimeo-v"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xxl-6 col-xl-6 col-lg-6">
                <div
                  class="contact-form wow fadeInUp mb-50 mb-xl-0"
                  data-wow-delay=".2s"
                >
                  <form
                    action="https://www.devsnews.com/template/sasup-prev/sasup/mail.php"
                    method="post"
                    id="contact-form"
                  >
                    <div class="row">
                      <div class="col-xl-6 col-md-6">
                        <div class="post-input post-input-2">
                          <label for="name" class="post-input-label-defualt">
                            Name *
                          </label>
                          <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            id="name"
                          />
                        </div>
                      </div>
                      <div class="col-xl-6 col-md-6">
                        <div class="post-input post-input-2">
                          <label for="email" class="post-input-label-defualt">
                            Email *
                          </label>
                          <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Email"
                          />
                        </div>
                      </div>
                      <div class="col-xl-12">
                        <div class="post-input post-input-2">
                          <label for="name" class="post-input-label-defualt">
                            Title *
                          </label>
                          <input
                            type="text"
                            name="website"
                            placeholder="Website"
                            id="website"
                          />
                        </div>
                      </div>
                      <div class="col-xl-12">
                        <label for="comment" class="post-input-label-defualt">
                          Context *
                        </label>
                        <div class="post-input has-textarea">
                          <textarea
                            id="comment"
                            name="message"
                            placeholder="Type here..."
                          ></textarea>
                        </div>
                      </div>
                      <div class="col-xl-12">
                        <div class="post-check mb-30">
                          <input type="checkbox" />
                          <span>
                            By clicking this I have read and agree to the Terms
                            & Conditions.
                          </span>
                        </div>
                      </div>
                    </div>

                    <button
                      type="submit"
                      class="sasup-theme-btn sasup-theme-btn-2 transition-5"
                    >
                      Submit Message
                    </button>
                  </form>
                  <p class="ajax-response"></p>
                </div>
              </div>
            </div>
          </div>
          <div class="contact-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14562.957063456197!2d90.69413688654156!3d24.145793130695765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375682765bb23567%3A0x7f5b0d890f8dffbd!2sMonohardi!5e0!3m2!1sen!2sbd!4v1629787582901!5m2!1sen!2sbd"
              allowfullscreen=""
              loading="lazy"
            ></iframe>
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
                      Couldn't find the Answer?
<br />
                      Contact us for any Query.
</h4>
<span class="sasup-cta-subtitle-4 mb-30">
                      Request a demo today.
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
</body>
</>
  );
};

export default Home;

