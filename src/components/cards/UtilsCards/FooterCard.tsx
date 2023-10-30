import React from 'react';
import { SimpleContainer, ValidationComponent } from '../../Atoms';
import ProgressBar from '../../progressBar';
import { footerCardProps } from './types/types';
import './styles/FooterCard.scss';
import { IconMoreOptions } from '../../task/files';
import { aspectRatio } from '../../../utils/functions/functions';
import { ButtonCompound } from '../../../CompoundComponents';

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
			{progressBar && (
				<ProgressBar
					modo={modo}
					status={statusTask}
					valor={percentTask}
					onClick={onCl_showDetails as any}
					styleContent={{ cursor: 'pointer' }}
				/>
			)}
			<div className="cardUtilFooter__buttons">
				<ButtonCompound
					onClick={onCl_showDetails}
					color="#f1e323"
					border
					style={{ borderRadius: '0 10px 0 10px' }}
				>
					<ButtonCompound.Legend>{legendButton}</ButtonCompound.Legend>
				</ButtonCompound>
				{aspectRatio().tablet && moreOptions && (
					<IconMoreOptions options={options as any} />
				)}
			</div>
		</SimpleContainer>
	);
};

export default FooterCard;
