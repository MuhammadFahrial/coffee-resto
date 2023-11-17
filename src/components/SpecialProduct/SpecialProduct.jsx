import ItemSpecialProductCoffee from "./ItemSpecialProductCoffee";
import ItemSpecialProductDesert from "./ItemSpecialProductDesert";

const SpecialProduct = () => {
  return (
    <>
      <section id="special-menu" className="special-menu">
        <div className="special-coffee">
          {/* Special Coffee Start */}
          <h1>Our Special Coffee</h1>
          <div className="row">
            <ItemSpecialProductCoffee />
            <ItemSpecialProductCoffee />
            <ItemSpecialProductCoffee />
            <ItemSpecialProductCoffee />
          </div>
        </div>
        {/* Special Coffee End */}

        {/* Special Dessert Start */}
        <div className="special-dessert">
          <h1>Our Special Dessert</h1>
          <div className="row">
            <ItemSpecialProductDesert />
            <ItemSpecialProductDesert />
            <ItemSpecialProductDesert />
            <ItemSpecialProductDesert />
          </div>
        </div>
        {/* Special Dessert End */}
      </section>
    </>
  );
};

export default SpecialProduct;
