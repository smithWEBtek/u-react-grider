import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.unsplash.com',
	headers: {
		Authorization: 'Client-ID 8773bf80c1992cc46ffd5e96f1e0c79906e45b82ad4988357f2965a0a166560c'
	}
}); 