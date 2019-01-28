import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
	state = { term: '' }

	onFormSubmit = (event) => {
		event.preventDefault()
		console.log("[SearchBar][onFormSubmit]this.state.term: ", this.state.term);
		this.props.onSubmit(this.state.term)
	}

	render() {
		return (
			<div className="ui segment">
				<form onSubmit={this.onFormSubmit} className="ui form">
					{/* <form onSubmit={(event) => this.onFormSubmit(event)} className="ui form"> */}
					<div className="field">
						<label htmlFor="image-search">Image Search</label>
						<input
							type="text"
							value={this.state.term}
							onChange={(e) => this.setState({ term: e.target.value })}
						/>
					</div>
				</form>
			</div>
		);
	}



}

export default SearchBar;