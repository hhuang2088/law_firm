import React from 'react';
import { Link } from 'react-router-dom';
import './style/LeftPanel.css';

const LeftPanel = () => {
	return(
		<div id="left-panel">
			<div id="practices-header">
				<h3>PRACTICES</h3>
			</div>
			<div class="ui list">
			  <div class="item">
			    <div class="content practice-item">
			      <Link to="#" class="header">Prenuptial Agreement</Link>
			    </div>
			  </div>
			  <div class="item">
					<div class="content practice-item">
						<Link to="#" class="header">Marriage</Link>
					</div>
			  </div>
			  <div class="item">
					<div class="content practice-item">
						<Link to="#" class="header">Divorce</Link>
					</div>
			  </div>
			</div>
			<div id="client-testimonial-header">
				<h3>CLIENT TESTIMONIALS</h3>
			</div>
			<div>
				<div className="ui basic segment">
					<p>
						“The best family lawyers in the city so far.<br />
						Me and my ex-wife didn’t have any<br />
						problems settling the terms and<br />
						agreement. Everything went so smoothly.<br />
						We’re both very happy.”
					</p>
				</div>
				<div className="ui basic right aligned segment">
					<p>- Jared Greene</p>
				</div>
			</div>
		</div>
	);
};

export default LeftPanel;
