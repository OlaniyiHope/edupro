import React, { useEffect, useState } from "react";
import Header from "./Header";
import backs from "./footimg.jpg";

const Home = () => {
  return (
    <>
      <Header />
      <section class="container">
        <div class="card__container swiper">
          <div class="card__content">
            <div class="swiper-wrapper">
              <article class="card__article swiper-slide">
                <div class="card__image">
                  <img
                    src="assets/img/avatar-1.png"
                    alt="image"
                    class="card__img"
                  />
                  <div class="card__shadow"></div>
                </div>

                <div class="card__data">
                  <h3 class="card__name">Kell Dawx</h3>
                  <p class="card__description">
                    Passionate about development and design, I carry out
                    projects at the request of users.
                  </p>

                  <a href="#" class="card__button">
                    View More
                  </a>
                </div>
              </article>

              <article class="card__article swiper-slide">
                <div class="card__image">
                  <img
                    src="assets/img/avatar-2.png"
                    alt="image"
                    class="card__img"
                  />
                  <div class="card__shadow"></div>
                </div>

                <div class="card__data">
                  <h3 class="card__name">Lotw Fox</h3>
                  <p class="card__description">
                    Passionate about development and design, I carry out
                    projects at the request of users.
                  </p>

                  <a href="#" class="card__button">
                    View More
                  </a>
                </div>
              </article>

              <article class="card__article swiper-slide">
                <div class="card__image">
                  <img
                    src="assets/img/avatar-3.png"
                    alt="image"
                    class="card__img"
                  />
                  <div class="card__shadow"></div>
                </div>

                <div class="card__data">
                  <h3 class="card__name">Sara Mit</h3>
                  <p class="card__description">
                    Passionate about development and design, I carry out
                    projects at the request of users.
                  </p>

                  <a href="#" class="card__button">
                    View More
                  </a>
                </div>
              </article>

              <article class="card__article swiper-slide">
                <div class="card__image">
                  <img
                    src="assets/img/avatar-4.png"
                    alt="image"
                    class="card__img"
                  />
                  <div class="card__shadow"></div>
                </div>

                <div class="card__data">
                  <h3 class="card__name">Jenny Wert</h3>
                  <p class="card__description">
                    Passionate about development and design, I carry out
                    projects at the request of users.
                  </p>

                  <a href="#" class="card__button">
                    View More
                  </a>
                </div>
              </article>

              <article class="card__article swiper-slide">
                <div class="card__image">
                  <img
                    src="assets/img/avatar-5.png"
                    alt="image"
                    class="card__img"
                  />
                  <div class="card__shadow"></div>
                </div>

                <div class="card__data">
                  <h3 class="card__name">Lexa Kin</h3>
                  <p class="card__description">
                    Passionate about development and design, I carry out
                    projects at the request of users.
                  </p>

                  <a href="#" class="card__button">
                    View More
                  </a>
                </div>
              </article>
            </div>
          </div>

          <div class="swiper-button-next">
            <i class="ri-arrow-right-s-line"></i>
          </div>

          <div class="swiper-button-prev">
            <i class="ri-arrow-left-s-line"></i>
          </div>

          <div class="swiper-pagination"></div>
        </div>
      </section>
    </>
  );
};

export default Home;
