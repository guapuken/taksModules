import React from 'react';
import { comments, commentsComponent } from '../types';

const Comments = (props: commentsComponent) => {
	const { comments } = props;
	return (
		<>
			{comments &&
				comments.map((comment: comments) => {
					console.log(comment);
					return (
						<div
							className={`comments${comment.personalMsn ? 'Personal' : ''}`}
							key={`${comment.id}`}
						>
							<p className="user">{comment.user}</p>
							<p className="comment">{comment.comment}</p>
							<p className="dateAndTime">{comment.dateAndTime}</p>
						</div>
					);
				})}
		</>
	);
};

export default Comments;
