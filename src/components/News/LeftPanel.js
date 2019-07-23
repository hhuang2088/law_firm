import React from 'react';
import './style/LeftPanel.css';

const LeftPanel = () => {
	return(
		<div id="left-panel">
			<div className="header" id="our-lawyers-header">
				<h3>RECENT NEWS</h3>
			</div>
			<div className="ui basic segment">
				<p>
					This website template has been designed
					by Free Website Templates for you, for
					free. You can replace all this text with
					your own text.
				</p>
			</div>
			<div className="ui basic segment">
				<p>
					You can remove any link to our website
					from this website template, you're free to
					use this website template without linking
					back to us.
				</p>
			</div>
			<div className="ui basic segment">
				<p>
					If you're having problems editing this
					website template, then don't hesitate to
					ask for help on the Forums.
				</p>
			</div>
			<div className="header" id="our-lawyers-header">
				<h3>CLIENT TESTIMONIALS</h3>
			</div>
			<div className="ui basic segment">
				<p>
					“The best family lawyers in the city so far.
					Me and my ex-wife didn’t have any
					problems settling the terms and
					agreement. Everything went so smoothly.
					We’re both very happy.“
				</p>
				<div className="ui basic right aligned segment">
					<p>- Jared Greene</p>
				</div>
			</div>
		</div>
	);
};

export default LeftPanel;
