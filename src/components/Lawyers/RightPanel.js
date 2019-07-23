import React from 'react';
import LawyerItem from './LawyerItem';
import './style/RightPanel.css'

const RightPanel = () => {
	return(
		<div id="right-panel">
			<div className="ui basic segment">
				<div className="ui header">OUR LAWYERS</div>
			</div>
			<div className="ui items staff-list">
				<div className="ui header">DIRECTORS</div>
				<LawyerItem
					image={require('../../img/thumbnail-sideview.jpg')}
					alt="Pauline"
					name="PAULINE H. WILSON"
				/>
				<LawyerItem
					image={require('../../img/thumbnail-focus.jpg')}
					alt="Kenneth"
					name="KENNETH E. LUNDERBERG"
				/>
				<div className="ui header">SENIOR ASSOCIATES</div>
				<LawyerItem
					image={require('../../img/thumbnail-smile.jpg')}
					alt="George"
					name="GEORGE R. MONTGOMERY"
				/>
				<div className="ui header">ASSOCIATES</div>
				<LawyerItem
					image={require('../../img/thumbnail-frontview.jpg')}
					alt="Denise"
					name="DENISE M. SILVIA"
				/>
				<LawyerItem
					image={require('../../img/thumbnail-happy.jpg')}
					alt="Nancy"
					name="NANCY R. BAKKEN"
				/>
			</div>
		</div>
	);
};

export default RightPanel;
