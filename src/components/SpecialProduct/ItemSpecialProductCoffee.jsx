import React, { useState } from "react";
import { ShoppingCart, Heart } from "react-feather";
import { productSpecialCoffee } from "../../DetailsProduct";

const ItemSpecialProductCoffee = () => {
  const [cart, setCartItem] = useState([]);

  const addItem = (items) => {
    const updateCart = [...cart, items];
    setCartItem(updateCart);
    // console.log(updateCart);
  };

  console.log(cart);

  return (
    <>
      {React.Children.toArray(
        productSpecialCoffee.map((product) => (
          <div className="card-menu" key={product.id}>
            <img src={product.img} alt="cream-latte" />
            <button className="favorite">
              <Heart color="white" size={18} />
            </button>
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
              <button onClick={() => addItem(product)}>
                <ShoppingCart color="#30261c" size={20} />
              </button>
            </div>
          </div>
        ))
      )}
    </>
  );
};

export default ItemSpecialProductCoffee;
