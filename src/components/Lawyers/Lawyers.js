import React from 'react';
import LeftPanel from './LeftPanel';
import RightPanel from './RightPanel';

const Lawyers = () => {
	return(
		<div className="ui container">
			<div className="ui two column very relaxed grid">
				<div className="six wide column">
					<LeftPanel />
				</div>
				<div className="ten wide column">
					<RightPanel />
				</div>
			</div>
		</div>
	);
};

export default Lawyers;
