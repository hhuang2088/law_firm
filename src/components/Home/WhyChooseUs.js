import React from 'react';
import './style/WhyChooseUs.css';

const WhyChooseUs = () => {
	return(
		<div id="why-choose-us">
			<div className="ui container">
				<div className="ui grid">
					<h3>WHY CHOOSE US?</h3>
					<div className="row">
						<div className="four wide column">
							<h5>OUR LAWYERS</h5>
							<img className="ui bordered image" src={require('../../img/meeting.jpg')} alt="meeting"/>
							<p>
								Our website templates are created with inspiration,
								checked for quality and originality.
							</p>
							<button class="ui grey button">READ MORE</button>
						</div>
						<div className="four wide column">
							<h5>GET TO KNOW US MORE</h5>
							<img className="ui bordered image" src={require('../../img/handshake.jpg')} alt="handshake"/>
							<p>
								Just browse through all our Free Website Templates and
								ﬁnd what you’re looking for.
							</p>
							<br />
							<button class="ui grey button">READ MORE</button>
						</div>
						<div className="four wide column">
							<h5>WHAT WE OFFER</h5>
							<img className="ui bordered image" src={require('../../img/smile.jpg')} alt="smile"/>
							<p>
								Join the discussion on our forum and meet
								other people in the community.
							</p>
							<br />
							<button class="ui grey button">READ MORE</button>
						</div>
						<div className="four wide column">
							<h5>GET IN TOUCH WITH US</h5>
							<img className="ui bordered image" src={require('../../img/family-small.jpg')} alt="family"/>
							<p>
								And we love the challenge of doing something different
								and something special.
							</p>
							<button class="ui grey button">READ MORE</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default WhyChooseUs;
