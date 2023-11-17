import { ShoppingCart, Heart } from "react-feather";
import creamLatte from "../../assets/Product/SpecialCoffee/1.jpg";

const ItemSpecialProductCoffee = () => {
  return (
    <div className="card-menu">
      <img src={creamLatte} alt="cream-latte" />
      <button className="favorite">
        <Heart color="white" size={18} />
      </button>
      <h4>Cream Latte</h4>
      <p>Lorem ipsum dolor sit amet.</p>
      <div className="extra-card">
        <h3>Rp.15000</h3>
        <button>
          <ShoppingCart color="#30261c" size={20} />
        </button>
      </div>
    </div>
  );
};

export default ItemSpecialProductCoffee;
