import React, { useEffect, useState } from "react";

const Header = () => {
  return (
    <>
      <header>
        <div class="header-transparent theme_bg header-sticky">
          <div class="header-main">
            <div class="container">
              <div class="row align-items-center">
                <div class="col-xxl-9 col-xl-9 col-lg-9 d-flex align-items-center col-md-6 col-sm-4 col-6">
                  <div class="sasup-logo mr-35 d-inline-block">
                    <a href="index.html">
                      <img
                        src="assets/img/logo/logo-white.webp"
                        class="logo-1"
                        alt="image not found"
                      />
                    </a>
                    <a href="index.html">
                      <img
                        src="assets/img/logo/logo.webp"
                        class="logo-2"
                        alt="image not found"
                      />
                    </a>
                  </div>
                  <div class="sasup-header d-none d-lg-inline-block">
                    <nav id="mobile-menu">
                      <ul>
                        <li>
                          <a href="index.html">Home</a>
                          <ul class="sub-menu">
                            <li>
                              <a href="index.html">Home Layout 1</a>
                            </li>
                            <li>
                              <a href="index-2.html">Home Layout 2</a>
                            </li>
                            <li>
                              <a href="index-3.html">Home Layout 3</a>
                            </li>
                            <li>
                              <a href="index-4.html">Home Layout 4</a>
                            </li>
                            <li>
                              <a href="index-5.html">Home Layout 5</a>
                              <span></span>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="#">Page</a>
                          <ul class="sub-menu">
                            <li>
                              <a href="about.html">About</a>
                            </li>
                            <li>
                              <a href="about-02.html">About V2</a>
                              <span></span>
                            </li>
                            <li>
                              <a href="team.html">Team</a>
                            </li>
                            <li>
                              <a href="team-details.html">Team Details</a>
                            </li>
                            <li>
                              <a href="service.html">Service</a>
                            </li>
                            <li>
                              <a href="service-02.html">Service V2</a>
                              <span></span>
                            </li>
                            <li>
                              <a href="service-details.html">Service Details</a>
                            </li>
                            <li>
                              <a href="service-details-02.html">
                                Service Details V2
                              </a>
                              <span></span>
                            </li>
                            <li>
                              <a href="portfolio.html">Portfolio</a>
                            </li>
                            <li>
                              <a href="portfolio-details.html">
                                Portfolio Details
                              </a>
                            </li>
                            <li>
                              <a href="faq.html">Faq</a>
                              <span></span>
                            </li>
                            <li>
                              <a href="footer-styles.html">Footer Style</a>
                              <span></span>
                            </li>
                            <li>
                              <a href="error-page.html">Error</a>
                              <span></span>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="price.html">Pricing</a>
                          <ul class="sub-menu">
                            <li>
                              <a href="price.html">Price</a>
                              <span></span>
                            </li>
                            <li>
                              <a href="price-02.html">Price V2</a>
                              <span></span>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="blog-list.html">Blog</a>
                          <ul class="sub-menu">
                            <li>
                              <a href="blog-list.html">Blog</a>
                            </li>
                            <li>
                              <a href="blog-grid.html">Blog Grid</a>
                              <span></span>
                            </li>
                            <li>
                              <a href="blog-details.html">Blog Details</a>
                            </li>
                            <li>
                              <a href="blog-details-02.html">Blog Details V2</a>
                              <span></span>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="contact.html">Contact</a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
                <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-8 col-6">
                  <div class="sasup-header-action-btn">
                    <a href="sign-in.html" class="sasup-transparent-btn">
                      <i class="fal fa-user"></i>Log in
                    </a>
                    <a
                      href="sign-up.html"
                      class="sasup-theme-btn style-white ml-25 d-none d-sm-inline-block"
                    >
                      <span>Join Sasup</span>
                    </a>
                    <div class="mobile-bar-control mobile-bar-control-white d-inline-block d-lg-none">
                      <div class="line"></div>
                      <div class="line"></div>
                      <div class="line"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
