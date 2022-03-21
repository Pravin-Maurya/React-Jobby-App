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
        <Link to="/" className="logo-img">
          <img
            src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
            alt="website logo"
            className="web-logo"
          />
        </Link>
      </div>
      <div className="desktop-menu-item">
        <ul className="header-menu-item">
          <Link to="/" className="link-item">
            <li className="menu-item">Home</li>
          </Link>

          <Link to="/jobs" className="link-item">
            <li className="menu-item">Jobs</li>
          </Link>
        </ul>
        <button type="button" className="logout-btn" onClick={onClickLogout}>
          Logout
        </button>
      </div>
      <div className="mobile-menu-item">
        <ul className="logo-menu-items">
          <Link to="/" className="link-item">
            <li className="mobile-nav-item">
              <AiFillHome className="icons" />
            </li>
          </Link>

          <Link to="/jobs" className="link-item">
            <li className="mobile-nav-item">
              <BsBriefcaseFill className="icons" />
            </li>
          </Link>
        </ul>
        <button
          type="button"
          className="logout-mobile-btn"
          onClick={onClickLogout}
        >
          <FiLogOut className="icons" />
        </button>
      </div>
    </nav>
  )
}
export default withRouter(Header)
