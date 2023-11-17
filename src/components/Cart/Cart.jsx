import CheckOutCart from "./CheckOutCart";
import ProductCart from "./ProductCart";

const Cart = () => {
  return (
    <>
      <h1>Cart</h1>
      <div className="cart-product">
        <ProductCart />
        <ProductCart />
        <ProductCart />
        <ProductCart />
        <ProductCart />
      </div>

      <div className="checkout-form">
        <CheckOutCart />
      </div>
    </>
  );
};

export default Cart;
