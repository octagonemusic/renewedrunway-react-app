import "./navbar.css";
import { TextField } from "@mui/material";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand"><img id="logo" src="/public/logo.svg" alt="threadsorama" width="30" height="24" /></Link>
                <svg className="search-icon" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 50 50">
                    <path d="M 21 3 C 11.601563 3 4 10.601563 4 20 C 4 29.398438 11.601563 37 21 37 C 24.355469 37 27.460938 36.015625 30.09375 34.34375 L 42.375 46.625 L 46.625 42.375 L 34.5 30.28125 C 36.679688 27.421875 38 23.878906 38 20 C 38 10.601563 30.398438 3 21 3 Z M 21 7 C 28.199219 7 34 12.800781 34 20 C 34 27.199219 28.199219 33 21 33 C 13.800781 33 8 27.199219 8 20 C 8 12.800781 13.800781 7 21 7 Z"></path>
                </svg>
                <div className="search">

                    <TextField
                        variant="filled"
                        color="primary"
                        fullWidth
                        InputProps={{
                            style: {
                                backgroundColor: 'white',
                            },
                        }}
                        InputLabelProps={{
                            style: {
                                color: 'black',
                            },
                        }}
                        style={{
                            backgroundColor: 'white',
                        }}

                    />
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <div className="navbar-nav">
                        <Link to="/shopping" className="nav-link">Shopping</Link>
                        <Link to="/pickup" className="nav-link">Pickup</Link>
                        <Link to="/contributions" className="nav-link">Contributions</Link>
                        <Link to="/contactus" className="nav-link">Contact Us</Link>
                    </div>
                </div>
            </div>
        </nav>
    );

}

export default Navbar;