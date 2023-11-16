import React from "react";
import { Plus, Minus, Trash2 } from "react-feather";
import Product1 from "../../assets/Product/SpecialCoffee/1.jpg";

const Cart = () => {
  return (
    <>
      <h1>Cart</h1>
      <div className="cart-product">
        <div className="cart-item">
          <img src={Product1} alt="" />
          <div className="item-detail">
            <h2 className="item-name">Coffee Latte</h2>
            <div className="item-category">
              <p className="item-type">Hot</p>
              <p className="item-size">Large</p>
            </div>
          </div>
          <div className="item-quantity">
            <button>
              <Minus size={14} />
            </button>
            <p>2</p>
            <button>
              <Plus size={14} />
            </button>
          </div>
          <p className="item-price">RP. 15000</p>
          <button className="delete">
            <Trash2 />
          </button>
        </div>
      </div>

      <div className="checkout-form">
        <div className="sub-total">
          <h3>Subtotal</h3>
          <h3>Rp. 15000</h3>
        </div>
        <div className="discount">
          <p>Discount</p>
          <p>(10%) - Rp. 15000</p>
        </div>
        <div className="tax">
          <p>Tax</p>
          <p>+ RP. 13000</p>
        </div>
        <div className="total">
          <h3>Total</h3>
          <h3>Rp. 13000</h3>
        </div>

        <div className="checkout">
          <button>Checkout</button>
        </div>
      </div>
    </>
  );
};

export default Cart;
