import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
	return(
		<div className="ui secondary pointing menu" id="law-navbar">
			<div className="ui container">
				<Link to="/" className="header" alt="logo" id="logo">
					<img src={require('../img/logo.png')} alt="logo" />
				</Link>
				<div className="right menu">
					<Link to="/" className="item law-item">HOME</Link>
					<Link to="/about" className="item law-item">ABOUT</Link>
					<Link to="/practices" className="item law-item">PRACTICES</Link>
					<Link to="/lawyers" className="item law-item">OUR LAWYERS</Link>
					<Link to="/news" className="item law-item">NEWS</Link>
					<Link to="/contact" className="item law-item">CONTACT</Link>
				</div>
			</div>
		</div>
	);
};

export default NavBar
