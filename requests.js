import axios from 'axios';

const BASE_URL = "http://ec2-52-15-44-6.us-east-2.compute.amazonaws.com/";

const login = (identifier, password) => {
	return axios.post(BASE_URL+"api/user/login/", {
		identifier,
		password
	})
}

module.exports = {
	login
}
