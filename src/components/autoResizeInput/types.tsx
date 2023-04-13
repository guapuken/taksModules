import React from 'react';
import { onBlurType } from '../../types';

export interface autoresizeInput {
	style?: React.CSSProperties;
	onChange?: onBlurType;
	taskType?: taskType;
	initialValue?: string;
	placeholder?: string;
	tabIndex?: number;
	disabled?: boolean;
}

type taskType = 'principal' | 'task' | 'subtask';
