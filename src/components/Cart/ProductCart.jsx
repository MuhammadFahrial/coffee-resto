import { Plus, Minus, Trash2 } from "react-feather";
import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  removeItems,
} from "../../features/cart/cartSlice";

const ProductCart = () => {
  const dispacth = useDispatch();
  const cartProduct = useSelector((state) => state.cart.cartItems);

  const handleToIncrement = (item) => {
    dispacth(increment(item));
  };

  const handleToDecrement = (item) => {
    dispacth(decrement(item));
  };

  const handleToRemoveItems = (item) => {
    dispacth(removeItems(item));
  };

  return (
    <>
      {cartProduct.map((product) => {
        return (
          <div className="cart-item" key={product.id}>
            <img src={product.img} alt="" />
            <div className="item-detail">
              <h2 className="item-name">{product.name}</h2>
              <div className="item-category">
                <p className="item-type">Hot</p>
                <p className="item-size">Large</p>
              </div>
            </div>
            <div className="item-quantity">
              <button onClick={() => handleToDecrement(product)}>
                <Minus size={14} />
              </button>
              <p>{product.quantity}</p>
              <button onClick={() => handleToIncrement(product)}>
                <Plus size={14} />
              </button>
            </div>
            <p className="item-price">
              {new Intl.NumberFormat("id-ID", {
                style: "currency",
                currency: "IDR",
                minimumFractionDigits: 0,
              }).format(product.total)}
            </p>
            <button
              className="delete"
              onClick={() => handleToRemoveItems(product)}
            >
              <Trash2 />
            </button>
          </div>
        );
      })}
    </>
  );
};

export default ProductCart;
