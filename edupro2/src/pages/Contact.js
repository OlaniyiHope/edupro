import React, { useEffect, useState } from "react";
import back from "./breads.jpg";
const Contact = () => {
  const backgroundStyle = {
    backgroundImage: `url(${back})`,
  };
  return (
    <>
      <main>
        <div
          class="breadcrumb-area pt-215 pb-140 mb-110 pb-130"
          style={backgroundStyle}
        >
          <div class="container">
            <div class="breadcrumb-content text-center">
              <h3 class="breadcrumb-title">Contact</h3>
              <div class="breadcrumb-trail">
                <nav>
                  <ul class="trail-items">
                    <li class="trail-item">
                      <a href="index.html">
                        <span>Home</span>
                      </a>
                    </li>
                    <li class="trail-item">
                      <span>Contact</span>
                    </li>
                  </ul>
                </nav>
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
                      Naff the little rotter have gutted mate baking legged.
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
                          +(536) 84 95 62 45
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
                            [email&#160;protected]
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
                          Dhaka-1506 Bangladesh
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
                            Website *
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
                          Comment *
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
      </main>
      <footer
        class="footer-area pt-90 footer-negative-space"
        data-bg-color="#eeeff4"
      >
        <div class=" container pb-80 has-border-bottom">
          <div class="footer-1">
            <div class="row">
              <div class="col-xxl-4 col-xl-4 col-lg-4 order-last col-sm-12 order-lg-first">
                <div class="footer-widget wow fadeInUp" data-wow-delay=".2s">
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
                    href="service-details.html"
                    class="sasup-theme-btn sasup-theme-btn-2"
                  >
                    <span>Get started</span>
                  </a>
                </div>
              </div>
              <div class="col-xxl-8 col-xl-8 col-lg-8">
                <div class="row mb-30 mb-lg-0">
                  <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-6 mb-30 mb-lg-0">
                    <div
                      class="footer-widget wow fadeInUp"
                      data-wow-delay=".4s"
                    >
                      <h5>Product</h5>
                      <ul>
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
                          <a href="about.html">What’s New</a>
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
                    class="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-6 mb-30 mb-lg-0 wow fadeInUp"
                    data-wow-delay=".6s"
                  >
                    <div class="footer-widget">
                      <h5>Resources</h5>
                      <ul>
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
                    class="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-6 mb-30 mb-lg-0 wow fadeInUp"
                    data-wow-delay=".8s"
                  >
                    <div class="footer-widget">
                      <h5>Solutions</h5>
                      <ul>
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

export default Contact;
