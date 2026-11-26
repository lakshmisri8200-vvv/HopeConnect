
import { Link, useNavigate } from 'react-router-dom'

function Signup() {
  const navigate = useNavigate()

  function handleSignup(event) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)

    const name = formData.get('name').trim()
    const email = formData.get('email').trim()
    const password = formData.get('password')
    const confirmPassword = formData.get('confirmPassword')

    if (password !== confirmPassword) {
      alert('Passwords do not match!')
      return
    }

    const users = JSON.parse(localStorage.getItem('users')) || []

    const existingUser = users.find((user) => user.email === email)

    if (existingUser) {
      alert('An account with this email already exists!')
      return
    }

    const newUser = {
      name,
      email,
      password
    }

    users.push(newUser)

    localStorage.setItem('users', JSON.stringify(users))

    alert('Account created successfully!')
    navigate('/login')
  }

  return (
    <>
      <header className="navbar">
        <Link to="/" className="logo">HopeConnect</Link>

        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/campaigns">Campaigns</Link>
          <Link to="/login">Login</Link>
        </nav>
      </header>

      <main className="signup-page">
        <div className="signup-box">
          <div className="section-label">JOIN HOPECONNECT</div>

          <h1>Create your account.</h1>

          <p className="signup-subtitle">
            Become a donor and start supporting causes that matter to you.
          </p>

          <form onSubmit={handleSignup}>
            <div className="form-group">
              <label htmlFor="signup-name">FULL NAME</label>
              <input
                type="text"
                id="signup-name"
                name="name"
                placeholder="Enter your full name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="signup-email">EMAIL ADDRESS</label>
              <input
                type="email"
                id="signup-email"
                name="email"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="signup-password">PASSWORD</label>
              <input
                type="password"
                id="signup-password"
                name="password"
                placeholder="Create a password"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="confirmPassword">CONFIRM PASSWORD</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Confirm your password"
                required
              />
            </div>

            <button type="submit" className="signup-button">
              Create Account
            </button>
          </form>

          <p className="login-text">
            Already have an account? <Link to="/login">Login</Link>
          </p>

          <p className="form-note">
            Your account information will be stored in your browser using Local Storage.
          </p>
        </div>
      </main>
    </>
  )
}

export default Signup
