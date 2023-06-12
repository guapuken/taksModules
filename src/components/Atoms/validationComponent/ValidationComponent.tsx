import React from 'react';

const ValidationComponent = ({ validate, children }: any) => {
	return validate && children;
};

export default ValidationComponent;
