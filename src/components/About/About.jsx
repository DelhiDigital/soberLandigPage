import "./About.css"

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="section-title">What Sober Does</h2>
            <p className="about-description">
              Sober crafts elevated, choice-forward beverages designed to bring people together. Whether you're
              celebrating, unwinding, or just exploring new tastes, Sober offers a refreshing way to connect, pause, and
              enjoy the moment — all on your own terms.
            </p>

            <div className="about-features">
              <div className="feature">
                <div className="feature-icon">🌿</div>
                <div className="feature-content">
                  <h3>Clean Ingredients</h3>
                  <p>Carefully selected, premium ingredients for the purest taste experience.</p>
                </div>
              </div>
              <div className="feature">
                <div className="feature-icon">✨</div>
                <div className="feature-content">
                  <h3>Layered Flavors</h3>
                  <p>Complex, sophisticated flavor profiles that evolve with every sip.</p>
                </div>
              </div>
              <div className="feature">
                <div className="feature-icon">🎯</div>
                <div className="feature-content">
                  <h3>Mindful Choice</h3>
                  <p>Designed for conscious consumers who value quality and intention.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="about-image">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image2.jpg-DW1z7WzL7Ne2sh4NlQkWdlMB6SuHza.jpeg"
              alt="Sober lifestyle experience"
            />
          </div>
        </div>

        <div className="about-secondary">
          <div className="about-secondary-image">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image3-OgYasKu40DDR20YyFz73js5GYZIyXZ.webp"
              alt="Sober product collection"
            />
          </div>
          <div className="about-secondary-text">
            <h2 className="section-title">What Sober Is</h2>
            <p className="about-description">
              Sober is a bold, modern drink brand built for mindful consumers. With clean ingredients, layered flavors,
              and a crisp finish, each bottle is made to complement your lifestyle — refreshing, thoughtful, and
              entirely your choice.
            </p>
            <a href="#products" className="btn btn-primary">
              Discover Our Range
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
