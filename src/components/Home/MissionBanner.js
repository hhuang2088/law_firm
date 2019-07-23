import React from 'react';
import './style/MissionBanner.css';

const MissionBanner = () => {
	return(
		<div id="mission-banner">
			<div className="ui two column very relaxed grid container">
				<div className="ten wide column" id="promise">
					<h1>The Manes Winchester Promise</h1>
					<p>
						This website template has been designed by Free Website Templates
						for you, for free. You can replace all this text with your own text.
						You can remove any link to our website from this website template,
						you're free to use this website template without linking back to us.
						If you're having problems editing this website template, then don't
						hesitate to ask for help on the Forums.
					 </p>
				</div>
				<div className="six wide column">
					<h3>TESTIMONIALS</h3>
					<p>
						“Aenean ullamcorper purus vitae nisl tristique sollicitudin. Quisque
						vestibulum, erat ornare.”
					</p>
					<p className="right floated left aligned">-John Doe and Jane Doe-</p>
				</div>
			</div>
		</div>
	);
};

export default MissionBanner;
