import React from 'react';
//
import { itemComments } from '../types';
// estilos
import '../modalTaskWithComents.scss';
import { CommentTask } from '.';
import { Msns } from '../../../components';

const Comentarios = (props: itemComments) => {
	const {
		messages,
		onCl_addComment,
		onCh_addFile,
		showTasks,
		onCh_comment,
		modo,
		onCh_dropdown,
		onCl_approve,
		onCl_confirm,
		onCl_reWork,
		onCl_close,
		reasonsToWorkAgain,
		valueComment,
		onCl_abort,
		onCl_edit,
	} = props;
	return (
		<div className={`ctnComents${showTasks ? 'Full' : ''}_TWCC`} style={{ overflow: 'hidden' }}>
			<h5 className="ttlComents" style={{ fontWeight: 'lighter', marginBottom: '20px' }}>
				Comentarios
			</h5>
			<Msns
				messages={messages}
				// height={`calc(100% - ${heightComments}px)`}
				modo={modo}
			/>
			<CommentTask
				onCl_abort={onCl_abort}
				onCl_edit={onCl_edit}
				valueComment={valueComment}
				onCl_close={onCl_close}
				reasonsToWorkAgain={reasonsToWorkAgain}
				modo={modo}
				onCh_dropdown={onCh_dropdown}
				onCl_approve={onCl_approve}
				onCl_confirm={onCl_confirm}
				onCl_reWork={onCl_reWork}
				onCh_addFile={onCh_addFile}
				onCl_addComment={onCl_addComment}
				onCh_comment={onCh_comment}
			/>
		</div>
	);
};

export default Comentarios;
