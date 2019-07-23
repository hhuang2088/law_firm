import React from 'react';
import './style/Contact.css';

const Contact = () => {
	return(
		<div id="contact">
			<div className="ui grid container">
				<div className="row centered">
					<div className="five wide column contact-card bordered">
						<h5>LATEST NEWS</h5>
						<p>
							This website template has been designed by Free Website Templates
							for you, for free. You can replace all this text with your own
							text. You can remove any link.
						</p>
					</div>
					<div className="six wide column contact-card bordered">
						<h5>CONTACT US</h5>
						<p>
						ADDRESS: the address city, state 1111<br />
						PHONE: (+20) 000 222 999<br />
						EMAIL: info@freewebsitetemplates.com<br />
						</p>
					</div>
					<div className="five wide column contact-card">
						<h5>SEND US A MESSAGE</h5>
						<p>
							If you're having problems editing this website template,
							then don't hesitate to ask for help on the Forums.
						</p>
						<button className="ui grey button">CLICK TO SEND US AN EMAIL</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
