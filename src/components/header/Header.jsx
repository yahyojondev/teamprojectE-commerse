import React from "react";
import "./header.scss";
import { GoSearch } from "react-icons/go";
import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header id="header">
      <div className=" nav">
        <div id="nav__top">
          <div className="container nav__top">
            <h2 className="nav__top-title">
              Summer Sale For All Swim Suits And Free Express Delivery - OFF
              50%! <a href="#">ShopNow</a>
            </h2>
            <select name="" id="">
              <option value="">English</option>
            </select>
          </div>
        </div>
        <div id="nav__end">
          <div className="container nav__end">
            <div className="nav__end-logo">
              <Link to={`/`}>
                <h2>Exclusive</h2>
              </Link>
            </div>
            <ul className="nav__end__list">
              <li className="nav__end__item">
                <NavLink to={"/"}>Home</NavLink>
              </li>
              <li className="nav__end__item">
                <NavLink to={"/about"}>About</NavLink>
              </li>
              <li className="nav__end__item">
                <NavLink to={"/contact"}>Contact</NavLink>
              </li>
              <li className="nav__end__item">
                <NavLink to={"/signUp"}>SignUp</NavLink>
              </li>
            </ul>
            <div className="end">
              <div className="nav__end-search">
                <input
                  type="text"
                  placeholder="What are you looking for?"
                  required
                />
                <GoSearch />
              </div>
              <div className="nav__end-card">
                <Link to={`/favourite`}>
                  <FaRegHeart />
                </Link>
                <Link to={`/karzinka`}>
                  <IoCartOutline />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
