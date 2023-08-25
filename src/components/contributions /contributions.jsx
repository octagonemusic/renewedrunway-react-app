import "./contributions.css";

function Contributions() {
    return (
        <div className="container-fluid">
            <h1 className="heading">Our Contributions</h1>

            <div className="row dot-row">
                <svg xmlns="http://www.w3.org/2000/svg" width="179" height="15" fill="none" viewBox="0 0 179 15">
                    <circle cx="7.5" cy="7.5" r="7.5" fill="#DFC6FF" />
                    <circle cx="48.5" cy="7.5" r="7.5" fill="#DFC6FF" />
                    <circle cx="89.5" cy="7.5" r="7.5" fill="#DFC6FF" />
                    <circle cx="130.5" cy="7.5" r="7.5" fill="#DFC6FF" />
                    <circle cx="171.5" cy="7.5" r="7.5" fill="#DFC6FF" />
                </svg>
            </div>

            <div className="row">
                <div className="col"></div>
                <div className="col-3 grayblock"></div>
                <div className="col-4 text">
                    <p className="contributions-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis molestie pellentesque diam at porta. Sed posuere, nibh nec pharetra porta, sapien massa dictum mauris, ac posuere sapien lectus id sem.
                    </p>
                    <p className="contributions-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis molestie pellentesque diam at porta. Sed posuere, nibh nec pharetra porta, sapien massa dictum mauris, ac posuere sapien lectus id sem.
                    </p>
                </div>
                <div className="col-3 grayblock"></div>
                <div className="col"></div>
            </div>

            <div className="row bgimg">
                <div className="col-3 stats">
                    <span className="number">65000</span><br></br><span className="text"> Clients</span>
                </div>
                <div className="col-3 stats">
                    <span className="number">2340</span><br></br><span className="text"> Kilos Recycled</span>
                </div>
                <div className="col-3 stats">
                    <span className="number">2130</span><br></br><span className="text"> Jobs Offered</span>
                </div>
                <div className="col-3 stats">
                    <span className="number">345</span><br></br><span className="text"> NGO Associations</span>
                </div>
            </div>

            <div id="carouselExampleControlsNoTouching" className="carousel slide" data-bs-touch="false">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="red-block"></div>
                    </div>
                    <div className="carousel-item">
                        <div className="red-block"></div>
                    </div>
                    <div className="carousel-item">
                        <div className="red-block"></div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
                    <img width="48" height="48" src="https://img.icons8.com/pulsar-color/96/previous.png" alt="previous" />
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
                    <img width="48" height="48" src="https://img.icons8.com/pulsar-color/96/next.png" alt="next" />
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

        </div>
    )
}

export default Contributions;