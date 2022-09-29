import React from "react";
import Img from "./img/img.png";
import { GoLocation } from "react-icons/go";
import { BsTelephone } from "react-icons/bs";
import { AiOutlineClockCircle } from "react-icons/ai";

import L from "leaflet";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import MarkerIcon from "./img/icon-location.svg";
import "leaflet/dist/leaflet.css";

import "./Appointment.scss";

function GetIcon(iconSize) {
  return L.icon({
    iconUrl: MarkerIcon,
    iconSize: [iconSize],
  });
}

const Appointment = () => {
  const position = [41.680946, -70.298952];

  return (
    <div className="appointment_container" id="appointment_container">
      <div className="appointment_section01">
        <img src={Img} alt="service images" />

        <div className="section01_content">
          <p>SCHEDULE YOUR APPOINTMENT TODAY</p>
          <p className="contact_number">CALL: 1-800-123-4567</p>
          <p className="section01_content_subtitle">
            Your Automotive Repair & Maintenance Service Specialist
          </p>

          <div className="appointment_section01_link">
            <a href="tel:+18001234567">Book an Appointment</a>
            <a href="#contact">Get quote</a>
          </div>
        </div>
      </div>
      <div className="appointment_section02">
        <div className="appointment_location">
          <GoLocation />
          <div>
            <p>ADDRESS:</p>
            <p>4578 MARMORA ROAD, GLASGOW</p>
          </div>
        </div>
        <div className="appointment_contact">
          <BsTelephone />
          <div>
            <p>PHONE Numbers:</p>
            <p>+7-495-1234567 / +7-495-1234568</p>
          </div>
        </div>
        <div className="appointment_work_hours">
          <AiOutlineClockCircle />
          <div>
            <p>WORKING Hours:</p>
            <p>MONDAY – SATURDAY: 08:00 – 18:00;</p>
          </div>
        </div>
      </div>
      <div className="shop_location">
        <MapContainer
          center={position}
          zoom={17}
          style={{ width: "100vw", height: "35vh" }}
          scrollWheelZoom={true}
        >
          <TileLayer
            url="https://api.maptiler.com/maps/outdoor/256/{z}/{x}/{y}.png?key=Rg7ubtvKIpsuAAm1AsLT"
            attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
          />

          <Marker position={position} icon={GetIcon(20)}>
            <Popup>Location of the marker.</Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default Appointment;
