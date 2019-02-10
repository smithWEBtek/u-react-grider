import React from 'react';
import { connect } from 'react-redux';

class UserHeader extends React.Component {
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
// and we now only pass in a single 'user' named 'user' { user }
const mapStateToProps = (state, ownProps) => {
	return {
		user: state.users.find(user => user.id === ownProps.userId)
	}
}

export default connect(mapStateToProps)(UserHeader);
