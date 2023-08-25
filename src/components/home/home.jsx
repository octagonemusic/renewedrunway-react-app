import "./home.css"

function Home() {
    return (
        <>
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

            <div className="container text-container">
                <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis molestie pellentesque diam at porta. Sed posuere, nibh nec pharetra porta, sapien massa dictum mauris, ac posuere sapien lectus id sem.</p>
                <div className="read-more"><h5 className="text read-more"><a href="..">Read more</a></h5></div>
            </div>

            <div className="container best-seller">
                <h1 className="best-text">EXPLORE OUR BEST SELLERS</h1>
                <button className="btn">CHECK-OUT</button>
            </div>

            <div className="testimonials container">
                <h1 className="testimonials-text">TESTIMONIALS</h1>
            </div>
        </>
    );
}

export default Home;