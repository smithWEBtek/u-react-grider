import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';

class App extends React.Component {
	state = {
		lat: null,
		errorMessage: null
	}

	componentDidMount() {
		console.log("my component was rendered to the screen");
		window.navigator.geolocation.getCurrentPosition(
			position => this.setState({ lat: position.coords.latitude }),
			err => this.setState({ errorMessage: err.message })
		);
	}

	componentDidUpdate() {
		console.log("my component was updated")
	}

	render() {
		console.log("render called: ", new Date());
		if (this.state.errorMessage && !this.state.lat) {
			return <div>Error: {this.state.errorMessage}</div>
		}

		if (!this.state.errorMessage && this.state.lat) {
			return <div>Latitude: {this.state.lat}
				<SeasonDisplay lat={this.state.lat} />
			</div>
		}
		return <div>Loading ...</div>
	}
}

ReactDOM.render(
	<App />,
	document.getElementById('root')
);