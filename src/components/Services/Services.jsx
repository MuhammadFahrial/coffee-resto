import hotCoffee from "../../assets/Services/hot-coffee.png";
import iceCoffee from "../../assets/Services/iced-coffee.png";
import cupCoffee from "../../assets/Services/coffee-cup.png";
import dessert from "../../assets/Services/cake.png";

const OurServices = () => {
  return (
    <>
      <section className="our-services">
        <div className="hot-coffee">
          <img src={hotCoffee} alt="hot-coffee" />
          <p>Hot Coffee</p>
        </div>
        <div className="ice-coffee">
          <img src={iceCoffee} alt="ice-coffee" />
          <p>Ice Coffee</p>
        </div>
        <div className="cupCoffee">
          <img src={cupCoffee} alt="cup-coffee" />
          <p>Coffee Cup</p>
        </div>
        <div className="dessert">
          <img src={dessert} alt="dessert" />
          <p>Dessert</p>
        </div>
      </section>
    </>
  );
};

export default OurServices;
