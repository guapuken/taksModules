import React from 'react';
import Textos from '../../../Atoms/Textos/Textos';

const Header = ({ children, ...props }) => {
	return <div {...props}>{children}</div>;
};

const Title = ({ children, ...props }) => (
	<Textos>
		<Textos.Title {...props} tipo="h4">
			{children}
		</Textos.Title>
	</Textos>
);

Header.Title = Title;

export default Header;
