import React from "react";
import "./Pricing.css";
import ShinyText from "./Imported/ShinyText/ShinyText";
import { FaCheckCircle } from "react-icons/fa";

const plans = [
  {
    name: "Hourly",
    desc: "Perfect for short city rides or quick getaways",
    price: "150",
    duration: "/hour",
    note: "+ base car rental price",
    benefits: [
      "Free fuel for 50 km",
      "Chauffeur optional",
      "Complimentary refreshments",
    ],
    featured: false,
  },
  {
    name: "Daily",
    desc: "Ideal for business trips or full-day experiences",
    price: "950",
    duration: "/day",
    note: "+ base car rental price",
    benefits: [
      "Unlimited mileage",
      "Premium insurance included",
      "Free doorstep delivery",
      "Concierge support 24/7",
    ],
    featured: true,
  },
  {
    name: "Weekly",
    desc: "Best for vacations or long-term luxury travel",
    price: "5500",
    duration: "/week",
    note: "+ base car rental price",
    benefits: [
      "Complimentary airport transfers",
      "Dedicated personal chauffeur",
      "Free car swaps",
      "VIP event access perks",
    ],
    featured: false,
  },
];

const Pricing = () => {
  return (
    <section className="pricing-section" id="pricing">    
      <div className="pricing-container">
        <h1 className="pricing-title">
          <ShinyText text="Choose Your Rental Duration" speed={2.5} className="shiny-title" />
        </h1>
        
        {/* FIXED: div instead of p to avoid invalid nesting */}
        <div className="pricing-subtitle">
          <ShinyText
            text="The amounts below are added to the base price of the car."
            speed={2}
            className="shiny-subtitle"
          />
        </div>

        <div className="pricing-cards">
          {plans.map((plan) => (
            <div
              className={`pricing-card${plan.featured ? " featured" : ""}`}
              key={plan.name}
            >
              <div className="pricing-plan" style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <ShinyText text={plan.name} speed={2.5} className="shiny-plan" />
              </div>
              
              <div className="pricing-desc">
                <ShinyText text={plan.desc} speed={2} className="shiny-desc" />
              </div>
              
              <div className="pricing-price">
                <span className="currency">
                  <ShinyText text="$" speed={2} className="shiny-currency" />
                </span>
                <span className="amount">
                  <ShinyText text={plan.price} speed={2} className="shiny-amount" />
                </span>
                <span className="duration">
                  <ShinyText text={plan.duration} speed={2} className="shiny-duration" />
                </span>
              </div>
              
              <p className="pricing-note">{plan.note}</p>
              
              <ul className="benefits">
                {plan.benefits.map((benefit, i) => (
                  <li key={i} style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <FaCheckCircle color="#4d4e4dff" style={{ fontSize: "1em" }} />
                    <ShinyText text={benefit} speed={1.5} className="shiny-benefit" />
                  </li>
                ))}
              </ul>
              
              <button className="pricing-btn">
                <ShinyText text="Book Now" speed={2.5} className="shiny-btn" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
