import React, { useState, useEffect } from "react";
import axios from "../../api/index";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import Products from "../../components/product/Products";
import MainProducttop from "../../components/mainproduct__top/MainProducttop";
// import { MdOutlineMoped } from "react-icons/md";
// import imgbox from "../../assets/maincardimages/imgbox.png";
const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("products")
      .then((res) => setData(res.data.products))
      .catch((res) => console.log(res));
  }, []);

  return (
    <div className="home">
      <div className="container">
        <div className="home__wrapper">
          <div className="home__card__top__wrapper">
            <div className="home__card__top__wrapper__top">
              <span className="home__card__top__span"></span>
              <p className="home__card__top__text">Today's</p>
            </div>
            <div className="home__card__top__wrapper__bottom">
              <div className="home__card__top__wrapper__bottom__left">
                <h2 className="home__card__top__wrapper__bottom__left__title">
                  Flash Sales
                </h2>
                <ul className="home__card__top__wrapper__bottom__left__list">
                  <li className="home__card__top__wrapper__bottom__left__list__item">
                    <span>days</span>
                    <p>03</p>
                  </li>
                  <li className="left__list__dot">:</li>
                  <li className="home__card__top__wrapper__bottom__left__list__item">
                    <span>Hours</span>
                    <p>23</p>
                  </li>
                  <li className="left__list__dot">:</li>
                  <li className="left__list__dot">:</li>
                  <li className="home__card__top__wrapper__bottom__left__list__item">
                    <span>Minutes</span>
                    <p>19</p>
                  </li>
                  <li className="left__list__dot">:</li>
                  <li className="home__card__top__wrapper__bottom__left__list__item">
                    <span>Seconds</span>
                    <p>56</p>
                  </li>
                </ul>
              </div>
              <div className="home__card__top__wrapper__bottom__right">
                <FaArrowLeft className="home__card__top__wrapper__bottom__right__img" />
                <FaArrowRight className="home__card__top__wrapper__bottom__right__img" />
              </div>
            </div>
          </div>
        </div>
        <Products data={data?.slice(5, 9)} />
        <div className="home__wrapper">
          <div className="home__card__top__wrapper">
            <div className="home__card__top__wrapper__top">
              <span className="home__card__top__span"></span>
              <p className="home__card__top__text">Categories</p>
            </div>
            <div className="home__card__top__wrapper__bottom">
              <div className="home__card__top__wrapper__bottom__left">
                <h2 className="home__card__top__wrapper__bottom__left__title">
                  Browse By Category
                </h2>
              </div>
              <div className="home__card__top__wrapper__bottom__right">
                <FaArrowLeft className="home__card__top__wrapper__bottom__right__img" />
                <FaArrowRight className="home__card__top__wrapper__bottom__right__img" />
              </div>
            </div>
          </div>
        </div>
        <MainProducttop />
        <div className="home__wrapper">
          <div className="home__card__top__wrapper">
            <div className="home__card__top__wrapper__top">
              <span className="home__card__top__span"></span>
              <p className="home__card__top__text">This Month</p>
            </div>
            <div className="home__card__top__wrapper__bottom">
              <div className="home__card__top__wrapper__bottom__left">
                <h2 className="home__card__top__wrapper__bottom__left__title">
                  Best Selling Products
                </h2>
              </div>
              <button className="main__product__top__btn">View All</button>
            </div>
          </div>
        </div>
        <Products data={data?.slice(11, 15)} />
        <div className="home__wrapper">
          <div className="home__card__top__wrapper">
            <div className="home__card__top__wrapper__top">
              <span className="home__card__top__span"></span>
              <p className="home__card__top__text">Our Products</p>
            </div>
            <div className="home__card__top__wrapper__bottom">
              <div className="home__card__top__wrapper__bottom__left">
                <h2 className="home__card__top__wrapper__bottom__left__title">
                  Explore Our Products
                </h2>
              </div>
              <div className="home__card__top__wrapper__bottom__right">
                <FaArrowLeft className="home__card__top__wrapper__bottom__right__img" />
                <FaArrowRight className="home__card__top__wrapper__bottom__right__img" />
              </div>
            </div>
          </div>
        </div>
        <Products data={data.slice(13, 21)} />
        <div className="home__wrapper">
          <div className="home__card__top__wrapper">
            <div className="home__card__top__wrapper__top">
              <span className="home__card__top__span"></span>
              <p className="home__card__top__text">Featured</p>
            </div>
            <div className="home__card__top__wrapper__bottom">
              <div className="home__card__top__wrapper__bottom__left">
                <h2 className="home__card__top__wrapper__bottom__left__title">
                  New Arrival
                </h2>
              </div>
            </div>
          </div>
        </div>
        {/* <img src={imgbox} alt="" /> */}
      </div>
    </div>
  );
};

export default Home;
