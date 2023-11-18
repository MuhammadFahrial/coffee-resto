import React from "react";
import { ShoppingCart, Heart } from "react-feather";
import { productSpecialDesert } from "../../DetailsProduct";

const ItemSpecialProductDesert = () => {
  return (
    <>
      {React.Children.toArray(
        productSpecialDesert.map(({ id, img, name, description, price }) => (
          <div className="card-menu" key={id}>
            <img src={img} alt="cream-latte" />
            <button className="favorite">
              <Heart color="white" size={18} />
            </button>
            <h4>{name}</h4>
            <p>{description}</p>
            <div className="extra-card">
              <h3>
                {new Intl.NumberFormat("id-ID", {
                  style: "currency",
                  currency: "IDR",
                  minimumFractionDigits: 0,
                }).format(price)}
              </h3>
              <button>
                <ShoppingCart color="#30261c" size={20} />
              </button>
            </div>
          </div>
        ))
      )}
    </>
  );
};

export default ItemSpecialProductDesert;
