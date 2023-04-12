import React from 'react';
import { onBlurType } from '../../types';

export interface autoresizeInput {
	style?: React.CSSProperties;
	onBlur?: onBlurType;
	initialValue?: string;
	taskType?: taskType;
	placeholder?: string;
	tabIndex?: number;
	disabled?: boolean;
}

type taskType = 'principal' | 'task' | 'subtask';
