import React from 'react';
import ReactDOM from 'react-dom';
import Segment from './Segment';

const App = () => {
	return (
		<div>
			<Segment>
				<div className="ui icon header">
					<i className="pdf file outline icon"></i>
					No documents are listed for this customer.
				</div>
				<div className="ui primary button">Add Document</div>
			</Segment>

			<Segment>
				<h4 className="ui header">For Your Information</h4>
				<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium pariatur nisi labore earum qui odit maxime, dolor ipsum impedit consectetur unde hic libero! Alias, quo et? Nisi excepturi possimus.</p>
			</Segment>
		</div>
	)
};

ReactDOM.render(<App />, document.getElementById('root'));