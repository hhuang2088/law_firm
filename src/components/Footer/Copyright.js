import React from 'react';
import './style/Copyright.css'

const Copyright = () => {
	return(
		<div id="copyright">
			<div className="ui container">
				<div className="ui grid">
					<div className="row" id="copyright-text">
						<div className="eight wide column centered">
							<i class="facebook icon" />
							<i class="twitter square icon" />
							<i class="pinterest icon" />
							<i class="medium icon" />
						</div>
						<div className="eight wide column" id="copyright-text">
							© COPYRIGHT 2023 MANES WINCHESTER. ALL RIGHTS RESERVED.
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Copyright;
