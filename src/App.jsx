
import './App.css'
import { Routes, Route, Link } from 'react-router-dom'
import Campaigns from './Campaigns'
import About from './About'
import Login from './Login'
import Signup from './Signup'
import Donate from './Donate'
import UserDashboard from './UserDashboard'
import AdminDashboard from './AdminDashboard'
import AdminCampaigns from './AdminCampaigns'

function Home() {
  return (
    <>
      <header className="navbar">
        <Link to="/" className="logo">HopeConnect</Link>

        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/campaigns">Campaigns</Link>
          <Link to="/login">Login</Link>
          <Link to="/signup" className="nav-button">Sign Up</Link>
        </nav>
      </header>

      <main>
        <section className="hero">
          <div className="hero-content">
            <span className="eyebrow">GIVE A LITTLE. CHANGE A LOT.</span>

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
              <Link to="/campaigns" className="primary-button">
                Explore Campaigns
              </Link>
              <Link to="/signup" className="text-button">
                Become a donor →
              </Link>
            </div>
          </div>

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
              <p>Sign up and create your personal donor account.</p>
            </div>

            <div className="step-card">
              <span className="step-number">02</span>
              <h3>Find a cause</h3>
              <p>Explore campaigns and choose something you care about.</p>
            </div>

            <div className="step-card">
              <span className="step-number">03</span>
              <h3>Make an impact</h3>
              <p>Choose your amount and make a difference.</p>
            </div>
          </div>
        </section>

        <section className="campaign-preview">
          <div className="campaign-heading">
            <div>
              <div className="section-label">FEATURED CAUSES</div>
              <h2>
                Causes worth <em>caring about.</em>
              </h2>
            </div>

            <Link to="/campaigns" className="view-all">
              View all campaigns →
            </Link>
          </div>

          <div className="campaign-cards">
            <article className="campaign-card">
              <div className="campaign-top">EDUCATION</div>
              <h3>Education<br />for every child.</h3>
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
              <Link to="/campaigns" className="campaign-link">
                Support this cause →
              </Link>
            </article>

            <article className="campaign-card featured">
              <div className="campaign-top">FOOD</div>
              <h3>A meal should<br />never be a luxury.</h3>
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
              <Link to="/campaigns" className="campaign-link">
                Support this cause →
              </Link>
            </article>

            <article className="campaign-card">
              <div className="campaign-top">HEALTHCARE</div>
              <h3>Healthcare<br />when it matters.</h3>
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
              <Link to="/campaigns" className="campaign-link">
                Support this cause →
              </Link>
            </article>
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

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/campaigns" element={<Campaigns />} />
      <Route path="/about" element={<About />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/donate" element={<Donate />} />
      <Route path="/user-dashboard" element={<UserDashboard />} />
      <Route path="/admin-dashboard" element={<AdminDashboard />} />
      <Route path="/admin-campaigns" element={<AdminCampaigns />} />
      <Route path="*" element={<h2>Page not found</h2>} />
    </Routes>
  )
}

export default App
