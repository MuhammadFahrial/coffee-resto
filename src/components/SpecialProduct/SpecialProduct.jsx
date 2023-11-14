import React from "react";
import { ShoppingCart, Heart } from "react-feather";
import creamLatte from "../../assets/Product/SpecialCoffee/1.jpg";
import croissant from "../../assets/Product/SpecialDessert/1.jpg";

const SpecialProduct = () => {
  return (
    <>
      <section id="special-menu" className="special-menu">
        <div className="special-coffee">
          {/* Special Coffee Start */}
          <h1>Our Special Coffee</h1>
          <div className="row">
            <div className="card-menu">
              <img src={creamLatte} alt="cream-latte" />
              <button className="favorite">
                <Heart />
              </button>
              <h4>Cream Latte</h4>
              <p>Lorem ipsum dolor sit amet.</p>
              <div className="extra-card">
                <h3>Rp.15000</h3>
                <button>
                  <ShoppingCart color="#30261c" size={20} />
                </button>
              </div>
            </div>
            <div className="card-menu">
              <img src={creamLatte} alt="cream-latte" />
              <button className="favorite">
                <Heart />
              </button>
              <h4>Cream Latte</h4>
              <p>Lorem ipsum dolor sit amet.</p>
              <div className="extra-card">
                <h3>Rp.15000</h3>
                <button>
                  <ShoppingCart color="#30261c" size={20} />
                </button>
              </div>
            </div>
            <div className="card-menu">
              <img src={creamLatte} alt="cream-latte" />
              <button className="favorite">
                <Heart />
              </button>
              <h4>Cream Latte</h4>
              <p>Lorem ipsum dolor sit amet.</p>
              <div className="extra-card">
                <h3>Rp.15000</h3>
                <button>
                  <ShoppingCart color="#30261c" size={20} />
                </button>
              </div>
            </div>
            <div className="card-menu">
              <img src={creamLatte} alt="cream-latte" />
              <button className="favorite">
                <Heart />
              </button>
              <h4>Cream Latte</h4>
              <p>Lorem ipsum dolor sit amet.</p>
              <div className="extra-card">
                <h3>Rp.15000</h3>
                <button>
                  <ShoppingCart color="#30261c" size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Special Coffee End */}

        {/* Special Dessert Start */}
        <div className="special-dessert">
          <h1>Our Special Dessert</h1>
          <div className="row">
            <div className="card-menu">
              <img src={croissant} alt="cream-latte" />
              <button className="favorite">
                <Heart />
              </button>
              <h4>Croissant</h4>
              <p>Lorem ipsum dolor sit amet.</p>
              <div className="extra-card">
                <h3>Rp.10000</h3>
                <button>
                  <ShoppingCart color="#30261c" size={20} />
                </button>
              </div>
            </div>
            <div className="card-menu">
              <img src={croissant} alt="cream-latte" />
              <button className="favorite">
                <Heart />
              </button>
              <h4>Croissant</h4>
              <p>Lorem ipsum dolor sit amet.</p>
              <div className="extra-card">
                <h3>Rp.10000</h3>
                <button>
                  <ShoppingCart color="#30261c" size={20} />
                </button>
              </div>
            </div>
            <div className="card-menu">
              <img src={croissant} alt="cream-latte" />
              <button className="favorite">
                <Heart />
              </button>
              <h4>Croissant</h4>
              <p>Lorem ipsum dolor sit amet.</p>
              <div className="extra-card">
                <h3>Rp.10000</h3>
                <button>
                  <ShoppingCart color="#30261c" size={20} />
                </button>
              </div>
            </div>
            <div className="card-menu">
              <img src={croissant} alt="cream-latte" />
              <button className="favorite">
                <Heart />
              </button>
              <h4>Croissant</h4>
              <p>Lorem ipsum dolor sit amet.</p>
              <div className="extra-card">
                <h3>Rp.10000</h3>
                <button>
                  <ShoppingCart color="#30261c" size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Special Dessert End */}
      </section>
    </>
  );
};

export default SpecialProduct;
