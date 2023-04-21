import React from 'react';
import { Modo, onBlurType, taskType } from '../../types';

export interface autoresizeInput {
	id: string;
	style?: React.CSSProperties;
	// onChange?: onBlurType;
	onCh_resizeInpt?: onBlurType;
	taskType?: taskType;
	initialValue?: string;
	placeholder?: string;
	tabIndex?: number;
	disabled?: boolean;
	modo?: Modo;
}
