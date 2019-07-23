import React from 'react';
import './style/About.css';

const About = () => {
	return(
		<div id="about">
			<div className="ui container">
				<div className="ui grid">
					<div className="ui sixteen wide relaxed column centered">
						<div className="row">
							<h1 className="ui header centered">ABOUT US</h1>
						</div>
						<div className="row centered">
							<img className="ui bordered image centered" src={require('../../img/thumb-up.jpg')} alt="thumbs-up" />
						</div>
						<br />
						<div className="row">
							<h2 className="ui header">WE HAVE FREE TEMPLATES FOR EVERYONE</h2>
							<p>
								Our website templates are created with inspiration, checked for
								quality and originality and meticulously sliced and coded. What's more,
								they're absolutely free! You can do a lot with them. You can modify them.
								You can use them to design websites for clients, so long as you agree with
								the Terms of Use. You can even remove all our links if you want to.
							</p>
						</div>
						<br />
						<div className="row">
							<h2 className="ui header">WE HAVE MORE TEMPLATES FOR YOU</h2>
							<p>
								Looking for more templates? Just browse through all our Free Website
								Templates and find what you're looking for. But if you don't find any
								website template you can use, you can try our Free Web Design service and
								tell us all about it. Maybe you're looking for something different, something
								special. And we love the challenge of doing something different and something
								special.
							</p>
						</div>
						<br />
						<div className="row">
							<h2 className="ui header">BE PART OF OUR COMMUNITY</h2>
							<p>
								If you're experiencing issues and concerns about this website template, join
								the discussion on our forum and meet other people in the community who share
								the same interests with you.
							</p>
						</div>
						<br />
						<div className="row">
							<h2 className="ui header">TEMPLATE DETAILS</h2>
							<p>
								Design version 11. Code version 6.<br /><br />
								Website Template details, discussion and updates for this Law Firm Web Template.<br /><br />
								Website Template design by Free Website Templates.<br /><br />
								Please feel free to remove some or all the text and links of this page and replace
								it with your own About content.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default About;
