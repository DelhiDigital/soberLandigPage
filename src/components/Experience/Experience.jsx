import "./Experience.css"

const Experience = () => {
  return (
    <section id="experience" className="experience">
      <div className="experience-container">
        <div className="experience-content">
          <div className="experience-text">
            <h2 className="section-title">The Sober Experience</h2>
            <p className="experience-description">
              More than just a beverage, Sober represents a lifestyle choice. Connect with friends, celebrate moments,
              and enjoy sophisticated flavors that complement your mindful approach to living.
            </p>

            <div className="experience-stats">
              <div className="stat">
                <h3>100%</h3>
                <p>Natural Ingredients</p>
              </div>
              <div className="stat">
                <h3>0.0%</h3>
                <p>Premium Quality</p>
              </div>
              <div className="stat">
                <h3>∞</h3>
                <p>Possibilities</p>
              </div>
            </div>

            <a href="#contact" className="btn btn-primary">
              Join the Movement
            </a>
          </div>

          <div className="experience-media">
            <video autoPlay muted loop className="experience-video">
              <source
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/video1-aLDJ44AUawWfTDh4lOMZpIa58Z4pzl.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
