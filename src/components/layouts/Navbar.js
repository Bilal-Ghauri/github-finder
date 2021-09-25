import React from 'react'
import { Link } from 'react-router-dom';
const Navbar = (props) => {
        return (
            <nav className="navBar">
                <div className="name">
                    <h2>
                        <i className={props.icon}></i>
                        {props.title}
                    </h2>
                </div>
                <div className="section">
                    <span><Link to="/">Home</Link></span>
                    <span><Link to="/about">About</Link></span>
                </div>
            </nav>
        )
}

Navbar.defaultProps = {
    title : "Github Finder",
    icon:"fab fa-github"
}

export default Navbar;
