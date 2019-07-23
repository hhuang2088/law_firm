import React from 'react';
import './style/LeftPanel.css';

const LeftPanel = () => {
	return(
		<div id="left-panel">
			<div className="header" id="contact-info-header">
				<h3>CONTACT INFO</h3>
			</div>
			<div className="ui items">
				<div className="ui item">
					<i className="home icon" />
					<div>
						<h3>Manes Winchester<br /> Family Law Firm</h3>
						<p>the address city, state 1111</p>
					</div>
				</div>
				<br />
				<div className="ui segment item">
					<i className="phone icon" />
					<div>
						<p>Phone: (+20) 000 222 999</p>
					</div>
				</div>
				<br />
				<div className="ui segment item">
					<i className="fax icon" />
					<div>
						<p>Fax: (+20) 000 222 988</p>
					</div>
				</div>
				<br />
				<div className="ui segment item">
					<i className="envelope icon" />
					<div>
						<p>Email: info@freewebsitetemplates.com</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LeftPanel;
