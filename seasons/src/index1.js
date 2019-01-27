import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
	constructor(props) {
		super(props); // to include all functions of Commponent sub class
		// only time we directly assign state
		this.state = {
			lat: null,
			errorMessage: null
		}

		window.navigator.geolocation.getCurrentPosition(
			// first callback function
			position => {
				this.setState({ lat: position.coords.latitude })
				console.log(position.coords.latitude)
			},
			// second callback function
			err => {
				this.setState({ errorMessage: err.message })
			}
		);
	}

	render() {
		if (this.state.errorMessage && !this.state.lat) {
			return <div>Error: {this.state.errorMessage}</div>
		}

		if (!this.state.errorMessage && this.state.lat) {
			return <div>Latitude: {this.state.lat}</div>
		}
		return <div>Loading ...</div>
	}
}

ReactDOM.render(
	<App />,
	document.getElementById('root')
);
