import React, { useEffect, useState } from "react";

const Header = () => {
  return (
    <>
      <header>
        <div class="header-area header_space header-transparent header-sticky">
          <div class="sasup-header-4">
            <div class="container">
              <div class="row align-items-center">
                <div class="col-xxl-2 col-xl-2 col-lg-2 col-md-6 col-4">
                  <div class="sasup-logo mr-35 d-inline-block">
                    <a href="index.html" class="logo-1">
                      <img
                        src="assets/img/logo/logo-white.webp"
                        alt="image not found"
                      />
                    </a>
                    <a href="index.html" class="logo-2">
                      <img
                        src="assets/img/logo/logo.webp"
                        alt="image not found"
                      />
                    </a>
                  </div>
                </div>
                <div class="col-xxl-7 col-xl-7 col-lg-7 d-none d-lg-inline-block">
                  <div class="sasup-header-nav-4 sasup-header">
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
                <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-8">
                  <div class="sasup-header-action-btn">
                    <a href="sign-in.html" class="sasup-transparent-btn">
                      <i class="fal fa-user"></i>Log in
                    </a>
                    <a
                      href="sign-up.html"
                      class="sasup-theme-btn ml-25 d-none d-sm-inline-block"
                    >
                      <span>Free Trial</span>
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
    </>
  );
};

export default Header;
