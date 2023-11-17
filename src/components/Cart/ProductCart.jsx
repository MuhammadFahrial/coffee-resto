import { Plus, Minus, Trash2 } from "react-feather";
import Product1 from "../../assets/Product/SpecialCoffee/1.jpg";

const ProductCart= () =>{
    return(
        <div className="cart-item">
          <img src={Product1} alt="" />
          <div className="item-detail">
            <h2 className="item-name">Coffee Latte</h2>
            <div className="item-category">
              <p className="item-type">Hot</p>
              <p className="item-size">Large</p>
            </div>
          </div>
          <div className="item-quantity">
            <button>
              <Minus size={14} />
            </button>
            <p>2</p>
            <button>
              <Plus size={14} />
            </button>
          </div>
          <p className="item-price">RP. 15000</p>
          <button className="delete">
            <Trash2 />
          </button>
        </div>
    )
}

export default ProductCart;