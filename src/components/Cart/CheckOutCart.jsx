const CheckOutCart = () => {
  return (
    <>
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
    </>
  );
};

export default CheckOutCart;
