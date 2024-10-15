import React, { useEffect, useState } from "react";
import Header from "./Header";

const Login = () => {
  return (
    <>
      <Header />
      <main>
        <div class="error-area pt-115 pb-115">
          <div class="container">
            <div class="error-content text-center">
              <h6 class="error-title" style={{ color: "#042954" }}>
                Kindly go to your school website we created for you to login and
                access your portal
              </h6>
              <p class="error-subtitle" style={{ color: "#042954" }}>
                Thank you
              </p>
              <a href="/" class="sasup-theme-btn-2">
                Go to Home <i class="fal fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Login;
