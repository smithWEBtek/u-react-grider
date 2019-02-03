import React from 'react';
import { connect } from 'react-redux';
import { fetchPostsAndUsers } from '../actions';
import UserHeader from './UserHeader';

class PostList extends React.Component {

	componentDidMount() {
		this.props.fetchPostsAndUsers()
	}

	renderList() {
		if (this.props.posts.data) {
			return (
				this.props.posts.data.map(post => {
					return (
						<div className="item" key={post.id}>
							<i className="large middle aligned icon user" />
							<div className="content">
								<div className="description">
									<h4>{post.title}</h4>
									<p>{post.body}</p>
								</div>
								<UserHeader userId={post.userId} />
							</div>
						</div>
					)
				})
			);
		} else {
			return <div>"We have no posts yet".</div>
		}
	}

	render() {
		return (
			<div className="ui relaxed divided list">{this.renderList()}</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		posts: state.posts
	}
}

export default connect(mapStateToProps, { fetchPostsAndUsers })(PostList);
