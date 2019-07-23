import React from 'react';
import NewsItem from './NewsItem';
import './style/RightPanel.css';

const RightPanel = () => {
	return(
		<div id="right-panel">
			<div className="header">
				<h1>NEWS</h1>
				<div className="ui items">
					<NewsItem
						image={require("../../img/bride-sideview.jpg")}
						title="THE BASICS OF MARRAGE LAWS"
						alt="bride"
					/>
					<NewsItem
						image={require("../../img/happy.jpg")}
						title="HAPPY NEWLY DIVORCED WOMEN"
						alt="happy"
					/>
					<NewsItem
						image={require("../../img/children.jpg")}
						title="CHILDREN & DIVORCED PARENTS"
						alt="children"
					/>
				</div>
			</div>
		</div>
	);
};

export default RightPanel;
