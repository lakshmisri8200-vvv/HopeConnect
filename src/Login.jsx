
import { Link, useNavigate } from 'react-router-dom'

function Login() {
  const navigate = useNavigate()

  function handleLogin(event) {
    event.preventDefault()

    const email = event.target.email.value.trim()
    const password = event.target.password.value

    // Admin login
    if (email === 'admin@gmail.com' && password === 'admin123') {
      localStorage.setItem(
        'currentUser',
        JSON.stringify({
          name: 'Administrator',
          email: email,
          role: 'admin'
        })
      )

      alert('Admin login successful!')
      navigate('/admin-dashboard')
      return
    }

    // User login
    const users = JSON.parse(localStorage.getItem('users')) || []

    const user = users.find((user) => {
      return user.email === email && user.password === password
    })

    if (!user) {
      alert('Invalid email or password!')
      return
    }

    // Save current user
    localStorage.setItem(
      'currentUser',
      JSON.stringify({
        name: user.name,
        email: user.email,
        role: 'user'
      })
    )

    alert('Login successful! Welcome ' + user.name)
    navigate('/user-dashboard')
  }

  return (
    <>
      <header className="navbar">
        <Link to="/" className="logo">HopeConnect</Link>

        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/campaigns">Campaigns</Link>
          <Link to="/signup">Sign Up</Link>
        </nav>
      </header>

      <main className="login-page">
        <div className="login-box">
          <div className="section-label">WELCOME BACK</div>

          <h1>Login.</h1>

          <p className="login-subtitle">
            Sign in to continue your journey with HopeConnect.
          </p>

          <form onSubmit={handleLogin}>
            <div className="form-group">
              <label htmlFor="email">EMAIL ADDRESS</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">PASSWORD</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                required
              />
            </div>

            <button type="submit" className="login-button">
              Login
            </button>
          </form>

          <p className="signup-text">
            Don't have an account? <Link to="/signup">Create one</Link>
          </p>

          <div className="admin-note">
            <strong>Admin access:</strong>
            <br />
            Use the administrator credentials provided for the project demonstration.
          </div>
        </div>
      </main>
    </>
  )
}

export default Login
