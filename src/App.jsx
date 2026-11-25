
import './App.css'

function App() {
  return (
    <>
      {/* NAVBAR */}
      <header className="navbar">
        <a href="/" className="logo">
          HopeConnect
        </a>

        <nav>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/campaigns">Campaigns</a>
          <a href="/login">Login</a>
          <a href="/signup" className="nav-button">Sign Up</a>
        </nav>
      </header>

      <main>
        {/* HOME / HERO */}
        <section className="hero">
          <div className="hero-content">
            <span className="eyebrow">
              GIVE A LITTLE. CHANGE A LOT.
            </span>

            <h1>
              Make a difference.<br />
              <span>Support a cause.</span>
            </h1>

            <p>
              Small acts of kindness can create meaningful change.
              Discover causes that matter and help someone move
              one step closer to a better tomorrow.
            </p>

            <div className="hero-buttons">
              <a href="/campaigns" className="primary-button">
                Explore Campaigns
              </a>

              <a href="/signup" className="text-button">
                Become a donor →
              </a>
            </div>
          </div>

          {/* HERO ART */}
          <div className="hero-art">
            <div className="art-circle">
              <div className="floating-heart">♥</div>

              <div className="art-message">
                <span>YOUR KINDNESS</span>
                <strong>MATTERS.</strong>
              </div>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="how-it-works">
          <div className="section-heading">
            <div className="section-label">HOW IT WORKS</div>

            <h2>
              Three steps.<br />
              One meaningful impact.
            </h2>
          </div>

          <div className="steps">
            <div className="step-card">
              <span className="step-number">01</span>
              <h3>Create an account</h3>
              <p>
                Sign up and create your personal donor account.
              </p>
            </div>

            <div className="step-card">
              <span className="step-number">02</span>
              <h3>Find a cause</h3>
              <p>
                Explore campaigns and choose something you care about.
              </p>
            </div>

            <div className="step-card">
              <span className="step-number">03</span>
              <h3>Make an impact</h3>
              <p>
                Choose your amount and make a difference.
              </p>
            </div>
          </div>
        </section>

        {/* FEATURED CAMPAIGNS */}
        <section className="campaign-preview">
          <div className="campaign-heading">
            <div>
              <div className="section-label">FEATURED CAUSES</div>

              <h2>
                Causes worth <em>caring about.</em>
              </h2>
            </div>

            <a href="/campaigns" className="view-all">
              View all campaigns →
            </a>
          </div>

          <div className="campaign-cards">
            {/* EDUCATION */}
            <article className="campaign-card">
              <div className="campaign-top">EDUCATION</div>

              <h3>
                Education<br />
                for every child.
              </h3>

              <p>
                Help provide learning materials and educational
                opportunities for children who need them.
              </p>

              <div className="campaign-progress">
                <div className="progress-info">
                  <span>₹32,000 raised</span>
                  <span>64%</span>
                </div>

                <div className="progress">
                  <div className="progress-bar education"></div>
                </div>

                <span className="goal">Goal: ₹50,000</span>
              </div>

              <a href="/campaigns" className="campaign-link">
                Support this cause →
              </a>
            </article>

            {/* FOOD */}
            <article className="campaign-card featured">
              <div className="campaign-top">FOOD</div>

              <h3>
                A meal should<br />
                never be a luxury.
              </h3>

              <p>
                Support food distribution programs helping families
                facing difficult circumstances.
              </p>

              <div className="campaign-progress">
                <div className="progress-info">
                  <span>₹18,500 raised</span>
                  <span>62%</span>
                </div>

                <div className="progress">
                  <div className="progress-bar food"></div>
                </div>

                <span className="goal">Goal: ₹30,000</span>
              </div>

              <a href="/campaigns" className="campaign-link">
                Support this cause →
              </a>
            </article>

            {/* HEALTHCARE */}
            <article className="campaign-card">
              <div className="campaign-top">HEALTHCARE</div>

              <h3>
                Healthcare<br />
                when it matters.
              </h3>

              <p>
                Help people access essential medical care and support
                when they need it most.
              </p>

              <div className="campaign-progress">
                <div className="progress-info">
                  <span>₹65,000 raised</span>
                  <span>65%</span>
                </div>

                <div className="progress">
                  <div className="progress-bar health"></div>
                </div>

                <span className="goal">Goal: ₹1,00,000</span>
              </div>

              <a href="/campaigns" className="campaign-link">
                Support this cause →
              </a>
            </article>
          </div>
        </section>
      </main>

      {/* FOOTER */}
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

export default App
