// Action creator
// named export, has { } in the other files where it is imported
// using export to create named export

export const selectSong = song => {
	// Return an action
	// console.log("[actions/index.js] selectSong: ", song);
	return {
		type: 'SONG_SELECTED',
		payload: song
	};
};

