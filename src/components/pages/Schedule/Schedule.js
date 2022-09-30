import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Navbar from "../../core/Navbar/Navbar"
import Footer from "../../core/Footer/Footer"

import "./Schedule.scss"

const Schedule = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm(
          "service_hd7t1i3",
          "template_nunjusc",
          form.current,
          "_I4DP0534xKOIDOvV"
        )
        .then(
          (result) => {
            console.log(result.text);
            e.target.reset();
          },
          (error) => {
            console.log(error.text);
          }
        );
    };
  
    const [carYear, setCarYear] = useState("2005");
  
    const date = new Date();
  
    function month() {
      return ("0" + date.getUTCMonth()).slice(-2);
    }
  
    function day() {
      return ("0" + date.getUTCDate()).slice(-2);
    }
  
    const currentDate = `${date.getUTCFullYear()}-${month()}-${day()}`;
  
    function getVehicleYear(event) {
      const year = event.target.value;
      setCarYear(year);
    }
  
    return (
      <div className="schedule_bg_container">
        <Navbar></Navbar>
        <div className="schedule">
          <h1>Book an appointment</h1>
          <hr />
          <div className="schedule_subtitle">
            <p>
              We are one of the leading auto repair shops serving customers in
              Barnstable.
            </p>
            <p>All mechanic services are high qualified.</p>
          </div>
        </div>
  
        <div className="schedule_form">
          <form ref={form} onSubmit={sendEmail}>
            <div className="vehicle">
              <div className="vehicle_year">
                <label>Vehicle Year</label>
                <div>
                  <input
                    className="vehicle_year_slider"
                    type="range"
                    min="1990"
                    max="2022"
                    value={carYear}
                    name="car_year"
                    onChange={getVehicleYear}
                  />
                  <span>{carYear}</span>
                </div>
              </div>
              <div className="vehicle_make">
                <label>Vehicle Make</label>
                <select name="car_make" id="car-make">
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
                  name="car_mileage"
                  placeholder="Vehicle Mileage"
                  autoComplete="off"
                />
              </div>
            </div>
  
            <div className="appointment_date">
              <label>Appointment Date</label>
              <input
                type="date"
                name="selected_appointment_date"
                id="date"
                min={currentDate}
              />
            </div>
  
            <div className="appointment_time">
              <label>Preffered Time Frame</label>
              <select name="selected_appointment_time" id="time">
                <option value="">Choose...</option>
                <option value="09:00 AM - 10:00 AM">09:00 AM - 10:00 AM</option>
                <option value="10:00 AM - 11:00 AM">10:00 AM - 11:00 AM</option>
                <option value="11:00 AM - 12:00 PM">11:00 AM - 12:00 PM</option>
                <option value="12:00 PM - 01:00 PM">12:00 PM - 01:00 PM</option>
                <option value="01:00 PM - 02:00 PM">01:00 PM - 02:00 PM</option>
                <option value="02:00 PM - 03:00 PM">02:00 PM - 03:00 PM</option>
                <option value="03:00 PM - 04:00 PM">03:00 PM - 04:00 PM</option>
                <option value="04:00 PM - 05:00 PM">04:00 PM - 05:00 PM</option>
                <option value="05:00 PM - 06:00 PM">05:00 PM - 06:00 PM</option>
              </select>
            </div>
  
            <div className="services_needed">
              <legend>Select Services Needed</legend>
  
              <div className="services_option">
                <div>
                  <input
                    type="checkbox"
                    name="service_needed"
                    value="Air Conditioning"
                    id="air-conditioning"
                  />
                  <label>Air Conditioning</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    name="service_needed"
                    value="Brakes Repair"
                    id="brakes-repair"
                  />
                  <label>Brakes Repair</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    name="service_needed"
                    value="Engine Diagnostics"
                    id="engine-diagnostics"
                  />
                  <label>Engine Diagnostics</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    name="service_needed"
                    value="Heating Cooling"
                    id="heating-cooling"
                  />
                  <label>Heating Cooling</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    name="service_needed"
                    value="Oil, Lube & Filters"
                    id="oil-lube-filters"
                  />
                  <label>Oil Lube & Filters</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    name="service_needed"
                    value="Steering Suspension"
                    id="steering-suspension"
                  />
                  <label>Steering Suspension</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    name="service_needed"
                    value="Transmission Repair"
                    id="transmission-repair"
                  />
                  <label>Transmission Repair</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    name="service_needed"
                    value="Wheel Alignment"
                    id="wheel-alignment"
                  />
                  <label>Wheel Alignment</label>
                </div>
              </div>
            </div>
  
            <div className="customer_details">
              <label>Contact Details</label>
  
              <input type="hidden" name="to_name" value="Claudio Auto Repair" />
              <input
                type="text"
                name="from_name"
                id="name"
                placeholder="Your Name"
                autoComplete="off"
                required
              />
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Your Email"
                autoComplete="off"
                required
              />
              <input
                type="number"
                name="phone"
                id="phone"
                autoComplete="off"
                placeholder="Your Phone"
              />
              <textarea
                name="message"
                id="questions"
                cols="30"
                rows="10"
                autoComplete="off"
                placeholder="Additional Questions or Comments"
              ></textarea>
              <input className="submit_btn" type="submit" value="Send" />
            </div>
          </form>
        </div>
        <Footer></Footer>
      </div>
    );
  };

export default Schedule;