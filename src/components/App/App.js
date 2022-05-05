import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Home from "../pages/Home/Home";
import Services from "../pages/Services/Services";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Error from "../pages/Error/Error";
import Footer from "../Footer/Footer";
import "./App.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/services" element={<Services />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="*" element={<Error />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
