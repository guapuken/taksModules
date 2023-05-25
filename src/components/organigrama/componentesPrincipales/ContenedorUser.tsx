import React from 'react';
import { Avatar, SimpleContainer, Texts, Title, ValidationComponent } from '../../Atoms';

const ContenedorUser = ({ userName = 'No Hay', avatar, role = 'Indefinido', boss, lowLevel }) => {
	return (
		<SimpleContainer
			style={{
				display: 'flex',
				flexDirection: 'column',
				gap: '10px',
				alignItems: 'center',
			}}
		>
			<ValidationComponent validate={boss}>
				<Avatar
					modo={'' as any}
					userName={userName}
					avatar={avatar}
					style={{ boxShadow: '0 0 10px #00000075' }}
				/>
			</ValidationComponent>
			<ValidationComponent validate={!lowLevel}>
				<SimpleContainer
					style={{
						display: 'flex',
						alignItems: 'center',
						gap: '10px',
						boxShadow: 'inset 0 0 0 1px #dedede, 0 0 10px #dedede',
						padding: '10px 20px 10px 20px',
						borderRadius: '100px',
					}}
				>
					<ValidationComponent validate={!boss}>
						<Avatar
							modo={'' as any}
							userName={userName}
							avatar={avatar}
							style={{ boxShadow: '0 0 10px #00000075' }}
						/>
					</ValidationComponent>
					<SimpleContainer style={{ textAlign: 'center' }}>
						<Title modo={'' as any}>{userName}</Title>
						<Texts modo={'' as any}>{role}</Texts>
					</SimpleContainer>
				</SimpleContainer>
			</ValidationComponent>
			<ValidationComponent validate={lowLevel}>
				<Avatar
					modo={'' as any}
					userName={userName}
					avatar={avatar}
					style={{ boxShadow: '0 0 10px #00000075' }}
				/>
				<Title
					modo={'' as any}
					style={{ marginBlock: '0', padding: '0', marginTop: '-10px' }}
				>
					{userName}
				</Title>
				<Texts modo={'' as any} style={{ marginBlock: '0', marginTop: '-10px' }}>
					{role}
				</Texts>
			</ValidationComponent>
		</SimpleContainer>
	);
};

export default ContenedorUser;
