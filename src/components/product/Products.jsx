import React from "react";
// import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import star from "../../assets/images/Four Half Star.png";
import { FaRegHeart, FaRegEye } from "react-icons/fa";

const Products = ({ data }) => {
  const productItems = data?.map((el) => (
    <div key={el.id} className="products__wrapper__product">
      <div className="product__img__wrapper">
        <img src={el.images[0]} alt="" />
        <div className="product__wishlist__wrapper">
          <FaRegHeart />
          <FaRegEye />
        </div>
        <button className="shop__btn">Buy Now</button>
      </div>
      <hr />
      <div className="product__wrapper__product__content">
        <h4 className="product__title">{el.title}</h4>
        <div className="product__price__wrapper">
          <p>${el.price}</p>
          <del>${el.price * 1.5}</del>
        </div>
        <div className="product__limit__wrapper">
          <img src={star} alt="" />
          <p>({el.stock})</p>
        </div>
      </div>
    </div>
  ));

  return (
    <div className="products">
      <div className="container">
        <div className="products__wrapper">{productItems}</div>
      </div>
    </div>
  );
};

export default Products;
