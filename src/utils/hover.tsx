export const Hover = (setMouseEnter: any) => {
	const enter = () => {
		setMouseEnter(true);
	};
	const exit = () => {
		setMouseEnter(false);
	};
	return { enter, exit };
};
