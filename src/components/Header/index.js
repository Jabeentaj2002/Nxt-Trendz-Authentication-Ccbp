// Write your JS code here
import './index.css'

const Header = () => (
  <div className="navbar-container">
    <nav className="nav-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        alt="website logo"
        className="website-logo"
      />

      <ul className="menu-items-container">
        <li className="menu-btn">Home</li>

        <li className="menu-btn">Products</li>

        <li className="menu-btn">Cart</li>

        <button className="logout-btn">Logout</button>
      </ul>
    </nav>
  </div>
)

export default Header
