import React, { useEffect, useState } from "react";

const Header2 = () => {
  return (
    <>
      <header>
        <div class="header-sticky">
          <div class="header-main">
            <div class="container">
              <div class="row align-items-center">
                <div class="col-xxl-9 col-xl-9 col-lg-9 d-flex align-items-center col-md-6 col-sm-4 col-6">
                  <div class="sasup-logo mr-35 d-inline-block">
                    <a href="index.html">
                      <img
                        src="assets/img/logo/logo.webp"
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
                          <a href="index.html" style={{ color: "black" }}>
                            Home
                          </a>
                          <ul class="sub-menu">
                            <li>
                              <a href="index.html" style={{ color: "black" }}>
                                Home Layout 1
                              </a>
                            </li>
                            <li>
                              <a href="index-2.html" style={{ color: "black" }}>
                                Home Layout 2
                              </a>
                            </li>
                            <li>
                              <a href="index-3.html" style={{ color: "black" }}>
                                Home Layout 3
                              </a>
                            </li>
                            <li>
                              <a href="index-4.html" style={{ color: "black" }}>
                                Home Layout 4
                              </a>
                            </li>
                            <li>
                              <a href="index-5.html" style={{ color: "black" }}>
                                Home Layout 5
                              </a>
                              <span></span>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="#" style={{ color: "black" }}>
                            Page
                          </a>
                          <ul class="sub-menu">
                            <li>
                              <a href="about.html" style={{ color: "black" }}>
                                About
                              </a>
                            </li>
                            <li>
                              <a
                                href="about-02.html"
                                style={{ color: "black" }}
                              >
                                About V2
                              </a>
                              <span></span>
                            </li>
                            <li>
                              <a href="team.html" style={{ color: "black" }}>
                                Team
                              </a>
                            </li>
                            <li>
                              <a
                                href="team-details.html"
                                style={{ color: "black" }}
                              >
                                Team Details
                              </a>
                            </li>
                            <li>
                              <a href="service.html" style={{ color: "black" }}>
                                Service
                              </a>
                            </li>
                            <li>
                              <a
                                href="service-02.html"
                                style={{ color: "black" }}
                              >
                                Service V2
                              </a>
                              <span></span>
                            </li>
                            <li>
                              <a
                                href="service-details.html"
                                style={{ color: "black" }}
                              >
                                Service Details
                              </a>
                            </li>
                            <li>
                              <a
                                href="service-details-02.html"
                                style={{ color: "black" }}
                              >
                                Service Details V2
                              </a>
                              <span></span>
                            </li>
                            <li>
                              <a
                                href="portfolio.html"
                                style={{ color: "black" }}
                              >
                                Portfolio
                              </a>
                            </li>
                            <li>
                              <a
                                href="portfolio-details.html"
                                style={{ color: "black" }}
                              >
                                Portfolio Details
                              </a>
                            </li>
                            <li>
                              <a href="faq.html" style={{ color: "black" }}>
                                Faq
                              </a>
                              <span></span>
                            </li>
                            <li>
                              <a
                                href="footer-styles.html"
                                style={{ color: "black" }}
                              >
                                Footer Style
                              </a>
                              <span></span>
                            </li>
                            <li>
                              <a
                                href="error-page.html"
                                style={{ color: "black" }}
                              >
                                Error
                              </a>
                              <span></span>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="price.html" style={{ color: "black" }}>
                            Pricing
                          </a>
                          <ul class="sub-menu">
                            <li>
                              <a href="price.html" style={{ color: "black" }}>
                                Price
                              </a>
                              <span></span>
                            </li>
                            <li>
                              <a
                                href="price-02.html"
                                style={{ color: "black" }}
                              >
                                Price V2
                              </a>
                              <span></span>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="blog-list.html" style={{ color: "black" }}>
                            Blog
                          </a>
                          <ul class="sub-menu">
                            <li>
                              <a
                                href="blog-list.html"
                                style={{ color: "black" }}
                              >
                                Blog
                              </a>
                            </li>
                            <li>
                              <a
                                href="blog-grid.html"
                                style={{ color: "black" }}
                              >
                                Blog Grid
                              </a>
                              <span></span>
                            </li>
                            <li>
                              <a
                                href="blog-details.html"
                                style={{ color: "black" }}
                              >
                                Blog Details
                              </a>
                            </li>
                            <li>
                              <a
                                href="blog-details-02.html"
                                style={{ color: "black" }}
                              >
                                Blog Details V2
                              </a>
                              <span></span>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="contact.html" style={{ color: "black" }}>
                            Contact
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
                <div class="col-xxl-3 col-xl-3 col-lg-4 col-md-8 col-sm-8  col-6">
                  <div class="sasup-header-action-btn">
                    <a
                      href="sign-in.html"
                      class="sasup-transparent-btn sasup-transparent-btn-2"
                    >
                      <i class="fal fa-user"></i>Log in
                    </a>
                    <a
                      href="sign-up.html"
                      class="sasup-theme-btn sasup-broder-btn-space-3 ml-25 d-none d-sm-block"
                    >
                      Join Sasup
                    </a>
                    <div class="mobile-bar-control d-inline-block d-lg-none">
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

export default Header2;
