import CheckOutCart from "./CheckOutCart";
import ProductCart from "./ProductCart";
import { cartQuantitySelector } from "../../features/cart/cartSlice";
import { useSelector } from "react-redux";

const Cart = () => {
  const totalQuantity = useSelector(cartQuantitySelector);

  return (
    <>
      {totalQuantity < 1 ? (
        <h1 className="empty">Cart is Empy</h1>
      ) : (
        <>
          <h1>Cart</h1>
          <div className="cart-product">
            <ProductCart />
          </div>

          <div className="checkout-form">
            <CheckOutCart />
          </div>
        </>
      )}
    </>
  );
};

export default Cart;
