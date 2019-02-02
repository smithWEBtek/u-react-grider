import React from 'react';
import { connect } from 'react-redux';

const SongDetail = (props) => {

	let title = 'no title selected'

	if (props.selectedSong) {
		title = props.selectedSong.title
	}

	return (
		<div>
			<h2>{title}</h2>
		</div>
	)
}

const mapStateToProps = state => {
	return {
		selectedSong: state.selectedSong
	}
}

export default connect(mapStateToProps)(SongDetail)