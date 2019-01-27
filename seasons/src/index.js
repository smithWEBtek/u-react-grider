import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component {
	state = {
		lat: null,
		lng: null,
		errorMessage: null
	}

	componentDidMount() {
		console.log("my component was rendered to the screen");
		window.navigator.geolocation.getCurrentPosition(
			position => this.setState({ lat: position.coords.latitude, lng: position.coords.longitude }),
			err => this.setState({ errorMessage: err.message })
		);
	}

	componentDidUpdate() {
		console.log("my component was updated")
	}

	// helper method
	renderContent() {
		if (this.state.errorMessage && !this.state.lat) {
			return <div>Error: {this.state.errorMessage}</div>
		}

		if (!this.state.errorMessage && this.state.lat) {
			return <SeasonDisplay lat={this.state.lat} lng={this.state.lng} />
		}

		return <Spinner message="Please allow location to customize the experience. Your information will not be shared or stored." />
	};

	render() {
		return (
			<div style={{ border: '5px solid red' }}>
				{this.renderContent()}
			</div>
		)
	}
}

ReactDOM.render(
	<App />,
	document.getElementById('root')
);
