import React from 'react';
import './style/RightPanel.css';

const RightPanel = () => {
	return(
		<div id="right-panel">
			<div id="practice-header">
				<h2>PRACTICES</h2>
			</div>
			<div id="practice-text">
				<p>
					This website template has been designed by Free Website Templates for you, for free. You can
					replace all this text with your own text. You can remove any link to our website from this
					website template, you're free to use this website template without linking back to us. If you're
					having problems editing this website template, then don't hesitate to ask for help on the Forums.
				</p>
			</div>
			<div className="ui two column stackable grid">
				<div className="eight wide column">
					<div className="ui grey fluid card">
						<div className="image">
							<img src={require('../../img/prenuptial.jpg')} alt="prenuptial"/>
						</div>
						<div className="content">
							<p className="header">PRENUPTIAL AGREEMENT</p>
						</div>
					</div>
				</div>
				<div className="eight wide column">
					<div className="ui grey fluid card">
						<div className="image">
							<img src={require('../../img/bride.jpg')} alt="bride" />
						</div>
						<div className="content">
							<p className="header">WEDDING</p>
						</div>
					</div>
				</div>
				<div className="eight wide column">
					<div className="ui grey fluid card">
						<div className="image">
							<img src={require('../../img/divorce.jpg')} alt="divorce" />
						</div>
						<div className="content">
							<p className="header">DIVORCE</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default RightPanel;
