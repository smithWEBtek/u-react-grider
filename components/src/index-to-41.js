import React from 'react';
import ReactDOM from 'react-dom';
// import Posts from './posts/posts'
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
import Message from './Message';

const App = () => {
	return (
		<div className="ui container comments">
			<ApprovalCard theDate={new Date().toDateString()}>
				<div>
					<Message
						header='Attention!'
						text='We just updated our privacy policy to better serve you.' />
				</div>
			</ApprovalCard>
			<ApprovalCard>
				<CommentDetail
					author={faker.name.firstName()}
					avatar={faker.image.avatar()}
					content={faker.lorem.sentence()}
					timeAgo={faker.date.recent().toDateString()}
				/>
			</ApprovalCard>
			<ApprovalCard>
				<CommentDetail
					author={faker.name.firstName()}
					avatar={faker.image.avatar()}
					content={faker.lorem.sentence()}
					timeAgo={faker.date.recent().toDateString()}
				/>
			</ApprovalCard>
			<ApprovalCard>
				<CommentDetail
					author={faker.name.firstName()}
					avatar={faker.image.avatar()}
					content='no comment'
					timeAgo={faker.date.recent().toDateString()}
				/>
			</ApprovalCard>
		</div>
	)
};

ReactDOM.render(<App />, document.getElementById('root'));