import React from "react";
import { FaPhone, FaComments, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import "./Support.css";
import ShinyText from "./Imported/ShinyText/ShinyText";

const Support = () => {
  return (
    <section className="support-section" id="support">
      <div className="support-container">
        <div className="support-header">
          <h1>
            <ShinyText text="Get in Touch" speed={2.5} className="shiny-support-title" />
          </h1>
          <div>
            <ShinyText
              text="Have questions? Need assistance? We're here to help."
              speed={2}
              className="shiny-support-desc"
            />
          </div>
        </div>

        {/* Contact Information Grid */}
        <div className="support-grid">
          {/* Customer Support */}
          <div className="support-card">
            <div className="card-header">
              <FaPhone className="icon" />
              <h3>
                <ShinyText text="Customer Support" speed={2} className="shiny-card-title" />
              </h3>
            </div>
            <div className="card-body">
              <div>
                <ShinyText text="24/7 Phone Support" speed={1.5} className="shiny-card-content" />
              </div>
              <a href="tel:1-800-RENT-CAR">
                <ShinyText text="1-800-RENT-CAR" speed={1.5} className="shiny-card-content" />
              </a>
              <div className="inline-info">
                <FaComments className="inline-icon" />
                <span>
                  <ShinyText text="Live Chat Available" speed={1.5} className="shiny-card-content" />
                </span>
              </div>
            </div>
          </div>

          {/* Business Inquiries */}
          <div className="support-card">
            <div className="card-header">
              <FaEnvelope className="icon" />
              <h3>
                <ShinyText text="Business Inquiries" speed={2} className="shiny-card-title" />
              </h3>
            </div>
            <div className="card-body">
              <div>
                <ShinyText text="Corporate Email" speed={1.5} className="shiny-card-content" />
              </div>
              <a href="mailto:business@carrentals.com">
                <ShinyText text="MyLux@luxrev.com" speed={1.5} className="shiny-card-content" />
              </a>
              <div>
                <ShinyText text="Partnership opportunities" speed={1.5} className="shiny-card-content" />
              </div>
            </div>
          </div>

          {/* Emergency Roadside */}
          <div className="support-card">
            <div className="card-header">
              <FaClock className="icon" />
              <h3>
                <ShinyText text="Emergency Roadside" speed={2} className="shiny-card-title" />
              </h3>
            </div>
            <div className="card-body">
              <div>
                <ShinyText text="Emergency Contact" speed={1.5} className="shiny-card-content" />
              </div>
              <a href="tel:1-800-EMERGENCY">
                <ShinyText text="1-800-EMERGENCY" speed={1.5} className="shiny-card-content" />
              </a>
              <div>
                <ShinyText text="24/7 Roadside assistance" speed={1.5} className="shiny-card-content" />
              </div>
            </div>
          </div>

          {/* Locations */}
          <div className="support-card">
            <div className="card-header">
              <FaMapMarkerAlt className="icon" />
              <h3>
                <ShinyText text="Locations" speed={2} className="shiny-card-title" />
              </h3>
            </div>
            <div className="card-body">
              <h2 className="highlight">
                <ShinyText text="500+" speed={2} className="shiny-card-title" />
              </h2>
              <div>
                <ShinyText text="Pickup locations nationwide" speed={1.5} className="shiny-card-content" />
              </div>
            </div>
          </div>
        </div>

        <div className="dashed-line"></div>

        {/* Contact Form */}
        <div className="support-form">
          <h2>
            <ShinyText text="Send us a Message" speed={2.5} className="shiny-support-form-title" />
          </h2>
          <form>
            <div className="form-row">
              <div className="form-group">
                <label>
                  <ShinyText text="Name" speed={1.5} className="shiny-label" />
                </label>
                <input type="text" placeholder="Full name" />
              </div>
              <div className="form-group">
                <label>
                  <ShinyText text="Email" speed={1.5} className="shiny-label" />
                </label>
                <input type="email" placeholder="username@email.com" />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>
                  <ShinyText text="Phone" speed={1.5} className="shiny-label" />
                </label>
                <input type="tel" placeholder="(+91) 123456790" />
              </div>
              <div className="form-group">
                <label>
                  <ShinyText text="Rental Dates" speed={1.5} className="shiny-label" />
                </label>
                <input type="text" placeholder="MM/DD/YYYY - MM/DD/YYYY" />
              </div>
            </div>

            <div className="form-group">
              <label>
                <ShinyText text="Message Type" speed={1.5} className="shiny-label" />
              </label>
              <select>
                <option value="">Select message type</option>
                <option value="general">General</option>
                <option value="booking">Booking Help</option>
                <option value="vehicle">Vehicle Issue</option>
                <option value="partnership">Partnership</option>
              </select>
            </div>

            <div className="form-group">
              <label>
                <ShinyText text="Message" speed={1.5} className="shiny-label" />
              </label>
              <textarea placeholder="Tell us how we can help you..."></textarea>
            </div>

            <div className="form-submit">
              <button type="submit" className="support-btn">
                <ShinyText text="Send Message" speed={2.5} className="shiny-btn" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Support;
