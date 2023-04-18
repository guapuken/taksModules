import React, { useEffect, useState } from 'react';

export function useTimeCounter(minutes: number, stopAnimation: boolean) {
	const [startingValue, setStartingValue] = useState(2);
	const endingValue = 0.5;

	const interval = (startingValue - endingValue) / (minutes * 60);

	const [timeCounter, setTimeCounter] = useState(startingValue);

	useEffect(() => {
		const timer = setInterval(() => {
			if (timeCounter <= endingValue) {
				if (stopAnimation) {
					setTimeCounter(2);
				}
				setTimeCounter(0.5);
			} else {
				setTimeCounter((prevCounter) => prevCounter - interval);
			}
		}, 1000);
		return () => {
			clearInterval(timer);
		};
	}, [interval, timeCounter]);

	return timeCounter;
}
