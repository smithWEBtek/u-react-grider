// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

// function getButtonText() {
// 	return "Click on me! Today is:  " + new Date().toDateString() + " at " + new Date().toLocaleTimeString();
// }

// function getColor(color) {
// }

// function changeColor() {
// 	myButton.addEventListener('click', function (e) {
// 		e.preventDefault();
// 		debugger;

// 		getColor(this.style.backgroundColor)
// 	})
// }

const App = () => {
	const buttonText = {
		text: 'click it',
		date: new Date().toDateString()
	}

	return (
		<div>
			<label className='label' htmlFor="name">Enter name:</label>
			<br />
			<input id='name' type='text' />
			<br />
			<button style={{ backgroundColor: 'green', color: 'white' }}>{buttonText.text}</button>
			{/* <button style={{ backgroundColor: 'blue', color: 'white' }}>{buttonText.date}</button> */}
			<br />
			<br />
			<div>Hi there!</div>
		</div>
	)
};

// show componnent on screen
ReactDOM.render(<App />, document.querySelector('#root'));
