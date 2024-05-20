import React from "react";
import { Brand } from "../../components";
import { brands } from "../../constants";
import "./companies.css";
import { Google } from "../../assets";
const Companies = () => {
  return (
    <div className="qubly__company flex__center section__padding" id="contact">
      <div className="qubly__company-content">
        <h2 className="h2__headtext">
          See why the world’s best companies use Qubly to become truly
          data-driven.
        </h2>
        <p className="p__content">Trusted by</p>
        <div className="qubly__company-content_dash" />
        <div className="qubly__company-content_brands flex__center">
          {brands.slice(5).map((brand, index) => (
            <Brand key={brand.imgUrl + 1} brand={brand} />
          ))}
        </div>
      </div>
      <div className="qubly__company-contact flex__center">
        <div className="contact__bg" />
        <div className="qubly__company-contact_details flex__center">
          <h2 className="h2__headtext">Sign Up</h2>
          <button type="button">Start your free trial</button>
          <form className="flex__center">
            <input type="email" placeholder="Your Primary Email" />
            <input type="password" placeholder="Password" />
            <input type="password" placeholder="Re-Type Password" />
          </form>
          <p className="p__content" style={{ color: "#000" }}>
            OR
          </p>
          <img src={Google} alt="Google Sign In" width={199} height={48} />
          <div className="form__dash" />
          <p className="p__content" style={{ fontSize: "12px" }}>
            Already have an account?{" "}
            <a
              href="#"
              style={{ color: "#722ED1", textDecoration: "underline" }}
            >
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
export default Companies;
