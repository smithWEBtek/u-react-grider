import React from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions';

class UserHeader extends React.Component {

	componentDidMount() {
		this.props.fetchUser(this.props.userId)
	}

	render() {
		const { user } = this.props
		return (
			<div className="header">
				{user ? user.name : null}
			</div>
		);
	}
}

// ownProps: a reference to props being sent into this component
// in this case, userId is passed as a prop from PostList
const mapStateToProps = (state, ownProps) => {
	return {
		user: state.users.find(user => user.id === ownProps.userId)
	}
}

export default connect(mapStateToProps, { fetchUser: fetchUser })(UserHeader);
