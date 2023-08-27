import React from "react";
import "./about.css";

const About = () => {
  return (
    <div className="about container flex-col">
      <h1 className="heading">About us</h1>
      <div className="main">
        <div className="content top flex-row">
          <div className="left">
            <h1 className="main-left-title">
              Help Us Upcycle The Textile Waste.
            </h1>
          </div>
          <div className="right">
            <img
              src="/about/about header.png"
              alt=""
              className="main-right-img"
            />
          </div>
        </div>
        <div className="content bottom flex-row">
          <div className="left">
            <img
              src="/about/about imgae2.png"
              alt=""
              className="main-left-img"
            />
          </div>
          <div className="right flex-col">
            <h2 className="title">OUR MISSION</h2>
            <span>
              Our mission is to offer eco-friendly fashion brand for today’s
              conscious customers which is also sustainable and fashionable.
            </span>
          </div>
        </div>
      </div>
      <div className="approach flex-col">
        <h1 className="approach heading">Our Approach</h1>
        <div className="content">
          <span className="des">
            We're committed to bringing about meaningful change, and that starts
            with our unique approach to recycling clothes:
          </span>
          <ol className="list flex-col">
            <li>
              Collection and Sorting: We collaborate with individuals,
              communities, and organizations to collect clothing items that have
              outlived their original purpose. Our team meticulously sorts
              through these donations to determine their potential for
              upcycling.
            </li>
            <li>
              Creative Upcycling: Our skilled designers and artisans work their
              magic, transforming discarded garments into stylish, one-of-a-kind
              pieces. By combining creativity with sustainability, we give new
              life to old fabrics, reducing waste and lowering the demand for
              new resources.
            </li>
            <li>
              Ethical Production: Each upcycled piece is crafted with care in
              our sustainable production facility. We uphold the highest
              standards of ethics, ensuring fair wages and safe working
              conditions for our team.
            </li>
            <li>
              Educational Initiatives: We believe that change goes beyond just
              recycling clothes. Through workshops, seminars, and online
              resources, we educate people about the impact of fast fashion and
              the benefits of embracing a circular fashion economy.
            </li>
          </ol>
        </div>
      </div>
      <div className="team flex-col">
        <h1 className="team heading">Our Team</h1>
        <div className="content">
          <div className="team-card flex-row">
            <img src="/about/image3.png" alt="" />
            <div className="card-content flex-col">
              <h4>Jason Derulo</h4>
              <span>
                Passionate writer exploring worlds through words. Nature lover,
                tech enthusiast. Seeking inspiration in every moment. Believer
                in endless possibilities.
              </span>
              <div className="social-media flex-row">
                <i class="fa fa-instagram" aria-hidden="true"></i>
                <i class="fa fa-skype" aria-hidden="true"></i>
                <i class="fa fa-youtube" aria-hidden="true"></i>
                <i class="fa fa-facebook" aria-hidden="true"></i>
                <i class="fa fa-twitter" aria-hidden="true"></i>
                <i class="fa fa-linkedin" aria-hidden="true"></i>
                <i class="fa fa-vimeo" aria-hidden="true"></i>
              </div>
            </div>
          </div>
          <div className="team-card flex-row">
            <img src="/about/image4.png" alt="" />
            <div className="card-content flex-col">
              <h4>Michael Jackson</h4>
              <span>
                Seasoned manager, adept leader, team collaborator. Guiding
                success through strategy, fostering growth. Motivating,
                resolving, achieving together. Empowering individuals, achieving
                collective goals.
              </span>
              <div className="social-media flex-row">
                <i class="fa fa-instagram" aria-hidden="true"></i>
                <i class="fa fa-skype" aria-hidden="true"></i>
                <i class="fa fa-youtube" aria-hidden="true"></i>
                <i class="fa fa-facebook" aria-hidden="true"></i>
                <i class="fa fa-twitter" aria-hidden="true"></i>
                <i class="fa fa-linkedin" aria-hidden="true"></i>
                <i class="fa fa-vimeo" aria-hidden="true"></i>
              </div>
            </div>
          </div>
          <div className="team-card flex-row">
            <img src="/about/image5.png" alt="" />
            <div className="card-content flex-col">
              <h4>Billie Eilish</h4>
              <span>
                Chartered Accountant, number cruncher, financial wizard.
                Navigating complexities, ensuring compliance. Balancing books,
                shaping success. Trustworthy advisor, driving financial
                excellence.
              </span>
              <div className="social-media flex-row">
                <i class="fa fa-instagram" aria-hidden="true"></i>
                <i class="fa fa-skype" aria-hidden="true"></i>
                <i class="fa fa-youtube" aria-hidden="true"></i>
                <i class="fa fa-facebook" aria-hidden="true"></i>
                <i class="fa fa-twitter" aria-hidden="true"></i>
                <i class="fa fa-linkedin" aria-hidden="true"></i>
                <i class="fa fa-vimeo" aria-hidden="true"></i>
              </div>
            </div>
          </div>
          <div className="team-card flex-row">
            <img src="/about/image6.png" alt="" />
            <div className="card-content flex-col">
              <h4>Amber Heard</h4>
              <span>
                Dedicated engineer, problem solver, innovation enthusiast.
                Designing solutions, pushing boundaries. Combining technical
                expertise with creativity for impactful results.
              </span>
              <div className="social-media flex-row">
                <i class="fa fa-instagram" aria-hidden="true"></i>
                <i class="fa fa-skype" aria-hidden="true"></i>
                <i class="fa fa-youtube" aria-hidden="true"></i>
                <i class="fa fa-facebook" aria-hidden="true"></i>
                <i class="fa fa-twitter" aria-hidden="true"></i>
                <i class="fa fa-linkedin" aria-hidden="true"></i>
                <i class="fa fa-vimeo" aria-hidden="true"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="movement flex-row">
        <div className="left">
          <h1>JOIN OUR MOVEMENT</h1>
        </div>
        <div className="right flex-col">
          <span>
            Threadsorama invites you to be a part of this transformative
            journey. Whether you're donating your old clothes, purchasing our
            upcycled creations, or engaging with our educational initiatives,
            you're contributing to a more sustainable, vibrant future. Together,
            we're weaving a tapestry of change, one thread at a time.
          </span>
          <span>
            Discover style that's as unique as your values. Explore fashion that
            respects our planet. Choose Threasorama - where sustainability meets
            creativity.
          </span>
        </div>
      </div>
    </div>
  );
};

export default About;
