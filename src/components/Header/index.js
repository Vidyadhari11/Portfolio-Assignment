import {Link} from 'react-router-dom'

import './index.css'

const Header = props => {
    return(
        <div className="nav-header">
            <h1 className="name">Vidyadhari Belagal</h1>
            <ul className="nav-menu">
                <li className="nav-menu-item">
                  <Link to="/" className="nav-link">
                    About
                  </Link>
                </li>
    
                <li className="nav-menu-item">
                  <Link to="/projects" className="nav-link">
                    Projects
                  </Link>
                </li>
    
                <li className="nav-menu-item">
                  <Link to="/contact" className="nav-link">
                    Contacts
                  
                  </Link>
                </li>
              </ul>
            </div>
      
    )

}

export default Header


