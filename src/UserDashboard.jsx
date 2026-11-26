
import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function UserDashboard() {
  const navigate = useNavigate()

  const currentUser = JSON.parse(localStorage.getItem('currentUser'))

  useEffect(() => {
    if (!currentUser || currentUser.role !== 'user') {
      alert('Please login first.')
      navigate('/login')
    }
  }, [])

  if (!currentUser || currentUser.role !== 'user') {
    return null
  }

  const allDonations = JSON.parse(localStorage.getItem('donations')) || []

  const userDonations = allDonations.filter(
    (donation) => donation.email === currentUser.email
  )

  const totalAmount = userDonations.reduce(
    (total, donation) => total + Number(donation.amount),
    0
  )

  const causes = [...new Set(userDonations.map((donation) => donation.campaign))]

  function handleLogout() {
    localStorage.removeItem('currentUser')
    alert('Logged out successfully.')
    navigate('/')
  }

  return (
    <>
      <header className="navbar">
        <Link to="/" className="logo">HopeConnect</Link>

        <nav>
          <Link to="/">Home</Link>
          <Link to="/campaigns">Campaigns</Link>
          <Link to="/user-dashboard">Dashboard</Link>
        </nav>
      </header>

      <main className="dashboard-page">
        <section className="dashboard-header">
          <div>
            <div className="section-label">DONOR DASHBOARD</div>

            <h1>
              Welcome, <span>{currentUser.name}</span>.
            </h1>

            <p className="dashboard-subtitle">
              Track your contributions and continue making a difference.
            </p>
          </div>

          <button className="logout-button" onClick={handleLogout}>
            Logout
          </button>
        </section>

        <section className="dashboard-stats">
          <div className="dashboard-stat">
            <span>TOTAL DONATED</span>
            <strong>₹{totalAmount.toLocaleString('en-IN')}</strong>
          </div>

          <div className="dashboard-stat">
            <span>DONATIONS MADE</span>
            <strong>{userDonations.length}</strong>
          </div>

          <div className="dashboard-stat">
            <span>CAUSES SUPPORTED</span>
            <strong>{causes.length}</strong>
          </div>
        </section>

        <section className="dashboard-section">
          <div className="section-label">QUICK ACTIONS</div>
          <h2>Continue your impact.</h2>

          <div className="quick-actions">
            <div className="quick-card">
              <span className="quick-number">01</span>
              <h3>Explore Campaigns</h3>
              <p>
                Discover causes and find a campaign that matters to you.
              </p>
              <Link to="/campaigns">View campaigns →</Link>
            </div>

            <div className="quick-card">
              <span className="quick-number">02</span>
              <h3>Make a Donation</h3>
              <p>
                Support a meaningful cause with a contribution of your choice.
              </p>
              <Link to="/campaigns">Donate now →</Link>
            </div>

            <div className="quick-card">
              <span className="quick-number">03</span>
              <h3>Your History</h3>
              <p>
                View all your previous donations and contributions.
              </p>
              <a href="#history">View history →</a>
            </div>
          </div>
        </section>

        <section className="dashboard-section" id="history">
          <div className="section-label">YOUR CONTRIBUTIONS</div>
          <h2>Donation history.</h2>

          <div className="history-box">
            <table>
              <thead>
                <tr>
                  <th>CAMPAIGN</th>
                  <th>AMOUNT</th>
                  <th>DATE</th>
                </tr>
              </thead>

              <tbody>
                {userDonations.length === 0 ? (
                  <tr>
                    <td colSpan="3">
                      <div className="empty-history">
                        You haven't made any donations yet.
                        <br /><br />
                        <Link to="/campaigns">Explore campaigns →</Link>
                      </div>
                    </td>
                  </tr>
                ) : (
                  userDonations.map((donation) => (
                    <tr key={donation.id}>
                      <td>{donation.campaign}</td>
                      <td>₹{Number(donation.amount).toLocaleString('en-IN')}</td>
                      <td>{donation.date}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </>
  )
}

export default UserDashboard
