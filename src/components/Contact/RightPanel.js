import React from 'react';
import './style/RightPanel.css';

const RightPanel = () => {
	return(
		<div id="right-panel">
			<div className="header">
				<h1>Contact</h1>
				<h3>SEND US A QUICK MESSAGE</h3>
				<p>
					You can remove any link to our website from this
					website template, you're free to use this website
					template without linking back to us. If you're having problems editing this website
					template, then don't hesitate to ask for help on the Forums.
				</p>
			</div>
			<br />
			<form class="ui form">
			  <div class="field">
			    <label>First Name</label>
			    <input type="text" name="first-name" placeholder="First Name" />
			  </div>
			  <div class="field">
			    <label>Last Name</label>
			    <input type="text" name="last-name" placeholder="Last Name" />
			  </div>
			  <div class="field">
					<label>Email Address</label>
					<input type="text" name="last-name" placeholder="Last Name" />
			  </div>
				<div class="field">
					<label>Message</label>
					<textarea></textarea>
				</div>
			  <button class="ui grey button" type="submit">SEND MESSAGE</button>
			</form>
		</div>
	);
};

export default RightPanel;
