import React from 'react'
import Intro from "./Section01/Intro";
import Stats from "./Section02/Stats";
import Testimonials from "./Section03/Testimonials";
import Appointment from "./Section04/Appointment";
import Footer from "../core/Footer/Footer"

const Main = () => {
  return (
    <div>
        <Intro></Intro>
        <Stats></Stats>
        <Testimonials></Testimonials>
        <Appointment></Appointment>
        <Footer></Footer>
    </div>
  )
}

export default Main