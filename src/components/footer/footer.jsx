import "./footer.css";

function Footer() {
    return (
        <div className="footer">
            <div className="row">
                <div className="col-6">
                    <h1 className="heading">Threadsorama.</h1>
                    <div className="row">
                        <div className="col-6">
                            <h5 className="titles">Careers</h5>
                            <h5 className="titles">Our Office</h5>
                        </div>
                        <div className="col-6">
                            <h5 className="titles">Customer Care</h5>
                            <h5 className="titles">Services</h5>
                        </div>
                    </div>
                </div>
                <div className="col-6">
                    <h1 className="sub-heading">Get the freshest collections!</h1>
                    <input type="email" placeholder="Enter your email address" className="email-input" />
                </div>
            </div>
        </div>
    );
}

export default Footer;