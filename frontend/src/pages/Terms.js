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
                  <h2 class="section__title">Edu Pro Terms & Conditions</h2>
                  <p class="mt-25">
                    Welcome to Edu Pro! Thank you for choosing our product and
                    services. By using our Services, you are agreeing to these
                    terms of use. Please read them carefully.
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
                    <h3 class="sasup-policy__title">Using our service</h3>
                    <p>
                      Don’t misuse our Services. For example, don’t interfere
                      with our Services or try to access them using a method
                      other than the interface and the instructions that we
                      provide. We may suspend or stop providing our Services to
                      you if you do not comply with our terms or policies or if
                      we are investigating suspected misconduct.
                    </p>
                  </div>

                  <div class="sasup-policy__item mb-35">
                    <p>
                      Using our Services does not give you ownership of any
                      intellectual property rights in our Services or the
                      content you access. You may not use content from our
                      Services unless you obtain permission from its owner.
                      These terms do not grant you the right to use any branding
                      or logos used in our Services. Dont remove, obscure, or
                      alter any legal notices displayed in or along with our
                      Services.
                    </p>
                  </div>

                  <div class="sasup-policy__item mb-35">
                    <p>
                      Our Services display some content that is not Edu Pro.
                      This content is the sole responsibility of the entity that
                      makes it available. We may review content to determine
                      whether it is illegal or violates our policies, and we may
                      remove or refuse to display content that we reasonably
                      believe violates our policies or the law. But that does
                      not necessarily mean that we review content, so please
                      dont assume that we do.{" "}
                    </p>
                    <p>
                      In connection with your use of the Services, we may send
                      you service announcements, administrative messages, and
                      other information. You may opt out of some of those
                      communications if you like.
                    </p>
                  </div>

                  <div class="sasup-policy__item mb-35">
                    <h3 class="sasup-policy__title">Your school portal</h3>
                    <p>
                      You will need a Edu Pro Account in order to use most of
                      our services. You may create your own Edu Pro Account, or
                      your Edu Pro Account may be assigned to you by an
                      administrator, such as an employer from an educational
                      institution with which you are registered as a student, a
                      staff, or a Parent/Guardian of a student. If you are using
                      a Edu Pro Account created for you by an administrator,
                      different or additional terms may apply and your
                      administrator may be able to access or disable your
                      account. If you learn of any unauthorized use of your
                      password or account, contact us immediately.
                    </p>
                  </div>
                  <div class="sasup-policy__item mb-35">
                    <h3 class="sasup-policy__title">
                      Privacy and copyright protection
                    </h3>
                    <p>
                      Edu Pro privacy policies explain how we treat your
                      personal data and protect your privacy when you use our
                      Services. By using our Services, you agree that Edu Pro
                      can use such data in accordance with our privacy policies.
                    </p>
                  </div>
                  <div class="sasup-policy__item mb-35">
                    <h3 class="sasup-policy__title">
                      Your content in our services
                    </h3>
                    <p>
                      The use of our service might sometimes demand that you
                      submit your contents on our site. You retain ownership of
                      any intellectual property rights that you hold in that
                      content. In short, what belongs to you stays yours.
                    </p>
                  </div>
                  <div class="sasup-policy__item mb-35">
                    <p>
                      When you upload or otherwise submit content to our
                      Services, you give Edu Pro a worldwide license to use,
                      host, store, reproduce, modify, create derivative works
                      (such as those resulting from translations, adaptations or
                      other changes we make so that your content works better
                      with our Services), communicate, publish, publicly
                      perform, publicly display and distribute such content. The
                      rights you grant in this license are for the limited
                      purpose of operating, promoting, and improving our
                      Services, and to develop new ones. This license continues
                      even if you stop using our Services (for example, for a
                      Poetry or Essay you submit in our online competitions).
                      Make sure you have the necessary rights to grant us this
                      license for any content that you submit to our Services.
                    </p>
                    <p>
                      You can find more information about how Edu Pro uses and
                      stores content in the privacy policy. If you submit
                      feedback or suggestions about our Services, we may use
                      your feedback or suggestions without obligation to you to
                      improve our service.
                    </p>
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
                        Email: <span>info@edupro.com.ng</span>
                      </li>
                    </ul>
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
