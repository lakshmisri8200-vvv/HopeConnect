
import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const defaultCampaigns = [
    {
        id: 1,
        title: 'Education for every child.',
        category: 'EDUCATION',
        description: 'Help provide school supplies, learning materials and educational opportunities for children.',
        goal: 50000,
    },
    {
        id: 2,
        title: 'A meal should never be a luxury.',
        category: 'FOOD',
        description: 'Support food distribution programs helping families facing difficult circumstances.',
        goal: 30000,
    },
    {
        id: 3,
        title: 'Healthcare when it matters.',
        category: 'HEALTHCARE',
        description: 'Help people access essential medical care and support when they need it most.',
        goal: 100000,
    },
    {
        id: 4,
        title: 'Empower women. Build stronger futures.',
        category: 'WOMEN EMPOWERMENT',
        description: 'Support skill development, education and opportunities that help women build independent futures.',
        goal: 75000,
    },
    {
        id: 5,
        title: 'Help families after disaster.',
        category: 'DISASTER RELIEF',
        description: 'Provide essential food, shelter and basic supplies to families affected by natural disasters.',
        goal: 80000,
    },
    {
        id: 6,
        title: 'Every animal deserves care.',
        category: 'ANIMAL WELFARE',
        description: 'Support food, medical care and shelter for animals in need of protection and care.',
        goal: 40000,
    },
]

function Campaigns() {
    const navigate = useNavigate()
    const [campaigns, setCampaigns] = useState([])
    const [donations, setDonations] = useState([])
    const [currentUser, setCurrentUser] = useState(null)

    useEffect(() => {
        function loadData() {
            let savedCampaigns = JSON.parse(
                localStorage.getItem('campaigns')
            )

            if (!savedCampaigns) {
                savedCampaigns = defaultCampaigns
                localStorage.setItem(
                    'campaigns',
                    JSON.stringify(savedCampaigns)
                )
            }

            setCampaigns(savedCampaigns)
            setDonations(
                JSON.parse(localStorage.getItem('donations')) || []
            )
            setCurrentUser(
                JSON.parse(localStorage.getItem('currentUser'))
            )
        }

        loadData()

        window.addEventListener('focus', loadData)

        return () => {
            window.removeEventListener('focus', loadData)
        }
    }, [])

    function handleLogout() {
        localStorage.removeItem('currentUser')
        setCurrentUser(null)
        navigate('/')
    }

    function openDonation(campaign) {
        if (!currentUser) {
            alert('Please login first to make a donation.')
            navigate('/login')
            return
        }

        if (currentUser.role !== 'user') {
            alert('Only donor accounts can make donations.')
            return
        }

        localStorage.setItem('selectedCampaign', campaign.title)
        navigate('/donate')
    }

    const dashboardPath = currentUser?.role === 'admin'
        ? '/admin-dashboard'
        : '/user-dashboard'

    return (
        <>
            <header className="navbar">
                <Link to="/" className="logo">HopeConnect</Link>

                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/campaigns">Campaigns</Link>

                    {currentUser ? (
                        <>
                            <Link to={dashboardPath}>Dashboard</Link>
                            <button
                                type="button"
                                className="nav-button"
                                onClick={handleLogout}
                            >
                                Logout
                            </button>
                        </>
                    ) : (
                        <>
                            <Link to="/login">Login</Link>
                            <Link to="/signup" className="nav-button">
                                Sign Up
                            </Link>
                        </>
                    )}
                </nav>
            </header>

            <main>
                <section className="campaigns-page">
                    <div className="campaigns-header">
                        <div className="section-label">
                            EXPLORE OUR CAUSES
                        </div>

                        <h1>
                            Causes worth<br />
                            <span>showing up for.</span>
                        </h1>

                        <p>
                            Every campaign represents a real opportunity
                            to make a difference. Explore the causes below
                            and choose where you would like your kindness
                            to create an impact.
                        </p>
                    </div>

                    <div className="all-campaigns">
                        {campaigns.length === 0 ? (
                            <div className="empty-campaigns">
                                <h2>No campaigns available.</h2>
                                <p>Please check back later for new causes.</p>
                            </div>
                        ) : (
                            campaigns.map((campaign) => {
                                const raised = donations.reduce(
                                    (total, donation) => {
                                        return donation.campaign === campaign.title
                                            ? total + Number(donation.amount)
                                            : total
                                    },
                                    0
                                )

                                const percentage = campaign.goal > 0
                                    ? Math.min(
                                        Math.round((raised / campaign.goal) * 100),
                                        100
                                    )
                                    : 0

                                return (
                                    <article
                                        className="campaign-card-page"
                                        key={campaign.id}
                                    >
                                        <div className="campaign-category">
                                            {campaign.category}
                                        </div>

                                        <h2>{campaign.title}</h2>
                                        <p>{campaign.description}</p>

                                        <div className="campaign-stats">
                                            <div className="campaign-progress-info">
                                                <span>
                                                    ₹{raised.toLocaleString('en-IN')} raised
                                                </span>
                                                <span>{percentage}%</span>
                                            </div>

                                            <div className="campaign-progress-track">
                                                <div
                                                    className="campaign-progress-fill"
                                                    style={{ width: `${percentage}%` }}
                                                />
                                            </div>

                                            <div className="campaign-goal">
                                                Goal: ₹{Number(campaign.goal).toLocaleString('en-IN')}
                                            </div>

                                            <button
                                                className="donate-button"
                                                onClick={() => openDonation(campaign)}
                                            >
                                                Donate Now →
                                            </button>
                                        </div>
                                    </article>
                                )
                            })
                        )}
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

export default Campaigns
