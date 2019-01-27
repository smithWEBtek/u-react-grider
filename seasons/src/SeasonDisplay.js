import React from 'react';
import './SeasonDisplay.css';

// helper config function
const seasonConfig = {
	summer: { message: "Let's hit the local beach!", iconName: 'sun' },
	winter: { message: "Burr, it is chilly!", iconName: 'snowflake' },
	season: '',
	lat: null,
	lng: null
}

// helper function
const setSeason = (lat, lng, month) => {
	seasonConfig.lat = lat
	seasonConfig.lng = lng
	if (month > 2 && month < 9) {
		seasonConfig['season'] = lat > 0 ? 'summer' : 'winter';
	} else {
		seasonConfig['season'] = lat > 0 ? 'winter' : 'summer';
	}
};

// the actual component (conventionally at the bottom of the file)
const SeasonDisplay = (props) => {
	setSeason(props.lat, props.lng, new Date().getMonth());
	const season = seasonConfig.season
	const { iconName } = seasonConfig[season]
	const { lat, lng } = seasonConfig

	return (
		<div className={`season-display ${season}`}>
			<i className={`${iconName} icon icon-left massive`}></i>
			<p>Your coordinates are: {lat}, {lng}</p>
			<h1>{seasonConfig[season].message}</h1><br />
			<i className={`${iconName} icon icon-right massive`}></i>
		</div>
	)
}

export default SeasonDisplay;