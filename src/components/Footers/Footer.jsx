import Services from "./Services";
import Privacy from "./Privacy";
import AboutUs from "./AboutUs";
import Information from "./Information";
import SocialMedia from "./SocialMedia";

const Footer = () => {
  return (
    <>
      <section className="footer">
        <div className="logo">
          <h1>
            COFFEE <br /> RESTO
          </h1>
        </div>
        <div className="privacy">
          <Privacy />
        </div>
        <div className="services">
          <Services />
        </div>
        <div className="about-us">
          <AboutUs />
        </div>
        <div className="information">
          <Information />
        </div>
        <div className="social-media">
          <SocialMedia />
        </div>
      </section>
    </>
  );
};

export default Footer;
