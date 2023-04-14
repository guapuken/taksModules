// ---------------------------------------------------------------------------------------------------------
//      basicos
// ---------------------------------------------------------------------------------------------------------
// texts
export function text() {
	return {
		control: 'text',
	};
}
// numbers
export function number() {
	return {
		control: 'number',
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
// ---------------------------------------------------------------------------------------------------------
//      exclusivos del proyecto
// ---------------------------------------------------------------------------------------------------------
// modos
export function modo() {
	return {
		control: {
			type: 'select',
			options: ['Light', 'Dark'],
		},
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
// types tasks input resize
export function taskType() {
	return {
		control: {
			type: 'select',
			options: ['principal', 'task', 'subtask'],
		},
	};
}
