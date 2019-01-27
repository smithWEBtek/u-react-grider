import React from 'react';
import './SeasonDisplay.css';

const seasonConfig = {
	summer: { text: "Let's hit the beach!", iconName: 'sun' },
	winter: { text: "Burr, it is chilly!", iconName: 'snowflake' },
	season: ''
}

const setSeason = (lat, month) => {
	if (month > 2 && month < 9) {
		seasonConfig['season'] = lat > 0 ? 'summer' : 'winter';
	} else {
		seasonConfig['season'] = lat > 0 ? 'winter' : 'summer';
	}
};

const SeasonDisplay = (props) => {
	setSeason(props.lat, new Date().getMonth());
	const { text, iconName, season } = seasonConfig[season]

	return (
		<div className={`season-display ${season}`}>
			<i className={`${iconName} icon icon-left massive`}></i>
			<h1>{text}</h1>
			<i className={`${iconName} icon icon-right massive`}></i>
		</div>
	)
}

export default SeasonDisplay;