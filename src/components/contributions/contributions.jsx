import "./contributions.css";

function Contributions() {
    return (
        <div className="container-fluid">
            <h1 className="head">Our Contributions</h1>

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
                <div className="col-3 grayblock">
                    <img src="/image25.png" />
                </div>
                <div className="col-4 text">
                    <p className="contributions-text">
                        Welcome to our sustainable fashion company! We are passionate about creating a positive impact on the fashion industry by promoting ethical and sustainable practices.
                    </p>
                    <p className="contributions-text">
                        Our journey began with the realization that the fashion industry has a huge environmental and social impact, and we wanted to do something about it. We believe that fashion can be both beautiful and responsible, and we strive to create clothing that is both stylish and sustainable. At our core, we believe in using materials and processes that minimize harm to the environment and promote social justice. We carefully source our materials from suppliers who share our values, and we prioritize using organic, recycled, and biodegradable fabrics whenever possible.
                    </p>
                    <p className="contributions-text">
                        We also believe in fair labor practices and work with manufacturers who provide safe and fair working conditions for their employees. Our team visits our manufacturing partners regularly to ensure that our products are made ethically and sustainably.
                    </p>
                    <p className="contributions-text">
                        We are committed to transparency and strive to educate our customers about our processes and values. We believe that by sharing our story and promoting sustainable fashion, we can make a positive impact on the industry and the world. Thank you for choosing to support our sustainable fashion company. Together, we can make a difference.
                    </p>
                </div>
                <div className="col-3 grayblock">
                    <img src="/image26.png" />
                </div>
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

            <div className="container">
                <ul>
                    <li className="contributions-text-2"><span className="red">Reduced Waste:</span> By diverting textiles from landfills and incinerators, we significantly reduce the fashion industry's environmental footprint.</li>
                    <li className="contributions-text-2">Resource Conservation: Our upcycling practices help conserve precious resources such as water, energy, and raw materials.</li>
                    <li className="contributions-text-2"><span className="green">Empowerment:</span> We empower our customers to make conscious fashion choices that align with their values, encouraging a shift towards a more sustainable lifestyle.</li>
                    <li className="contributions-text-2"><span className="brown">Community Engagement:</span> Our collaborations extend beyond clothes. We partner with local communities to create opportunities, support livelihoods, and foster a sense of shared responsibility for the planet.</li>
                </ul>
            </div>

        </div>
    )
}

export default Contributions;