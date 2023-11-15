import React from "react";
import { Twitter, Facebook, Instagram, Linkedin } from "react-feather";

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
          <h3>PRIVACY</h3>
          <div className="privacy-menu">
            <a href="">Terms of use</a>
            <a href="">Privacy policy</a>
            <a href="">cookies</a>
          </div>
        </div>
        <div className="services">
          <h3>SERVICES</h3>
          <div className="services-menu">
            <a href="">Shop</a>
            <a href="">Order ahead</a>
            <a href="">Menu</a>
          </div>
        </div>
        <div className="about-us">
          <h3>ABOUT US</h3>
          <div className="about-menu">
            <a href="">Find a location</a>
            <a href="">Abous us</a>
            <a href="">Our story</a>
          </div>
        </div>
        <div className="information">
          <h3>INFORMATION</h3>
          <div className="information menu">
            <a href="">Plans & pricing</a>
            <a href="">Sell your products</a>
            <a href="">Jobs</a>
          </div>
        </div>
        <div className="social-media">
          <h3>SOCIAL MEDIA</h3>
          <div className="social-menu">
            <a href="">
              <Twitter />
            </a>
            <a href="">
              <Facebook />
            </a>
            <a href="">
              <Instagram />
            </a>
            <a href="">
              <Linkedin />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
