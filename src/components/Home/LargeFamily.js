import React from 'react';
import './style/LargeFamily.css';

const LargeFamily = () => {
	return(
		<div className="ui sixteen column grid" id="home-jumbotron">
			<div className="row centered">
				<div className="six wide column aligned">
					<br />
					<br />
					<br />
					<h1>It's never easy...</h1>
					<h1>When it comes to family.</h1>
					<h2>But we can set</h2>
					<h2>everything straight.</h2>
				</div>
				<div className="ten wide column">
					<img src={require('../../img/family-large.jpg')} alt="large family"/>
				</div>
			</div>
		</div>
	);
};

export default LargeFamily;
