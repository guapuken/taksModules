import { useEffect } from 'react';

export function selectRandomText(texts: string[], setSelectedText: any) {
	// const texts = options;
	const randomIndex = Math.floor(Math.random() * texts.length);
	setSelectedText(texts[randomIndex]);

	// useEffect(() => {
	// 	selectRandomText(texts, selectRandomText);
	// }, [setSelectedText]);
}
