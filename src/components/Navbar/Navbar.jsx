import React, { useState } from "react";
import { Search, ShoppingCart, Menu } from "react-feather";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [cart, setCart] = useState(false);

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
          <a href="#" id="search">
            <Search />
          </a>
          <a href="#" id="shopping-cart" onClick={() => setCart(!cart)}>
            <ShoppingCart />
          </a>
          <a id="hamburger-menu" onClick={() => setToggle(!toggle)}>
            <Menu />
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
