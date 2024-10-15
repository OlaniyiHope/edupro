import React, { useEffect, useState } from "react";

import Header2 from "./Header2";
import back from "./outo.png";
import backs from "./footimg.jpg";
import pro from "./exam.png";
import r1 from "./examtwo.png";
import r5 from "./examthree.png";
import Footer from "./Footer";
import "./style.css";
import Test from "./Test";
const Cbt = () => {
  const backgroundStyle = {
    backgroundImage: `url(${back})`,
  };
  const backgroundStyles = {
    backgroundImage: `url(${backs})`,
  };
  return (
    <>
      <body>
        <main>
          <div
            class="hero-area sasup-hero-height-4 p-rel bg-top-left d-flex align-items-center "
            // data-background="assets/img/bg/banner-1.webp"
            style={backgroundStyle}
          >
            <div class="hero-area-shape-wrap-4">
              <div class="shape-1 drop">
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
                    <h3 class="sasup-hero-title-4" style={{ color: "#fff107" }}>
                      Practice <br />
                      Examination in
                      <br /> one sitting
                    </h3>
                    <p class="sasup-hero-text-4">
                      Access past questions on any subject in WAEC, NECO, UTME,
                      interview questions, entrance exams and field of study
                      free for one month
                    </p>
                    <a href="/contact" class="sasup-hero-started-btn-4">
                      <span>Get Started</span>
                    </a>
                  </div>
                </div>
                <div class="col-xxl-6 col-xl-6 col-lg-6">
                  <div class="sasup-hero-content-right-img-4">
                    <img
                      src={pro}
                      alt="image not found"
                      style={{
                        float: "right",
                        width: "80%",
                        height: "80%",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="service-area pb-110">
            <div class="row">
              <div class="col-xxl-12">
                <div
                  class="sasup-section-title-wrap-4 mb-70 text-center wow fadeInUp"
                  data-wow-delay=".2s"
                >
                  <h4
                    class="sasup-section-title-4"
                    style={{ color: "#042954" }}
                  >
                    Fast track your learning process
                  </h4>
                  <span style={{ fontSize: "28px" }}>
                    Solve questions, get answers faster
                  </span>
                </div>
              </div>
            </div>
            <div class="container">
              <div class="row align-items-center">
                <div class="col-xxl-6 col-xl-6 col-lg-6">
                  <div class="sasup-hero-content-right-img-4">
                    <img
                      src={r1}
                      alt="image not found"
                      style={{
                        float: "right",
                        width: "80%",
                        height: "80%",
                      }}
                    />
                  </div>
                </div>
                <div class="col-xxl-6 col-xl-6 col-lg-6">
                  <div class="service-right-area-2 pl-70">
                    <div class="section-title-2 mb-30">
                      <h3
                        class="s-title visible-br-lg visible-br-md wow fadeInUp"
                        data-wow-delay=".2s"
                        style={{ color: "#042954" }}
                      >
                        Practice with EDVES WAEC past question
                      </h3>
                      <p
                        class="s-desc wow fadeInUp line-height-24"
                        data-wow-delay=".4s"
                        style={{ color: "#042954" }}
                      >
                        Learning experiences has never been better. Our Past
                        questions helps structure your learnings, giving you
                        more freedom to study and practice
                      </p>
                    </div>
                    <div
                      class="service-right-list-2  mb-30 wow fadeInUp"
                      data-wow-delay=".6s"
                    >
                      <ul>
                        <li
                          class="service-right-list-item"
                          style={{ color: "#042954" }}
                        >
                          <i class="fal fa-check"></i> Unlimited access to
                          expert verified answers
                        </li>
                        <br></br>
                        <li
                          class="service-right-list-item"
                          style={{ color: "#042954" }}
                        >
                          <i class="fal fa-check"></i> No Ad Interuptions school
                        </li>
                        <br></br>
                        <li
                          class="service-right-list-item"
                          style={{ color: "#042954" }}
                        >
                          <i class="fal fa-check"></i> One month free practice
                        </li>
                        <br></br>
                        <li
                          class="service-right-list-item"
                          style={{ color: "#042954" }}
                        >
                          <i class="fal fa-check"></i> Free Subscription
                        </li>
                      </ul>
                    </div>
                    <div
                      class="service-right-link-2 wow fadeInUp"
                      data-wow-delay=".8s"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="service-area pb-110">
            <div class="container">
              <div class="row align-items-center">
                <div class="col-xxl-6 col-xl-6 col-lg-6">
                  <div class="service-right-area-2 pl-70">
                    <div class="section-title-2 mb-30">
                      <h3
                        class="s-title visible-br-lg visible-br-md wow fadeInUp"
                        data-wow-delay=".2s"
                        style={{ color: "#042954" }}
                      >
                        Unbeatable assessment,made for you
                      </h3>
                      <p
                        class="s-desc wow fadeInUp line-height-24"
                        data-wow-delay=".4s"
                        style={{ color: "#042954" }}
                      >
                        Learning experiences has never been better. Our Past
                        questions helps structure your learnings, giving you
                        more freedom to study and practice
                      </p>
                    </div>
                    <div
                      class="service-right-list-2  mb-30 wow fadeInUp"
                      data-wow-delay=".6s"
                    >
                      <ul>
                        <li
                          class="service-right-list-item"
                          style={{ color: "#042954" }}
                        >
                          <i class="fal fa-check"></i> Unlimited access to
                          expert verified answers
                        </li>
                        <br></br>
                        <li
                          class="service-right-list-item"
                          style={{ color: "#042954" }}
                        >
                          <i class="fal fa-check"></i> No Ad Interuptions school
                        </li>
                        <br></br>
                        <li
                          class="service-right-list-item"
                          style={{ color: "#042954" }}
                        >
                          <i class="fal fa-check"></i> One month free practice
                        </li>
                        <br></br>
                        <li
                          class="service-right-list-item"
                          style={{ color: "#042954" }}
                        >
                          <i class="fal fa-check"></i> Free Subscription
                        </li>
                      </ul>
                    </div>
                    <div
                      class="service-right-link-2 wow fadeInUp"
                      data-wow-delay=".8s"
                    ></div>
                  </div>
                </div>
                <div class="col-xxl-6 col-xl-6 col-lg-6">
                  <div class="sasup-hero-content-right-img-4">
                    <img
                      src={r5}
                      alt="image not found"
                      style={{
                        float: "right",
                        width: "80%",
                        height: "80%",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/*}    <div class="blog-area pt-120 pb-90">
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
                    </div>*/}

          <div class="cta-area wow fadeInUp" data-wow-delay=".6s">
            <div class="container">
              <div class="row">
                <div class="col-xxl-12 col-xl-12">
                  <div
                    class="sasup-cta-box-4 text-center bg-default  pt-90 pb-95"
                    style={backgroundStyles}
                  >
                    <h4 class="sasup-cta-title-4">
                      Do not loose your one month free trial
                    </h4>
                    <span class="sasup-cta-subtitle-4 mb-30">
                      Solve questions, get answers faster
                    </span>
                    <a
                      href="/contact"
                      class="sasup-hero-started-btn-4"
                      style={{ marginRight: "20px" }}
                    >
                      <span>Get Started</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </body>
    </>
  );
};

export default Cbt;
