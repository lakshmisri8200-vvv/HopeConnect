
import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function AdminDashboard() {
    const navigate = useNavigate()

    const [users, setUsers] = useState([])
    const [donations, setDonations] = useState([])
    const [campaigns, setCampaigns] = useState([])

    useEffect(() => {
        const currentUser = JSON.parse(
            localStorage.getItem('currentUser')
        )

        if (!currentUser || currentUser.role !== 'admin') {
            alert('Admin access required.')
            navigate('/login')
            return
        }

        setUsers(JSON.parse(localStorage.getItem('users')) || [])
        setDonations(JSON.parse(localStorage.getItem('donations')) || [])
        setCampaigns(JSON.parse(localStorage.getItem('campaigns')) || [])
    }, [navigate])

    const totalAmount = donations.reduce(
        (total, donation) => total + Number(donation.amount || 0),
        0
    )

    function handleLogout() {
        localStorage.removeItem('currentUser')
        alert('Admin logged out successfully.')
        navigate('/')
    }

    return (
        <>
            <header className="navbar">
                <Link to="/" className="logo">HopeConnect</Link>

                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/campaigns">Campaigns</Link>
                    <Link to="/admin-dashboard">Admin</Link>
                </nav>
            </header>

            <main className="admin-page">

                <section className="admin-header">
                    <div>
                        <div className="section-label">ADMINISTRATION</div>
                        <h1>Dashboard.</h1>
                        <p className="admin-subtitle">
                            Manage HopeConnect and monitor platform activity.
                        </p>
                    </div>

                    <button
                        className="logout-button"
                        onClick={handleLogout}
                    >
                        Logout
                    </button>
                </section>

                <section className="admin-stats">
                    <div className="admin-stat">
                        <span>REGISTERED USERS</span>
                        <strong>{users.length}</strong>
                    </div>

                    <div className="admin-stat">
                        <span>TOTAL DONATIONS</span>
                        <strong>{donations.length}</strong>
                    </div>

                    <div className="admin-stat">
                        <span>TOTAL AMOUNT</span>
                        <strong>₹{totalAmount.toLocaleString('en-IN')}</strong>
                    </div>

                    <div className="admin-stat">
                        <span>ACTIVE CAMPAIGNS</span>
                        <strong>{campaigns.length}</strong>
                    </div>
                </section>

                <section className="admin-section">
                    <div className="section-label">MANAGEMENT</div>
                    <h2>Manage the platform.</h2>

                    <div className="admin-actions">
                        <div className="admin-action">
                            <span className="admin-action-number">01</span>
                            <h3>Campaigns</h3>
                            <p>
                                Add, view and delete donation campaigns.
                            </p>
                            <Link to="/admin-campaigns">
                                Manage campaigns →
                            </Link>
                        </div>

                        <div className="admin-action">
                            <span className="admin-action-number">02</span>
                            <h3>Users</h3>
                            <p>
                                View all registered users on the platform.
                            </p>
                            <a href="#users">View users →</a>
                        </div>

                        <div className="admin-action">
                            <span className="admin-action-number">03</span>
                            <h3>Donations</h3>
                            <p>
                                Monitor donations made by registered users.
                            </p>
                            <a href="#donations">View donations →</a>
                        </div>
                    </div>
                </section>

                <section className="admin-section" id="users">
                    <div className="section-label">USER MANAGEMENT</div>
                    <h2>Registered users.</h2>

                    <div className="table-box">
                        <table>
                            <thead>
                                <tr>
                                    <th>NAME</th>
                                    <th>EMAIL</th>
                                </tr>
                            </thead>

                            <tbody>
                                {users.length === 0 ? (
                                    <tr>
                                        <td colSpan="2" className="empty-message">
                                            No registered users yet.
                                        </td>
                                    </tr>
                                ) : (
                                    users.map((user, index) => (
                                        <tr key={user.email || index}>
                                            <td>{user.name}</td>
                                            <td>{user.email}</td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>
                </section>

                <section className="admin-section" id="donations">
                    <div className="section-label">DONATION ACTIVITY</div>
                    <h2>Recent donations.</h2>

                    <div className="table-box">
                        <table>
                            <thead>
                                <tr>
                                    <th>DONOR</th>
                                    <th>CAMPAIGN</th>
                                    <th>AMOUNT</th>
                                    <th>DATE</th>
                                </tr>
                            </thead>

                            <tbody>
                                {donations.length === 0 ? (
                                    <tr>
                                        <td colSpan="4" className="empty-message">
                                            No donations yet.
                                        </td>
                                    </tr>
                                ) : (
                                    donations.map((donation, index) => (
                                        <tr key={donation.id || index}>
                                            <td>{donation.name}</td>
                                            <td>{donation.campaign}</td>
                                            <td>₹{donation.amount}</td>
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

export default AdminDashboard
