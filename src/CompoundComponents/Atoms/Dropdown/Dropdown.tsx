import React from 'react';
import Options from './Options/Options';

const Dropdown = ({ children, ...props }) => {
	return (
		<div>
			<select {...props} id="dropdownLib">
				{React.Children.map(children, (child, index) => (
					<option {...child.props}>{child}</option>
				))}
			</select>
		</div>
	);
};

Dropdown.Option = Options;

export default Dropdown;
