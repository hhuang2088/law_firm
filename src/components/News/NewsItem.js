import React from 'react';

const NewsItem = (props) => {
	return(
		<div className="ui item">
			<div className="ui image">
				<img src={props.image} alt={props.alt} />
			</div>
			<div className="ui floated right">
				<p>31st January 2023 by Manes Winchester</p>
				<h3>{props.title}</h3>
				<br />
				<p>
					This website template has been designed by Free
					Website Templates for free. You can replace all
					this text with your own text. You can remove any link
				</p>
				<div className="ui basic segment right aligned">
					<button className="ui grey button">READ MORE</button>
				</div>
			</div>
		</div>
	);
};

export default NewsItem;
