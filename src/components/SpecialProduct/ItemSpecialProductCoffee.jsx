import React from "react";
import { ShoppingCart, Heart } from "react-feather";
import { productSpecialCoffee } from "../../DetailsProduct";
import { useDispatch } from "react-redux";
import { addItems } from "../../features/cart/cartSlice";

const ItemSpecialProductCoffee = () => {
  const dispatch = useDispatch();

  const handleToAdd = (item) => {
    dispatch(addItems(item));
  };

  return (
    <>
      {React.Children.toArray(
        productSpecialCoffee.map((product) => (
          <div className="card-menu" key={product.id}>
            <img src={product.img} alt="cream-latte" />
            <h4>{product.name}</h4>
            <p>{product.description}</p>
            <div className="extra-card">
              <h3>
                {new Intl.NumberFormat("id-ID", {
                  style: "currency",
                  currency: "IDR",
                  minimumFractionDigits: 0,
                }).format(product.price)}
              </h3>
              <div className="button-card">
                <button className="favorite">
                  <Heart size={18} />
                </button>

                <button onClick={() => handleToAdd(product)}>
                  <ShoppingCart size={20} />
                </button>
              </div>
            </div>
          </div>
        ))
      )}
    </>
  );
};

export default ItemSpecialProductCoffee;
