import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Home/Home.js';
import About from './About/About';
import Practices from './Practices/Practices';
import Lawyers from './Lawyers/Lawyers';
import News from './News/News';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';

class App extends React.Component {
	render() {
		return(
			<div style={{ backgroundColor: '#E2E2E2' }}>
				<BrowserRouter>
					<NavBar />
					<div>
						<Route path="/" exact component={Home} />
						<Route path="/about" component={About} />
						<Route path="/practices" component={Practices} />
						<Route path="/lawyers" component={Lawyers} />
						<Route path="/news" component={News} />
						<Route path="/contact" component={Contact} />
					</div>
					<Footer />
				</BrowserRouter>
			</div>
		);
	};
};

export default App;
