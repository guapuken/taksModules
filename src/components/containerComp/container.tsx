import React, { CSSProperties } from 'react';

// importación de estilos
import '../../global.scss';
import { Modo, onClickType } from '../../types';
import Button from '../button';
import './container.scss';
import { Menu } from './files';

type header = {
	moduleName?: string;
	legendBtnModule?: string;
	onClickBtnModule?: onClickType;
};
interface onClicks {
	createTask?: onClickType;
	createTemplate?: onClickType;
	createTeam?: onClickType;
	createProject?: onClickType;
	inicio?: onClickType;
	mannageTask?: onClickType;
	mannageTemplates?: onClickType;
	mannageTeams?: onClickType;
	mannageProjects?: onClickType;
	projectsStatus?: onClickType;
}
interface menuActions {
	onClick: onClicks;
	modo: Modo;
}
export interface Containerprops {
	children?: any;
	AsideContent?: any;
	FooterContent?: any;
	header?: header;
	onClick?: onClicks;
	style?: CSSProperties;
	headerStyle?: CSSProperties;
	contentStyle?: CSSProperties;
	footerStyle?: CSSProperties;
	modo?: Modo;
}

const Container = (props: Containerprops) => {
	const {
		children,
		AsideContent,
		header,
		FooterContent,
		onClick,
		style,
		headerStyle,
		contentStyle,
		footerStyle,
		modo = 'Light',
	} = props;
	return (
		<div className={`ctn${modo}_CtnC`} style={style}>
			<div className={'menu'}>
				<Menu modo={modo} onClick={onClick} />
			</div>
			{AsideContent && <div className={'asideCtn'}>{AsideContent}</div>}
			<div className={`ctnChild${AsideContent ? 'Asd' : ''}${FooterContent ? 'Ftr' : ''}`}>
				{header && (
					<div className={'header'} style={headerStyle}>
						<h2 style={{ marginRight: '10px' }}>{header.moduleName}</h2>
						<Button
							legend={header.legendBtnModule}
							primary
							onClick={header.onClickBtnModule}
						/>
					</div>
				)}
				<div className="children" style={contentStyle}>
					{children}
				</div>
				{FooterContent && (
					<div style={footerStyle} className={'footer'}>
						{FooterContent}
					</div>
				)}
			</div>
		</div>
	);
};

export default Container;
