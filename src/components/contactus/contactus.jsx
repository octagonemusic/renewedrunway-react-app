import "./contactus.css";
function ContactUs() {
    return (
        <div className="container contact-us">
            <h1 className="contact-heading">Contact Us</h1>
            <p className="contact-subheading">Contact us through our social media pages, email or a call.</p>

            <div className="container contact-info">
                <div className="address row">
                    <div className="col-1">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 30 30">
                            <path d="M 15 2 A 1 1 0 0 0 14.300781 2.2851562 L 3.3925781 11.207031 A 1 1 0 0 0 3.3554688 11.236328 L 3.3183594 11.267578 L 3.3183594 11.269531 A 1 1 0 0 0 3 12 A 1 1 0 0 0 4 13 L 5 13 L 5 24 C 5 25.105 5.895 26 7 26 L 23 26 C 24.105 26 25 25.105 25 24 L 25 13 L 26 13 A 1 1 0 0 0 27 12 A 1 1 0 0 0 26.681641 11.267578 L 26.666016 11.255859 A 1 1 0 0 0 26.597656 11.199219 L 25 9.8925781 L 25 6 C 25 5.448 24.552 5 24 5 L 23 5 C 22.448 5 22 5.448 22 6 L 22 7.4394531 L 15.677734 2.2675781 A 1 1 0 0 0 15 2 z M 18 15 L 22 15 L 22 23 L 18 23 L 18 15 z"></path>
                        </svg>
                    </div>
                    <div className="col-11">
                        <p className="address-text">Bluebells School International
                            Lala Lajpat Rai Rd,
                            (opposite LSR College)
                            <br></br>Kailash Colony, Greater Kailash,New Delhi-110048
                        </p>
                    </div>
                </div>

                <div className="address row">
                    <div className="col-1">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 50 50">
                            <path d="M 14 3.9902344 C 8.4886661 3.9902344 4 8.4789008 4 13.990234 L 4 35.990234 C 4 41.501568 8.4886661 45.990234 14 45.990234 L 36 45.990234 C 41.511334 45.990234 46 41.501568 46 35.990234 L 46 13.990234 C 46 8.4789008 41.511334 3.9902344 36 3.9902344 L 14 3.9902344 z M 18.005859 12.033203 C 18.633859 12.060203 19.210594 12.414031 19.558594 12.957031 C 19.954594 13.575031 20.569141 14.534156 21.369141 15.785156 C 22.099141 16.926156 22.150047 18.399844 21.498047 19.589844 L 20.033203 21.673828 C 19.637203 22.237828 19.558219 22.959703 19.824219 23.595703 C 20.238219 24.585703 21.040797 26.107203 22.466797 27.533203 C 23.892797 28.959203 25.414297 29.761781 26.404297 30.175781 C 27.040297 30.441781 27.762172 30.362797 28.326172 29.966797 L 30.410156 28.501953 C 31.600156 27.849953 33.073844 27.901859 34.214844 28.630859 C 35.465844 29.430859 36.424969 30.045406 37.042969 30.441406 C 37.585969 30.789406 37.939797 31.366141 37.966797 31.994141 C 38.120797 35.558141 35.359641 37.001953 34.556641 37.001953 C 34.000641 37.001953 27.316344 37.761656 19.777344 30.222656 C 12.238344 22.683656 12.998047 15.999359 12.998047 15.443359 C 12.998047 14.640359 14.441859 11.879203 18.005859 12.033203 z"></path>
                        </svg>
                    </div>
                    <div className="col-11">
                        <p className="address-text">9999999999
                        </p>
                    </div>
                </div>


                <div className="address row">
                    <div className="col-1">
                        <img width="30" height="30" src="https://img.icons8.com/material-rounded/96/new-post.png" alt="new-post" />
                    </div>
                    <div className="col-11">
                        <p className="address-text">contantabcbbs@gmail.com
                        </p>
                    </div>
                </div>
            </div>

            <div className="container contact-form">
                <form>
                    <div className="row">
                        <div className="col-6">
                            <input type="text" className="form-control" placeholder="First name" aria-label="First name" />
                        </div>
                        <div className="col-6">
                            <input type="text" className="form-control" placeholder="Last name" aria-label="Last name" />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-6">
                            <input type="text" className="form-control" placeholder="Email" aria-label="Email" />
                        </div>
                        <div className="col-6">
                            <input type="text" className="form-control" placeholder="Phone" aria-label="Phone" />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12">
                            <textarea className="form-control" placeholder="Message" aria-label="Message"></textarea>
                        </div>
                    </div>

                    <div className="row button">
                        <div className="col-12">
                            <button className="btn">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );

}

export default ContactUs;