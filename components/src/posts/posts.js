import React from 'react';
import Post from './post';

const Posts = (props) => {
	const posts = props.data.map((post, index) => {
		return (
			<Post post={post} key={index} />
		)
	})

	return (
		<div>
			{posts}
		</div>
	)
}

export default Posts;