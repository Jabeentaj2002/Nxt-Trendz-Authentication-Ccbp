import './index.css'

import {Link} from 'react-router-dom'

const NotFound = () => (
  <Link to="/bad-path" className="link-item">
    <div className="not-found-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/not-found-blog-img.png"
        alt="not found"
        className="not-found-img"
      />
    </div>
  </Link>
)

export default NotFound
