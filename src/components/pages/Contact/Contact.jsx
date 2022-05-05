import React from "react";
import Map from "./Map/Map";
import "./Contact.scss";

const Contact = () => {
  return (
    <div className="contact_bg_container">
      <div className="shop_location">
        <Map />
      </div>
      <div className="contact">
        <h1>Book an appointment</h1>
        <hr />
        <div className="contact_subtitle">

        <p>
          We are one of the leading auto repair shops serving customers in
          Barnstable.
        </p>
        <p>All mechanic services are high qualified.</p>
        </div>
      </div>

      <div className="contact_form">
        <form>
          
        </form>
      </div>
    </div>
  );
};

export default Contact;
