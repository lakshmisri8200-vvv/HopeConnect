
import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function AdminCampaigns() {
    const navigate = useNavigate()

    const defaultCampaigns = [
        {
            id: 1,
            title: 'Education for every child.',
            category: 'EDUCATION',
            description: 'Help provide school supplies, learning materials and educational opportunities for children.',
            goal: 50000
        },
        {
            id: 2,
            title: 'A meal should never be a luxury.',
            category: 'FOOD',
            description: 'Support food distribution programs helping families facing difficult circumstances.',
            goal: 30000
        },
        {
            id: 3,
            title: 'Healthcare when it matters.',
            category: 'HEALTHCARE',
            description: 'Help people access essential medical care and support when they need it most.',
            goal: 100000
        }
    ]

    const [campaigns, setCampaigns] = useState(() => {
        const saved = localStorage.getItem('campaigns')
        return saved ? JSON.parse(saved) : defaultCampaigns
    })

    const [title, setTitle] = useState('')
    const [category, setCategory] = useState('')
    const [description, setDescription] = useState('')
    const [goal, setGoal] = useState('')

    useEffect(() => {
        const currentUser = JSON.parse(
            localStorage.getItem('currentUser')
        )

        if (!currentUser || currentUser.role !== 'admin') {
            alert('Admin access required.')
            navigate('/login')
        }
    }, [navigate])

    function saveCampaigns(updatedCampaigns) {
        setCampaigns(updatedCampaigns)
        localStorage.setItem(
            'campaigns',
            JSON.stringify(updatedCampaigns)
        )
    }

    function handleAddCampaign(event) {
        event.preventDefault()

        const newCampaign = {
            id: Date.now(),
            title: title.trim(),
            category: category.trim().toUpperCase(),
            description: description.trim(),
            goal: Number(goal)
        }

        if (
            !newCampaign.title ||
            !newCampaign.category ||
            !newCampaign.description ||
            newCampaign.goal <= 0
        ) {
            alert('Please enter valid campaign details.')
            return
        }

        const updatedCampaigns = [...campaigns, newCampaign]
        saveCampaigns(updatedCampaigns)

        alert('Campaign added successfully!')

        setTitle('')
        setCategory('')
        setDescription('')
        setGoal('')
    }

    function deleteCampaign(id) {
        const confirmDelete = window.confirm(
            'Are you sure you want to delete this campaign?'
        )

        if (!confirmDelete) return

        const updatedCampaigns = campaigns.filter(
            campaign => campaign.id !== id
        )

        saveCampaigns(updatedCampaigns)
        alert('Campaign deleted successfully!')
    }

    return (
        <>
            <header className="navbar">
                <Link to="/" className="logo">HopeConnect</Link>

                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/campaigns">Campaigns</Link>
                    <Link to="/admin-dashboard">Dashboard</Link>
                </nav>
            </header>

            <main className="manage-page">

                <section className="manage-header">
                    <div>
                        <div className="section-label">ADMIN MODULE</div>
                        <h1>Manage campaigns.</h1>
                        <p className="manage-subtitle">
                            Create and manage the causes displayed
                            on HopeConnect.
                        </p>
                    </div>

                    <Link
                        to="/admin-dashboard"
                        className="back-button"
                    >
                        ← Admin Dashboard
                    </Link>
                </section>

                <section className="add-campaign-box">
                    <h2>Add a new campaign.</h2>

                    <form
                        className="campaign-form"
                        onSubmit={handleAddCampaign}
                    >
                        <input
                            type="text"
                            placeholder="Campaign title"
                            value={title}
                            onChange={e => setTitle(e.target.value)}
                            required
                        />

                        <input
                            type="text"
                            placeholder="Category e.g. EDUCATION"
                            value={category}
                            onChange={e => setCategory(e.target.value)}
                            required
                        />

                        <textarea
                            className="full-field"
                            placeholder="Campaign description"
                            value={description}
                            onChange={e => setDescription(e.target.value)}
                            required
                        />

                        <input
                            type="number"
                            placeholder="Goal amount ₹"
                            min="1"
                            value={goal}
                            onChange={e => setGoal(e.target.value)}
                            required
                        />

                        <button type="submit" className="add-button">
                            + Add Campaign
                        </button>
                    </form>
                </section>

                <section>
                    <div className="section-label">CURRENT CAMPAIGNS</div>
                    <h2 className="section-title">
                        Manage your causes.
                    </h2>

                    <div className="campaign-list">
                        {campaigns.length === 0 ? (
                            <p>No campaigns available.</p>
                        ) : (
                            campaigns.map(campaign => (
                                <article
                                    className="admin-campaign-card"
                                    key={campaign.id}
                                >
                                    <div className="category">
                                        {campaign.category}
                                    </div>

                                    <h3>{campaign.title}</h3>

                                    <p>{campaign.description}</p>

                                    <div className="campaign-goal">
                                        Goal: ₹{Number(campaign.goal).toLocaleString('en-IN')}
                                    </div>

                                    <button
                                        className="delete-button"
                                        onClick={() => deleteCampaign(campaign.id)}
                                    >
                                        Delete Campaign
                                    </button>
                                </article>
                            ))
                        )}
                    </div>
                </section>

            </main>
        </>
    )
}

export default AdminCampaigns
