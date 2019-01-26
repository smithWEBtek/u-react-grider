import React from 'react';
import faker from 'faker';

function Post(props) {

	return (
		<div className="comment" key={props.post.id}>
			<a href="/" className="avatar"><img alt="avatar" src={faker.image.avatar()} /></a>
			<div className="content">
				<a href="/" className="author">{props.post.author}</a>
				<div className="metadata">
					<span className="metadata">{new Date().toDateString()}</span>
				</div>
				<div className="text">{props.post.content}</div>
			</div>
		</div>
	)
}

export default Post;