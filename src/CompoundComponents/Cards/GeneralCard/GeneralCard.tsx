import React, { useEffect, useState } from 'react';
import Button from '../../Button/Button';

const GeneralCard = ({ isCollapsable, children, ...props }: any) => {
	const [stateCollapsed, setStateCollapsed] = useState(props?.isCollapsed);

	useEffect(() => {
		setStateCollapsed(props?.isCollapsed);
	}, [props?.isCollapsed]);

	return (
		<div
			{...props}
			style={{
				height: isCollapsable && stateCollapsed ? props?.heightOpen : props?.height,
				width: isCollapsable && stateCollapsed ? props?.widthOpen : props?.width,
				transition: 'width .5s ease-in-out',
				boxShadow: '0 0 20px #00000030',
				position: 'relative',
				borderRadius: '15px',

				...props?.style,
			}}
		>
			{isCollapsable && (
				<Button
					style={{
						position: 'absolute',
						top: '50%',
						right: '-15px',
						transform: `translate(0, -50%) rotate(${
							!stateCollapsed ? '0deg' : '180deg'
						})`,
						background: '#fff',
						padding: '0',
						margin: '0',
						height: '30',
						width: '30',
					}}
					onClick={() => {
						setStateCollapsed(!stateCollapsed);
						if (props?.onClickCollapse) props?.onClickCollapse();
					}}
				>
					<Button.Icon size={30}>
						https://static.thenounproject.com/png/1809986-200.png
					</Button.Icon>
				</Button>
			)}
			<div style={{ overflow: 'hidden' }}>{children}</div>
		</div>
	);
};

export default GeneralCard;
