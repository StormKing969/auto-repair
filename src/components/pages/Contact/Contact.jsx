import React, { useState } from "react";
import Map from "./Map/Map";
import "./Contact.scss";

const Contact = () => {
  const [carYear, setCarYear] = useState("2005");
  const [CarMake, setCarMake] = useState(null);
  const [CarMileage, setCarMileage] = useState(null);

  const date = new Date();

  function month() {

    return ("0" + date.getUTCMonth()).slice(-2)
  }

  function day() {
    return ("0" + date.getUTCDate()).slice(-2)
  }

  const currentDate = `${date.getUTCFullYear()}-${month()}-${day()}`

  function getVehicleYear(event) {
    const year = event.target.value;
    setCarYear(year);
  }

  function getVehicleMileage(event) {
    const mileage = event.target.value;
    setCarMileage(mileage);
  }

  function getVehicleMake(event) {
    const make = event.target.value;
    setCarMake(make);
  }

  console.log(month());

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
          <div className="vehicle">
            <div className="vehicle_year">
              <label>Vehicle Year</label>
              <div>
                <input
                  className="vehicle_year_slider"
                  type="range"
                  min="1990"
                  max="2022"
                  value="2005"
                  onChange={getVehicleYear}
                />
                <span>{carYear}</span>
              </div>
            </div>
            <div className="vehicle_make">
              <label>Vehicle Make</label>
              <select name="car_make" id="car-make" onChange={getVehicleMake}>
                <option value="">Choose...</option>
                <option value="General Motors">General Motors</option>
                <option value="Land Rover">Land Rover</option>
                <option value="Lexus">Lexus</option>
                <option value="Mercedes">Mercedes</option>
                <option value="Nissan">Nissan</option>
                <option value="Honda">Honda</option>
              </select>
            </div>
            <div className="vehicle_mileage">
              <label>Vehicle Mileage</label>
              <input
                className="vehicle_year_slider"
                type="text"
                placeholder="Vehicle Mileage"
                onChange={getVehicleMileage}
              />
            </div>
          </div>

          <div className="appointment_date">
            <label>Appointment Date</label>
            <input type="date" name="date" id="date" value={currentDate} min="2022-05-01" />
          </div>

          <div className="appointment_time">
            <label>Preffered Time Frame</label>
          </div>

          <div className="services_needed">
            <label>Select Services Needed</label>
          </div>

          <div className="customer_details">
            <label>Contact Details</label>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
