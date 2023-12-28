import React, { useEffect, useState } from "react";
import Footer from "./Footer";

const Terms = () => {
  return (
    <>
      <main>
        <section class="df-contact__area pt-190 pb-50 sasup-bg-gray-1">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-xl-7 col-lg-8">
                <div class="df-section-wrapper text-center">
                  <h2 class="section__title">Sasup Terms & Conditions</h2>
                  <p class="mt-25">
                    Welcome to Sasup! We are delighted to have you as a valued
                    customer. Before you proceed with our services, please take
                    a moment to review our Terms & Conditions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="sasup-policy__area pt-115 pb-115">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-xl-10">
                <div class="sasup-policy__wrapper sasup-policy__translate p-relative z-index-1">
                  <div class="sasup-policy__item mb-35">
                    <h3 class="sasup-policy__title">Acceptance of Terms</h3>
                    <p>
                      By accessing and using services, including our website and
                      related platforms, you agree to comply with and be bound
                      by these Terms & Conditions. If you do not agree with
                      these terms, please do not use our services.
                    </p>
                  </div>

                  <div class="sasup-policy__item mb-35">
                    <h3 class="sasup-policy__title">Services</h3>
                    <p>
                      Sasup provides services for residential and commercial
                      properties. Our services include [describe the range of
                      services you provide]. We strive to deliver high-quality
                      workmanship, but we do not guarantee that our services
                      will be error-free or uninterrupted.
                    </p>
                  </div>

                  <div class="sasup-policy__item mb-35">
                    <h3 class="sasup-policy__title">
                      Booking and Appointments
                    </h3>
                    <p>
                      To book an appointment, you must provide accurate and
                      complete information. We reserve the right to reschedule
                      or cancel appointments due to unforeseen circumstances. If
                      you need to reschedule or cancel an appointment, please
                      notify us within a reasonable timeframe.
                    </p>
                  </div>

                  <div class="sasup-policy__item mb-35">
                    <h3 class="sasup-policy__title">Payment</h3>
                    <p>
                      Payment for our services is due at the time of completion.
                      We accept [list accepted payment methods]. If payment is
                      not received, we may withhold completed services until
                      payment is made.
                    </p>
                  </div>
                  <div class="sasup-policy__item mb-35">
                    <h3 class="sasup-policy__title">Liability</h3>
                    <p>
                      Sasup is not liable for any damage, injury, or loss
                      resulting from the use of our services, except in cases of
                      gross negligence or intentional misconduct. It's your
                      responsibility to maintain the safety of your property
                      before and after our services
                    </p>
                  </div>
                  <div class="sasup-policy__item mb-35">
                    <h3 class="sasup-policy__title">Intellectual Property</h3>
                    <p>
                      All content and materials provided by Sasup, including but
                      not limited to logos, images, and text, are protected by
                      intellectual property laws and are owned by us.
                    </p>
                  </div>
                  <div class="sasup-policy__item mb-35">
                    <h3 class="sasup-policy__title">Changes to Terms</h3>
                    <p>
                      We may update these Terms & Conditions at any time. It's
                      your responsibility to review these terms periodically.
                      Continued use of our services after any changes indicates
                      your acceptance of the updated terms.
                    </p>
                    <ul>
                      <li>Service Description</li>
                      <li>Payment and Billing</li>
                      <li>User Responsibilities</li>
                      <li>Intellectual Property</li>
                      <li>Privacy and Data Handling</li>
                      <li>Dispute Resolution</li>
                    </ul>
                  </div>
                  <div class="sasup-policy__contact">
                    <h3 class="sasup-policy__title sasup-policy__title-2">
                      Contact us
                    </h3>
                    <p>
                      If you have any questions about our Terms & Conditions,
                      please contact us at
                    </p>

                    <ul>
                      <li>
                        Email:{" "}
                        <span>
                          <a href="https://www.devsnews.com/cdn-cgi/l/email-protection#1f6c6a6f6f706d6b5f6c7e6c6a6f317c7072">
                            <span
                              class="__cf_email__"
                              data-cfemail="fb888e8b8b94898fbb889a888e8bd5989496"
                            >
                              [email&#160;protected]
                            </span>
                          </a>
                        </span>
                      </li>
                    </ul>

                    <div class="sasup-policy__address">
                      <p class="mb-0">
                        <a
                          href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12797.802464900029!2d-83.13319788146339!3d36.68770817009452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x885b172234e50f17%3A0x89b2bd832c241ea9!2sJonesville%2C%20VA%2024263%2C%20USA!5e0!3m2!1sen!2sbd!4v1692792416975!5m2!1sen!2sbd"
                          target="_blank"
                        >
                          800S, Salt Lake City, USA
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Terms;
