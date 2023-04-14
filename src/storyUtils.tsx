// import React from 'react';

// modos
export function modo() {
	return {
		control: {
			type: 'select',
			options: ['Light', 'Dark'],
		},
	};
}

// texts
export function text() {
	return {
		control: 'text',
	};
}

// booleans
export function boolean() {
	return {
		control: 'boolean',
	};
}

// objects
export function object() {
	return {
		control: 'object',
	};
}

// sizes
export function sizeBtns() {
	return {
		control: {
			options: ['small', 'medium', 'large'],
			type: 'select',
		},
	};
}

//colors
export function color() {
	return {
		control: 'color',
	};
}

// functions
export function functions() {
	return {
		control: 'function',
	};
}

// files without bg
export function filesNoBG() {
	return {
		control: {
			type: 'file',
			accept: '.svg , .png',
		},
	};
}
