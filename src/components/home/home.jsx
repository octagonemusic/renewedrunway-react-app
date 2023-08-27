import "./home.css"

function Home() {
    return (
        <div>
            <div id="carouselExampleControlsNoTouching" className="carousel slide" data-bs-touch="false">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="red-block">
                            <img className="carousel-img" src="public/image29.png" />
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="red-block">
                            <img className="carousel-img" src="public/image30.png" />
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="red-block">
                            <img className="carousel-img" src="public/image31.png" />
                        </div>
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
                <p className="text">At Threadsorama, we are more than just a company; we are a movement dedicated to reshaping the future of fashion while championing environmental sustainability. Our mission is to revolutionize the way people perceive clothing by promoting the concept of circular fashion through recycling and upcycling.</p>
                <div className="read-more"><h5 className="text read-more"><a href="..">Read more</a></h5></div>
            </div>

            <div className="container best-seller">
                <h1 className="best-text">EXPLORE OUR BEST SELLERS</h1>
                <button className="btn">CHECK-OUT</button>
            </div>

            <div className="testimonials container">
                <h1 className="testimonials-heading">TESTIMONIALS</h1>
                <div className="row testimonials-row">
                    <div className="col-4">
                        <div className="testimonials-block">
                            <p className="testimonials-text">I am thrilled to share my wonderful experience with Threadsorama, the exceptional clothing recycling and sales company. Their commitment to sustainability and fashion is truly inspiring. I have been a customer for a while now, and every interaction with them has left me impressed.</p>
                            <h5 className="testimonials-name">Obaka</h5>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="testimonials-block">
                            <p className="testimonials-text"> What sets Threadsorama apart is their dedication to both the environment and their customers. Not only do they promote recycling and reducing fashion waste, but their customer service is also top-notch. The staff is knowledgeable, friendly, and always eager to assist. Whether I had questions about their recycling process or needed fashion advice, they were there with a smile.</p>
                            <h5 className="testimonials-name">Trumpet</h5>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="testimonials-block">
                            <p className="testimonials-text">Shopping at Threadsorama is a guilt-free pleasure. Not only am I enhancing my wardrobe with one-of-a-kind pieces, but I'm also contributing to a more sustainable future. It's heartening to support a company that aligns with my values and makes a genuine difference.</p>
                            <h5 className="testimonials-name">Joe Biren</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;