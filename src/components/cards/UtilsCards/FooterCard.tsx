import React from 'react';
import { SimpleContainer, ValidationComponent } from '../../Atoms';
import ProgressBar from '../../progressBar';
import { footerCardProps } from './types/types';
import './styles/FooterCard.scss';
import { IconMoreOptions } from '../../task/files';
import { aspectRatio } from '../../../utils/functions/functions';

const FooterCard = ({
	modo,
	statusTask,
	percentTask,
	onCl_showDetails,
	legendButton,
	moreOptions,
	options,
	progressBar,
}: footerCardProps) => {
	return (
		<SimpleContainer
			className="cardUtilFooter"
			labels={{
				'progress-bar': progressBar ? 'bar' : 'noBar',
			}}
		>
			<ValidationComponent validate={progressBar}>
				<ProgressBar
					modo={modo}
					status={statusTask}
					valor={percentTask}
					onClick={onCl_showDetails as any}
					styleContent={{ cursor: 'pointer' }}
				/>
			</ValidationComponent>
			<SimpleContainer className="cardUtilFooter__buttons">
				<button className="cardUtilFooter__buttons-legend" onClick={onCl_showDetails}>
					{legendButton}
				</button>
				<ValidationComponent validate={aspectRatio().tablet && moreOptions}>
					<IconMoreOptions options={options as any} />
				</ValidationComponent>
			</SimpleContainer>
		</SimpleContainer>
	);
};

export default FooterCard;
