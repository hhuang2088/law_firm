import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';

const wrapper = shallow(<App />);

describe('the App Component', () => {
	it('has two div', () => {
		expect(wrapper.find('div').length).toEqual(2);
	});

	it('has a BrowserRouter component', () => {
		expect(wrapper.find('BrowserRouter').length).toEqual(1);
	});

	it('has six Route components', () => {
		expect(wrapper.find('Route').length).toEqual(6);
	});
});
