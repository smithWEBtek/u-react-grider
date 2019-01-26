import React from 'react';

const Message = (props) => {

	console.log("[Message.js] props: ", props);

	return (
		<div>
			<h3>{props.header}</h3>
			<p>{props.text}</p>
		</div>
	)
}

export default Message;