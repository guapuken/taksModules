import React from 'react';
import { SimpleContainer, Texts, Title } from '../../Atoms';
import { CircularProgressBar } from '../../../components';

const CardCampaign = ({ modo }) => {
	return (
		<SimpleContainer className={`ctn_CCampaign ${modo}`}>
			<SimpleContainer className="header_CCampaign">
				<Title modo="Light">1285-Uber Eats-Noviembre</Title>
			</SimpleContainer>
			<SimpleContainer style={{ display: 'flex', gap: '20px' }}>
				<SimpleContainer>
					<CircularProgressBar percentTask={75} statusTask={'onTime'} />
					<Texts modo={modo}>Fijos</Texts>
				</SimpleContainer>
				<SimpleContainer>
					<CircularProgressBar percentTask={10} statusTask={'onTime'} />
					<Texts modo={modo}>Urbanos</Texts>
				</SimpleContainer>
				<SimpleContainer>
					<CircularProgressBar percentTask={89} statusTask={'onTime'} />
					<Texts modo={modo}>Indoors</Texts>
				</SimpleContainer>
				<SimpleContainer>
					<CircularProgressBar percentTask={100} statusTask={'onTime'} />
					<Texts modo={modo}>Vallas M.</Texts>
				</SimpleContainer>
			</SimpleContainer>
		</SimpleContainer>
	);
};

export default CardCampaign;
