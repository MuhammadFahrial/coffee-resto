import { useSelector } from "react-redux";
import { cartTotalSelector } from "../../features/cart/cartSlice";

const CheckOutCart = () => {
  const tax = 3000;
  const total = useSelector(cartTotalSelector);

  return (
    <>
      <div className="sub-total">
        <h3>Subtotal</h3>
        <h3>
          {new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
            minimumFractionDigits: 0,
          }).format(total)}
        </h3>
      </div>
      <div className="discount">
        <p>Discount</p>
        <p>-</p>
      </div>
      <div className="tax">
        <p>Tax</p>
        <p>+ RP. {tax}</p>
      </div>
      <div className="total">
        <h3>Total</h3>
        <h3>
          {new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
            minimumFractionDigits: 0,
          }).format(total + tax)}
        </h3>
      </div>

      <div className="checkout">
        <button>Checkout</button>
      </div>
    </>
  );
};

export default CheckOutCart;
