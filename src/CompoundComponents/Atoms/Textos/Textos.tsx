import React from 'react';
import SimpleText from './Simple/SimpleText';
import Titles from './Titles/Titles';

const Texto = ({ children, ...props }) => {
	return <>{children}</>;
};

Texto.Simple = SimpleText;
Texto.Title = Titles;

export default Texto;
