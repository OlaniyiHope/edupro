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
                    <a href="/" class="logo-1">
                      <img
                        src="assets/img/logo/eduwhite.png"
                        alt="image not found"
                      />
                    </a>
                    <a href="/" class="logo-2">
                      <img
                        src="assets/img/logo/edu.PNG"
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
                          <a href="/">Home</a>
                        </li>
                        <li>
                          <a href="/about">About</a>
                        </li>
                        <li>
                          <a href="/services">Services</a>
                        </li>
                        <li>
                          <a href="/download">Download</a>
                        </li>
                        <li>
                          <a href="/pricing">Pricing</a>
                        </li>
                        <li>
                          <a href="/contact">Contact</a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
                <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-8">
                  <div class="sasup-header-action-btn">
                    <a href="/login" class="sasup-transparent-btn">
                      <i class="fal fa-user"></i>Log in
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
                <img src="assets/img/logo/eduwhite.png" alt="image not found" />
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
              href="/login"
              class="sasup-border-btn d-block sasup-broder-btn-space-3 ms-0 text-center mb-2"
            >
              login
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
