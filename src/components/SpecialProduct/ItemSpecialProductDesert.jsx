import { ShoppingCart, Heart } from "react-feather";
import croissant from "../../assets/Product/SpecialDessert/1.jpg";

const ItemSpecialProductDesert = () => {
  return (
    <div className="card-menu">
      <img src={croissant} alt="cream-latte" />
      <button className="favorite">
        <Heart color="white" size={18} />
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
  );
};

export default ItemSpecialProductDesert;
