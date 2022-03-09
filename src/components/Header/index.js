import {Link, withRouter} from 'react-router-dom'

import Cookies from 'js-cookie'
import {AiFillHome} from 'react-icons/ai'
import {BsBriefcaseFill} from 'react-icons/bs'
import {FiLogOut} from 'react-icons/fi'

import './index.css'

const Header = props => {
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <nav className="nav-header">
      <div className="logo-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
          alt="website logo"
          className="web-logo"
        />
        <p className="logo-name">Jobby</p>
      </div>
      <div className="desktop-menu-item">
        <ul className="menu-item">
          <li className="menu-item">
            <Link to="/">Home</Link>
          </li>
          <li className="menu-item">
            <Link to="/jobs">Jobs</Link>
          </li>
        </ul>
        <button type="button" className="logout-btn" onClick={onClickLogout}>
          Logout
        </button>
      </div>
      <div className="mobile-menu-item">
        <ul className="logo-menu-items">
          <li className="mobile-nav-item">
            <Link to="/">
              <AiFillHome className="home-icon" />
            </Link>
          </li>
          <li className="mobile-nav-item">
            <Link to="/jobs">
              <BsBriefcaseFill className="job-icon" />
            </Link>
          </li>
        </ul>
        <button type="button">
          <FiLogOut className="logout-icon" />
        </button>
      </div>
    </nav>
  )
}
export default withRouter(Header)
