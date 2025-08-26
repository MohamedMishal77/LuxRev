import React, { useState } from "react";
import "./CarSpec.css";
import ShinyText from "./Imported/ShinyText/ShinyText";

const cars = [
  {
    name: "BMW M5 CS",
    image: "Bmw.jpg",
    specs: [
      { label: "Engine", value: "4.4L Twin-Turbo V8" },
      { label: "Horsepower", value: "627 hp" },
      { label: "Top Speed", value: "190 mph" },
      { label: "0-60 mph", value: "2.9s" },
      { label: "Transmission", value: "8-speed Auto" },
      { label: "Price", value: "500 $" },
    ],
  },
  {
    name: "Porsche 911 Turbo S",
    image: "porsche.jpg",
    specs: [
      { label: "Engine", value: "3.8L Twin-Turbo Flat-6" },
      { label: "Horsepower", value: "640 hp" },
      { label: "Top Speed", value: "205 mph" },
      { label: "0-60 mph", value: "2.6s" },
      { label: "Transmission", value: "8-speed PDK Auto" },
      { label: "Price", value: "800 $" },
    ],
  },
  {
    name: "Mercedes G-Wagon AMG G63",
    image: "gwagon.jpg",
    specs: [
      { label: "Engine", value: "4.0L Twin-Turbo V8" },
      { label: "Horsepower", value: "577 hp" },
      { label: "Top Speed", value: "149 mph" },
      { label: "0-60 mph", value: "4.5s" },
      { label: "Transmission", value: "9-speed Auto" },
      { label: "Price", value: "1000 $" },
    ],
  },
  {
    name: "Lamborghini Gallardo",
    image: "Lambo.jpg",
    specs: [
      { label: "Engine", value: "5.2L V10" },
      { label: "Horsepower", value: "562 hp" },
      { label: "Top Speed", value: "202 mph" },
      { label: "0-60 mph", value: "3.4s" },
      { label: "Transmission", value: "6-speed E-gear" },
      { label: "Price", value: "1700 $" },
    ],
  },
  {
    name: "Rolls Royce Phantom",
    image: "rolls.jpg",
    specs: [
      { label: "Engine", value: "6.75L V12" },
      { label: "Horsepower", value: "563 hp" },
      { label: "Top Speed", value: "155 mph (limited)" },
      { label: "0-60 mph", value: "5.1s" },
      { label: "Transmission", value: "8-speed Auto" },
      { label: "Price", value: "2000 $" },
    ],
  },
];

export default function CarSpec() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNextCar = () => {
    setCurrentIndex((prev) => (prev + 1) % cars.length);
    const detailsSection = document.getElementById("carspec");
    if (detailsSection) {
      detailsSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const car = cars[currentIndex];

  return (
    <section className="car-spec-section" id="carspec">
      {/* Car Container */}
      <div className="car-container">
        {/* Car Image + Name */}
        <div className="car-image">
          <h3>
            <ShinyText text={car.name} speed={2.5} className="shiny-car-name" />
          </h3>
          {/* 👇 Added key for re-render animation */}
          <img
            key={car.image}
            src={car.image}
            alt={car.name}
            className="fade-image"
          />
        </div>

        {/* Car Specs */}
        <div className="car-specs">
          <h3>
            <ShinyText
              text="Specifications"
              speed={2.5}
              className="shiny-spec-title"
            />
          </h3>
          <div className="spec-grid">
            {car.specs.map((spec, idx) => (
              <div key={idx} className="spec-row">
                <span className="spec-title">
                  <ShinyText
                    text={spec.label}
                    speed={2}
                    className="shiny-spec-label"
                  />
                </span>
                <span className="spec-value">
                  <ShinyText
                    text={spec.value}
                    speed={2}
                    className="shiny-spec-value"
                  />
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Next Button */}
      <div className="car-controls">
        <button onClick={handleNextCar}>
          <ShinyText text="Next Car ➝" speed={3} className="shiny-btn" />
        </button>
      </div>
    </section>
  );
}
