import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';
import SongDetail from './SongDetail';

class SongList extends Component {

	render() {
		let renderedSongs = this.props.songs.map(song => {
			return (
				<div className="ui divided list" key={song.title}>
					<div className="item" key={song.title}>
						<div className="right floated content">
							<button
								className="ui button primary"
								onClick={() => this.props.selectSong(song)}
							>
								Select
            </button>
						</div>
						<div className="content">{song.title}</div>
					</div>
				</div>
			)
		})

		return (
			<div>
				{renderedSongs}
				<SongDetail />
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		songs: state.songs,
		selectedSong: state.selectedSong
	};
};

export default connect(mapStateToProps, { selectSong })(SongList);
