import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
    return (
        <div className="site-header">
        <div className="container">
            <Link to="/" className="branding">
                <img src="images/logo.png" alt="" className="logo"/>
                <div className="logo-type">
                    <h1 className="site-title">City Weather</h1>
                    <small className="site-description">Keep up with the weather</small>
                </div>
            </Link>
            <div className="main-navigation">
                <button type="button" className="menu-toggle"><i className="fa fa-bars"></i></button>
                <ul className="menu">
                    <li className="menu-item current-menu-item"><Link to="/">Home</Link></li>
                    <li className="menu-item"><Link to="/contact">Contact</Link></li>
                </ul>
            </div> 
            <div className="mobile-navigation"></div>

        </div>
    </div> 
    )
}

export default Header
