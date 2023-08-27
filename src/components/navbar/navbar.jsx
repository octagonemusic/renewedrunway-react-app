import "./navbar.css";
import { TextField } from "@mui/material";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand">
                    <svg width="70" height="70" viewBox="0 0 132 103" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M62.1444 47.2949C61.1005 42.0753 48.8345 30.5923 34 36.1381" stroke="#000" strokeWidth="2" />
                        <path d="M73.6611 45.0388C72.0045 36.756 52.5402 18.534 29 27.3345" stroke="#000" strokeWidth="2" />
                        <path d="M80.264 39.8672C78.352 30.3069 55.8853 9.2743 28.7143 19.4322" stroke="#000" strokeWidth="2" />
                        <path d="M87.5 32.5C85.3703 21.8515 61.2637 -0.314042 31 11" stroke="#000" strokeWidth="2.12969" />
                        <path d="M34 4C20.8333 29.5 29.5 83.5 87 81.5" stroke="#000" strokeWidth="2" />
                        <path d="M24.5 8C11.3333 33.5 22 91 79.5 89" stroke="#000" strokeWidth="2" />
                        <path d="M15 15.5C1.83333 41 10.2353 97.5 67.7353 95.5" stroke="#000" strokeWidth="2" />
                        <path d="M28.5 28C38.8734 46.7697 69.8629 62.0516 92.5 25.5" stroke="#000" strokeWidth="2" />
                        <path d="M29.5 39C39.8734 57.7697 73.8629 72.5516 96.5 36" stroke="#000" strokeWidth="2" />
                        <path d="M33 51C43.3734 69.7697 76.3629 84.0516 99 47.5" stroke="#000" strokeWidth="2" />
                        <path d="M53 74C55.5 75.5 80.0483 92.3006 96.6112 65.5569" stroke="#000" strokeWidth="2" />
                        <circle cx="50" cy="50" r="49" stroke="#000" strokeWidth="2" />
                        <path d="M130.559 56.7503C120.342 52.0452 105.39 58.4007 110.264 68.0464M130.559 56.7503C126.891 60.288 115.155 77.7553 110.264 68.0464M130.559 56.7503C122.205 59.9998 116.291 61.8314 110.264 68.0464" stroke="#000" />
                        <path d="M131.028 93.1328C130.032 86.3008 121.759 80.7314 118.425 86.4661M131.028 93.1328C127.98 92.4288 115.064 92.2311 118.425 86.4661M131.028 93.1328C126.561 89.9204 123.64 87.4891 118.425 86.4661" stroke="#000" />
                        <path d="M104.491 86.8341C96.7005 78.7211 98.6162 67.3381 109.326 68.7852M104.491 86.8341C106.633 82.2109 120.101 70.2282 109.326 68.7852M104.491 86.8341C104.827 77.8771 109.919 77.5641 109.326 68.7852" stroke="#000" />
                        <path d="M118.445 86.7147L117.458 86.5575L117.458 86.5575L118.445 86.7147ZM93.2394 94.6486C91.7629 97.1973 92.6321 100.46 95.1809 101.937C97.7296 103.413 100.993 102.544 102.469 99.9954C103.946 97.4467 103.076 94.1836 100.528 92.7071C97.979 91.2306 94.7159 92.0998 93.2394 94.6486ZM74.5984 68.9326C75.1948 70.1757 76.3797 71.296 77.9162 72.1648C79.467 73.0416 81.4405 73.7006 83.7194 73.9838C88.2867 74.5513 94.1109 73.6146 100.338 69.8468L99.3029 68.1356C93.4304 71.6888 88.0542 72.5071 83.966 71.9991C81.9172 71.7445 80.1992 71.1581 78.9005 70.4238C77.5876 69.6814 76.765 68.8249 76.4016 68.0675L74.5984 68.9326ZM100.338 69.8468C103.155 68.1422 105.619 67.9206 107.723 68.5457C109.862 69.1812 111.764 70.7328 113.332 72.8159C114.896 74.8942 116.078 77.44 116.793 79.9366C117.512 82.4449 117.734 84.8197 117.458 86.5575L119.433 86.8719C119.77 84.7523 119.484 82.0679 118.716 79.3859C117.945 76.6922 116.663 73.9166 114.93 71.6133C113.2 69.3147 110.972 67.4244 108.293 66.6285C105.578 65.8221 102.536 66.1797 99.3029 68.1356L100.338 69.8468ZM117.458 86.5575C116.945 89.7749 114.589 94.5573 111.126 97.3604C109.415 98.7456 107.491 99.6017 105.43 99.6145C103.38 99.6273 101.052 98.8071 98.5155 96.5718L97.1931 98.0722C100.012 100.557 102.798 101.631 105.442 101.614C108.075 101.598 110.424 100.502 112.385 98.9149C116.266 95.7736 118.85 90.532 119.433 86.8719L117.458 86.5575Z" fill="#000" />
                    </svg>

                </Link>
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