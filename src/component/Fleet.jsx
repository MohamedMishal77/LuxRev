import React from "react";
import "./Fleet.css";
import CardSwap, { Card } from "./Imported/CardSwap/CardSwap";
import ShinyText from "./Imported/ShinyText/ShinyText";

export default function FleetsSection() {
  return (
    <section className="fleets-section" id="fleets">
      {/* Left Side - Text */}
        <div className="fleets-text">
          <h2 className="fleets-title">Our Fleets</h2>
          <div className="fleets-description">
            <ShinyText
              text="Experience true luxury and performance with our curated collection of 
    world-class cars. Every ride is crafted for thrill, comfort, and elegance.
    At LuxRev, we redefine your driving experience with our exclusive fleet.
    From the roaring engines of supercars to the refined elegance of luxury sedans."
              className="shiny-description"
              speed={2.5}
              disabled={false}
            />
          </div>
          <button
  className="fleets-btn"
  onClick={() => {
    const el = document.getElementById("carspec");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }}
>
  <ShinyText
    text="View Details"
    className="shiny-btn"
    speed={3}
    disabled={false}
  />
</button>
        </div>
    

      {/* Right Side - Cards */}
      <div className="fleets-cards">
        <CardSwap
          cardDistance={60}
          verticalDistance={70}
          delay={5000}
          pauseOnHover={false}
        >
          <Card>
            <h3>BMW M5 CS</h3>
            <p>Pure performance, unmatched luxury.</p>
            <img src="Bmw.jpg" alt="BMW M5 CS" />
            
          </Card>
          <Card>
            <h3>Mercedes G Wagon</h3>
            <p>Iconic design, unstoppable presence.</p>
            <img src="gwagon.jpg" alt="Mercedes G-Wagon AMG G63" />
          </Card>
          <Card>
            <h3>Rolls Royce Phantom</h3>
            <p>The definition of elegance.</p>
            <img src="car.png" alt="BMW M5 CS" />
          </Card>
          <Card>
            <h3>Porsche 911 Turbo S</h3>
            <p>Race-bred precision, road-ready thrill.</p>
            <img src="porsche.jpg" alt="Porsche 911 Turbo S" />
          </Card>
          <Card>
            <h3>Lamborghini Gallardo</h3>
            <p>Italian passion, unleashed power.</p>
            <img src="Lambo.jpg" alt="Lamborghini Gallardo" />
          </Card>
        </CardSwap>
      </div>
     
    </section>
  );
}
