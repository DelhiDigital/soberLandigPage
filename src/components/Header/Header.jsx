"use client"

import { useState, useEffect } from "react"
import "./Header.css"

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <div className="header-container">
        <div className="logo">
          <h2>SOBER</h2>
        </div>

        <nav className={`nav ${isMobileMenuOpen ? "nav-open" : ""}`}>
          <a href="#home" onClick={() => setIsMobileMenuOpen(false)}>
            Home
          </a>
          <a href="#about" onClick={() => setIsMobileMenuOpen(false)}>
            About
          </a>
          <a href="#products" onClick={() => setIsMobileMenuOpen(false)}>
            Products
          </a>
          <a href="#experience" onClick={() => setIsMobileMenuOpen(false)}>
            Experience
          </a>
          <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
            Contact
          </a>
        </nav>

        <div className="header-actions">
          <a href="#contact" className="btn btn-primary">
            Get Started
          </a>
        </div>

        <button className="mobile-menu-toggle" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  )
}

export default Header
