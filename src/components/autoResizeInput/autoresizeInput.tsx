import React, { useEffect, useRef, useState } from 'react';
import './autoresizeInput.scss';
import { autoresizeInput } from './types';

//this component allow change the height textarea automatically
const AutoresizeInput = (props: autoresizeInput) => {
	//destructuring properties
	const {
		style,
		onChange,
		initialValue,
		taskType = 'task',
		placeholder,
		tabIndex,
		disabled,
	} = props;

	function taskTypes(type: string) {
		switch (type) {
			case 'principal':
				return 'principalTask';
			case 'task':
				return 'task';
			case 'subtask':
				return 'subTask';
			default:
				return 'subTask';
		}
	}

	//Hooks
	const [value, setValue] = useState(initialValue);
	const textAreaRef = useRef<HTMLTextAreaElement>(null);

	useEffect(() => {
		if (textAreaRef.current) {
			// We need to reset the height momentarily to get the correct scrollHeight for the textarea
			textAreaRef.current.style.height = '0px';
			const scrollHeight = textAreaRef.current.scrollHeight;

			// We then set the height directly, outside of the render loop
			// Trying to set this with state or a ref will product an incorrect value.
			textAreaRef.current.style.height = scrollHeight + 'px';
		}
	}, [value]);

	return (
		<textarea
			ref={textAreaRef}
			disabled={disabled}
			onChange={(e: any) => setValue(e.target?.value)}
			onBlur={(e: any) => (onChange ? onChange(e) : {})}
			tabIndex={tabIndex}
			placeholder={placeholder}
			rows={1}
			value={value}
			className={taskTypes(taskType)}
			style={style}
		/>
	);
};

export default AutoresizeInput;
