import Navbar from "./components/navbar/navbar";
import "./App.css";
import Home from "./components/home/home";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Shopping from "./components/shopping/shopping";
import ContactUs from "./components/contactus/contactus";
import Contributions from "./components/contributions/contributions";
import Footer from "./components/footer/footer";
import About from "./components/about/about";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/shopping" element={<Shopping />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/contributions" element={<Contributions />} />
          <Route path="/about" element={<About/>}/>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
