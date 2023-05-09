import React from 'react';
import { Modo, onBlurType, onChangeType, taskType } from '../../../types';

export interface autoresizeInput {
	id: string;
	style?: React.CSSProperties;
	// onCh: onBlurType;
	onCh: onChangeType;
	taskType?: taskType;
	initialValue?: string;
	placeholder?: string;
	tabIndex?: number;
	disabled?: boolean;
	modo?: Modo;
}
