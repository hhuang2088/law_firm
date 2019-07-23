import React from 'react';

const LawyerItem = (props) => {
	return(
		<div class="item">
			<img class="ui image" src={props.image} alt={props.alt} />
			<div class="content">
				<h5 class="header">{props.name}</h5>
				<div class="description">
					This website template has been designed by Free Website Templates for
					you, for free. You can replace all this text with your own text.You can remove
					any link to our website from this website template.
				</div>
			</div>
		</div>
	);
};

export default LawyerItem;
