import React from 'react';

const ApprovalCard = (props) => {
	console.log("[ApprovalCard] props: ", props);
	console.log("[ApprovalCard] props.children: ", props.children);

	return (
		<div className="ui card">
			<h3>{props.theDate}</h3>
			<div className="content">
				{props.children}
			</div>
			<div className="extra content">
				<div className="ui two buttons">
					<div className="ui basic green button">Approve</div>
					<div className="ui basic red button">Reject</div>
				</div>
			</div>
		</div>
	)
};

export default ApprovalCard;
