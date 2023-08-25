import Navbar from './components/navbar/navbar';
import './App.css';
import Home from './components/home/home';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Shopping from './components/shopping/shopping';
import ContactUs from './components/contactus/contactus';

function App() {
  return (
    <>

      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/shopping" element={<Shopping />} />
          <Route path="/contactus" element={<ContactUs />} />
        </Routes>
      </Router>
    </>
  )
}

export default App;
