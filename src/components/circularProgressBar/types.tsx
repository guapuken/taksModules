import { statusTask } from '../../types';

export interface circularProgressBar {
	percentTask?: number;
	strokeColor?: string;
	strokeWidth?: number;
	trailStrokeColor?: string;
	size?: number;
	statusTask?: statusTask;
}
