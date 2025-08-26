import React from "react";
import Hyperspeed from "./Imported/Hyperspeed/Hyperspeed.jsx";
import { FaArrowRight } from "react-icons/fa";
import SplitText from "./Imported/SplitText/SplitText/SplitText.jsx";
import ShinyText from "./Imported/ShinyText/ShinyText.jsx"; // Make sure this path is correct
import "./Hero.css";

export default function HeroSection() {
  return (
    <div className="hero-container">
      {/* Background Layer */}
      <div className="background-wrapper">
        <Hyperspeed
          effectOptions={{
            distortion: "turbulentDistortion",
            length: 400,
            roadWidth: 10,
            islandWidth: 2,
            lanesPerRoad: 4,
            fov: 90,
            fovSpeedUp: 150,
            speedUp: 2,
            carLightsFade: 0.4,
            totalSideLightSticks: 20,
            lightPairsPerRoadWay: 40,
            shoulderLinesWidthPercentage: 0.05,
            brokenLinesWidthPercentage: 0.1,
            brokenLinesLengthPercentage: 0.5,
            lightStickWidth: [0.12, 0.5],
            lightStickHeight: [1.3, 1.7],
            movingAwaySpeed: [60, 80],
            movingCloserSpeed: [-120, -160],
            carLightsLength: [400 * 0.03, 400 * 0.2],
            carLightsRadius: [0.05, 0.14],
            carWidthPercentage: [0.3, 0.5],
            carShiftX: [-0.8, 0.8],
            carFloorSeparation: [0, 5],
            colors: {
              roadColor: 0x080808,
              islandColor: 0x0a0a0a,
              background: 0x000000,
              shoulderLines: 0xffffff,
              brokenLines: 0xffffff,
              leftCars: [0xd856bf, 0x6750a2, 0xc247ac],
              rightCars: [0x03b3c3, 0x0e5ea5, 0x324555],
              sticks: 0x03b3c3,
            },
          }}
        />
      </div>

      {/* Foreground Content */}
      <div className="hero-content">
        <h1 className="hero-title">
          <SplitText
            text="Welcome to LuxRev"
            className="hero-title"
            delay={100}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
          />
        </h1>
        <div className="hero-tagline">
          <ShinyText
            text="Feel The Luxury in Every Rev!"
            disabled={false}
            speed={2.5}
            className="shiny-tagline"
          />
        </div>
        <div className="hero-buttons">
          <button className="btn outline"onClick={() => {
      const section = document.getElementById("fleets");
      if (section) section.scrollIntoView({ behavior: "smooth", block: "start" });
    }}>
            <ShinyText
              text="Explore Options"
              disabled={false}
              speed={1.5}
              className="shiny-btn"
            />
            <FaArrowRight className="icon" />
          </button>
          <button className="btn outline" onClick={() => {
      const section = document.getElementById("pricing");
      if (section) section.scrollIntoView({ behavior: "smooth", block: "start" });
    }}>
            <ShinyText
              text="Pricings"
              disabled={false}
              speed={3}
              className="shiny-btn"
            />
            <FaArrowRight className="icon" />
          </button>
        </div>
      </div>
    </div>
  );
}
