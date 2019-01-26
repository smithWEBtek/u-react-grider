import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';

const App = () => {
	window.navigator.geolocation.getCurrentPosition(
		(position) => console.log("your position is: ", position),
		(err) => console.log(err)
	)
	return <div>Hi there</div>
}

ReactDOM.render(
	<div>
		<App />
		<SeasonDisplay />
	</div>,
	document.getElementById('root')
);
