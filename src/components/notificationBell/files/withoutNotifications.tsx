import React from 'react';

function WithoutNotifications(selectedText: string) {
	return (
		<div style={{ width: '90%', margin: '0 auto' }}>
			<h2>Sin notificaciones 😥</h2>
			<p>{selectedText}</p>
		</div>
	);
}
export default WithoutNotifications;
