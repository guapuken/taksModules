import React from 'react';
import { Modo, onBlurType, taskType } from '../../types';

export interface autoresizeInput {
	style?: React.CSSProperties;
	onChange?: onBlurType;
	taskType?: taskType;
	initialValue?: string;
	placeholder?: string;
	tabIndex?: number;
	disabled?: boolean;
	modo?: Modo;
}
