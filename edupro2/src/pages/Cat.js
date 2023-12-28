import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useFetch from "../../../../hook/useFetch";
import { useLocation } from "react-router-dom";

const Cat = () => {
  const location = useLocation();
  const categories = location.pathname.split("/")[2];
  const { data, loading, error } = useFetch(`/properties`);

  return (
    <>
      <section className="popular">
        <div className="content">
          <div className="items" key={data?._id}>
            <div className="box shadow">
              <div className="images row">
                <div className="img">
                  <img src={data?.photos} alt="" />
                </div>
                <div class="category category1">
                  <span>{data?.categories}</span>
                </div>
              </div>
              <div className="text row">
                <h1 className="title">{data?.title}</h1>
                <div className="date">
                  <i class="fas fa-calendar-days"></i>
                  <label>{data?.city}</label>
                </div>
                <div className="comment">
                  <i class="fas fa-comments"></i>
                  <label>{data?.cheapestPrice}</label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cat;
