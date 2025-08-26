import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import ShinyText from "./Imported/ShinyText/ShinyText";
import "./Footer.css";

const navigation = [
  {
    title: "Rentals",
    links: [
      { name: "Find Cars", href: "#" },
      { name: "Locations", href: "#" },
      { name: "Pricing", href: "#" },
      { name: "Business Rentals", href: "#" },
    ],
  },
  {
    title: "Support",
    links: [
      { name: "Help Center", href: "#" },
      { name: "Contact Us", href: "#" },
      { name: "Roadside Assistance", href: "#" },
      { name: "Insurance", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About Us", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Press", href: "#" },
      { name: "Partners", href: "#" },
    ],
  },
];

const socialLinks = [
  { name: "Facebook", icon: <FaFacebook />, href: "https://facebook.com" },
  { name: "Twitter", icon: <FaTwitter />, href: "https://twitter.com" },
  { name: "Instagram", icon: <FaInstagram />, href: "https://instagram.com" },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Top Section: Left + Right */}
        <div className="footer-top">
          {/* Left: Logo + Newsletter */}
          <div className="footer-left">
            <ShinyText
              text={
                <>
                  <h2 className="footer-logo">LuxRev</h2>
                  <p className="footer-tagline">Your journey starts here</p>
                  <p className="footer-text">Get exclusive deals and travel tips</p>
                  <div className="newsletter">
                    <input
                      type="email"
                      placeholder="Your email"
                      className="newsletter-input"
                    />
                    <button className="newsletter-btn">
                      <ShinyText text="Subscribe" speed={2} className="shiny-btn" />
                    </button>
                  </div>
                  <p className="newsletter-note">
                    Subscribe for special offers and destination guides
                  </p>
                </>
              }
              speed={2}
              className="shiny-footer-left"
            />
          </div>

          {/* Right: Navigation */}
          <div className="footer-right">
            {navigation.map((section) => (
              <div key={section.title}>
                <h3 className="footer-section-title">{section.title}</h3>
                <ul>
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <a href={link.href} className="footer-link">
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="footer-bottom">
          <p className="footer-copy">
            © {new Date().getFullYear()} LuxRev. All rights reserved.
          </p>
          <div className="footer-socials">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="footer-social-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
