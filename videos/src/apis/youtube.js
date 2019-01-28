import axios from 'axios';

const KEY = 'AIzaSyDEXyQ2VHn3KPvcgU5mubvOhJsu46Vl-fM'

export default axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3',
	params: {
		part: 'snippet',
		maxResults: 5,
		key: KEY
	}
})