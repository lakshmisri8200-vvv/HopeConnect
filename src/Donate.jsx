
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Donate() {
  const navigate = useNavigate()

  const [amount, setAmount] = useState('')
  const [campaign] = useState(
    localStorage.getItem('selectedCampaign') || 'Selected Campaign'
  )

  const currentUser = JSON.parse(localStorage.getItem('currentUser'))

  const isUser = currentUser && currentUser.role === 'user'

  function handleDonation(event) {
    event.preventDefault()

    const user = JSON.parse(localStorage.getItem('currentUser'))

    if (!user || user.role !== 'user') {
      alert('Please login before donating.')
      navigate('/login')
      return
    }

    const donationAmount = Number(amount)

    if (!donationAmount || donationAmount <= 0) {
      alert('Please enter a valid donation amount.')
      return
    }

    const donations =
      JSON.parse(localStorage.getItem('donations')) || []

    const newDonation = {
      id: Date.now(),
      email: user.email,
      name: user.name,
      campaign,
      amount: donationAmount,
      date: new Date().toLocaleDateString('en-IN')
    }

    donations.push(newDonation)

    localStorage.setItem('donations', JSON.stringify(donations))

    alert('Donation successful! Thank you for your kindness ❤️')

    localStorage.removeItem('selectedCampaign')
    navigate('/user-dashboard')
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

      <main className="donate-page">
        <div className="donate-box">
          <div className="section-label">MAKE AN IMPACT</div>

          <h1>Give with purpose.</h1>

          <p className="donate-subtitle">
            Choose your contribution and help support a cause that matters.
          </p>

          <div className="selected-campaign">
            <span>YOU ARE SUPPORTING</span>
            <strong>{campaign}</strong>
          </div>

          {!isUser && (
            <div className="login-warning">
              Please login as a user before making a donation.
            </div>
          )}

          {isUser && (
            <form onSubmit={handleDonation}>
              <div className="form-group">
                <label>CHOOSE AMOUNT</label>

                <div className="amount-options">
                  {[100, 500, 1000].map((value) => (
                    <button
                      key={value}
                      type="button"
                      className="amount-button"
                      onClick={() => setAmount(String(value))}
                    >
                      ₹{value.toLocaleString('en-IN')}
                    </button>
                  ))}
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="donation-amount">DONATION AMOUNT</label>

                <input
                  type="number"
                  id="donation-amount"
                  placeholder="Enter amount"
                  min="1"
                  required
                  value={amount}
                  onChange={(event) => setAmount(event.target.value)}
                />
              </div>

              <button type="submit" className="donate-submit">
                Confirm Donation →
              </button>
            </form>
          )}

          <Link to="/campaigns" className="back-link">
            ← Back to campaigns
          </Link>
        </div>
      </main>
    </>
  )
}

export default Donate
