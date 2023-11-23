import { Star } from "react-feather";
import customers1 from "../../assets/Customers/man.png";
import customers2 from "../../assets/Customers/man1.png";
import customers3 from "../../assets/Customers/woman.png";

const Customers = () => {
  return (
    <>
      <section className="customers">
        <p>Come and Join</p>
        <h1>Our Happy Customers</h1>
        <div className="customers-card">
          <div className="card">
            <div className="row">
              <div className="left">
                <img src={customers1} alt="customers1" />
                <div className="name-title">
                  <h1>Jane Adams</h1>
                  <h3>Frelancer</h3>
                </div>
              </div>
              <div className="ratings">
                <Star color="yellow" size={15} />
                <Star color="yellow" size={15} />
                <Star color="yellow" size={15} />
                <Star color="yellow" size={15} />
                <Star color="yellow" size={15} />
              </div>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem tempore commodi voluptates a sequi, modi, sit ab,
              quidem necessitatibus voluptatem debitis quasi perspiciatis
              numquam dicta. Totam alias dolores quos facilis!
            </p>
          </div>
          <div className="card">
            <div className="row">
              <div className="left">
                <img src={customers2} alt="customers2" />
                <div className="name-title">
                  <h1>Williams</h1>
                  <h3>Enterpreneur</h3>
                </div>
              </div>
              <div className="ratings">
                <Star color="yellow" size={15} />
                <Star color="yellow" size={15} />
                <Star color="yellow" size={15} />
                <Star color="yellow" size={15} />
                <Star color="yellow" size={15} />
              </div>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem tempore commodi voluptates a sequi, modi, sit ab,
              quidem necessitatibus voluptatem debitis quasi perspiciatis
              numquam dicta. Totam alias dolores quos facilis!
            </p>
          </div>
          <div className="card">
            <div className="row">
              <div className="left">
                <img src={customers3} alt="customers3" />
                <div className="name-title">
                  <h1>Angela</h1>
                  <h3>Manager</h3>
                </div>
              </div>
              <div className="ratings">
                <Star color="yellow" size={15} />
                <Star color="yellow" size={15} />
                <Star color="yellow" size={15} />
                <Star color="yellow" size={15} />
                <Star color="yellow" size={15} />
              </div>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem tempore commodi voluptates a sequi, modi, sit ab,
              quidem necessitatibus voluptatem debitis quasi perspiciatis
              numquam dicta. Totam alias dolores quos facilis!
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Customers;
