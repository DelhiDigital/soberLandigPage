import "./Hero.css"

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <video autoPlay muted loop className="hero-video">
          <source
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/video2-3xtaIWsRUe1TcLcEV0EFSMdoH4zYZc.mp4"
            type="video/mp4"
          />
        </video>
        <div className="hero-overlay"></div>
      </div>

      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            Elevate Your <span className="gradient-text">Moments</span>
          </h1>
          <p className="hero-subtitle">
            Crafted for the mindful. Designed for connection. Experience premium beverages that bring people together.
          </p>
          <div className="hero-actions">
            <a href="#products" className="btn btn-primary">
              Explore Collection
            </a>
            <a href="#about" className="btn btn-secondary">
              Learn More
            </a>
          </div>
        </div>

        <div className="hero-image">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/images1-MUIIpQfsh2F7YQ9qPePDJ4rwAlDTVm.webp"
            alt="Sober Premium Beverages"
          />
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="scroll-arrow"></div>
      </div>
    </section>
  )
}

export default Hero
