import axios from 'axios';

const BASE_URL = "http://carbonoff.online/";

const login = (identifier, password) => {
	return axios.post(BASE_URL+"api/user/login/", {
		identifier,
		password
	})
}

module.exports = {
	login
}
