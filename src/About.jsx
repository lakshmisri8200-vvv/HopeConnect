
import { Link } from 'react-router-dom'

function About() {
  return (
    <>
      <header className="navbar">
        <Link to="/" className="logo">
          HopeConnect
        </Link>

        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/campaigns">Campaigns</Link>
          <Link to="/login">Login</Link>
          <Link to="/signup" className="nav-button">Sign Up</Link>
        </nav>
      </header>

      <main>
        <section className="about-page">
          <div className="about-container">

            <div className="about-label">
              ABOUT HOPECONNECT
            </div>

            <h1>
              Kindness can<br />
              <span>change everything.</span>
            </h1>

            <p className="about-intro">
              HopeConnect is an online donation platform designed
              to connect people who want to help with causes that
              genuinely need support.
            </p>

            <div className="about-grid">

              <div className="about-box">
                <span>01</span>
                <h3>Meaningful Giving</h3>
                <p>
                  Discover causes across education, food,
                  healthcare, disaster relief and animal welfare.
                </p>
              </div>

              <div className="about-box">
                <span>02</span>
                <h3>Simple Platform</h3>
                <p>
                  Our platform makes it easy for users to
                  explore campaigns and contribute through
                  a simple donation process.
                </p>
              </div>

              <div className="about-box">
                <span>03</span>
                <h3>Real Impact</h3>
                <p>
                  Every contribution represents an opportunity
                  to support someone and create positive change.
                </p>
              </div>

            </div>

            <div className="mission">
              <h2>Our mission.</h2>
              <p>
                We believe that giving should be simple,
                accessible and meaningful. HopeConnect brings
                donors and causes together through one
                convenient digital platform, making it easier
                for people to turn kindness into action.
              </p>
            </div>

          </div>
        </section>
      </main>

      <footer>
        <div className="footer-logo">
          HopeConnect <span>♥</span>
        </div>

        <p>Small kindness. Meaningful change.</p>

        <div className="footer-bottom">
          © 2026 HopeConnect · Online Donation Platform
        </div>
      </footer>
    </>
  )
}

export default About
