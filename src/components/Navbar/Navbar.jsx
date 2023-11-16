import React, { useState } from "react";
import { Search, ShoppingCart, Menu } from "react-feather";
import Cart from "../Cart/Cart";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);
  const [cart, setCart] = useState(false);

  const handleClickToggle = () => {
    setToggle(!toggle);
    if (toggle == false) {
      if (openSearch == true) {
        setOpenSearch(openSearch == false);
        if (cart == true) {
          setCart(cart == false);
        }
      } else if (cart == true) {
        setCart(cart == false);
      }
    }
  };

  const handleClickSearch = () => {
    setOpenSearch(!openSearch);
    if (openSearch == false) {
      if (toggle == true) {
        setToggle(toggle == false);
        if (cart == true) {
          setCart(cart == false);
        }
      } else if (cart == true) {
        setCart(cart == false);
      }
    }
  };

  const handleClickCart = () => {
    setCart(!cart);
    if (cart == false) {
      if (toggle == true) {
        setToggle(toggle == false);
        if (openSearch == true) {
          setOpenSearch(openSearch == false);
        }
      } else if (openSearch == true) {
        setOpenSearch(openSearch == false);
      }
    }
  };

  return (
    <>
      <nav className="navbar">
        <a href="" className="navbar-logo">
          COFFEE <span>RESTO.</span>
        </a>

        <div className={toggle ? "navbar-nav active" : "navbar-nav"}>
          <a href="#">Home</a>
          <a href="#">Coffee</a>
          <a href="#">Bakery</a>
          <a href="#">Shop</a>
          <a href="#">About</a>
        </div>

        <div className="navbar-extra">
          <a id="search" onClick={() => handleClickSearch()}>
            <Search />
          </a>
          <a id="shopping-cart" onClick={() => handleClickCart()}>
            <ShoppingCart />
          </a>
          <a id="hamburger-menu" onClick={() => handleClickToggle()}>
            <Menu />
          </a>
        </div>
        <div className={openSearch ? "search-form active" : "search-form"}>
          <input type="search" id="search-box" placeholder="search here..." />
          <label htmlFor="search-box">
            <Search />
          </label>
        </div>
        <div className={cart ? "shopping-cart active" : "shopping-cart"}>
          <Cart />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
