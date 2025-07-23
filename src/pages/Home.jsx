import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <section className="home">
      <div className="container">
        <div className="home-content">
        <p className="top">Tech Club | <span className="dps">DPSRPK</span></p>
      <h1>The Home <br />of all <i><span className="bold">Tech</span></i> <i> Nerds</i></h1>
      <p className="description">We come together to innovate, collaborate, and pretend we know what we’re <br />
      doing. Whether you’re obsessed with AI, code, robots, or just making things <br />
      look cool, this is the perfect place to overcommit, under-caffeinate, and <br />
      accidentally invent the future.</p>
<div className="button-group">
  <a className="btn">Join The Discord</a>
  <a className="btn pr">Sign Up</a>
</div>
      </div>
      </div>
    </section>
  );
};

export default Home;
