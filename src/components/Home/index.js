import {Link} from 'react-router-dom'
import Header from '../Header'

import './index.css'

const Home = () => (
  <>
    <Header />
    <div className="home-container">
      <div className="home-content">
        <h1>Find The Job That Fits Your Life</h1>
        <p>
          Millions of people are searching for jobs, salary information, company
          reviews. Find the job that fits your abilities and potential.
        </p>
        <Link to="/Jobs">
          <button className="find-job-btn" type="button">
            Find Jobs
          </button>
        </Link>
      </div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/home-lg-bg.png"
        alt="desktop home"
        className="desktop-home-img"
      />
      <img
        src="https://assets.ccbp.in/frontend/react-js/home-sm-bg.png"
        alt="mobile home"
        className="mobile-home-img"
      />
    </div>
  </>
)

export default Home
