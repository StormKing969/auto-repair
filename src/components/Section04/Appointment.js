import React from 'react'
import Img from "./img/img.png"
import "./Appointment.scss"

const Appointment = () => {
  return (
    <div className='appointment_container'>
        <div className='appointment_section01'>
            <img src={Img} alt="service images" />

            <div className='section01_content'>
                <p>SCHEDULE YOUR APPOINTMENT TODAY</p>
                <p>CALL: 1-800-123-4567</p>
                <p>Your Automotive Repair & Maintenance Service Specialist</p>

                <div>
                    <a href="#">Book an Appointment</a>
                    <a href="#">Get quote</a>
                </div>
            </div>
        </div>
        <div className='appointment_section02'>
            <div className='appointment_location'>
                icon
                <div>
                    <p>ADDRESS:</p>
                    <p>4578 MARMORA ROAD, GLASGOW</p>
                </div>
            </div>
            <div className='appointment_contact'>
                icon
                <div>
                    <p>PHONE Numbers:</p>
                    <p>+7-495-1234567 / +7-495-1234568</p>
                </div>
            </div>
            <div className='appointment_work_hours'>
                icon
                <div>
                    <p>WORKING Hours:</p>
                    <p>MONDAY – SATURDAY: 08:00 – 18:00;</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Appointment