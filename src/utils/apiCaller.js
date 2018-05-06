import axios from 'axios';
// import API_CONFIG from './../constant/config.js';
export default function callAPI(endpoint,method,params){
	return axios({
		method:method,
		url: "http://5aee5abcedce42001455bb08.mockapi.io/api" + '/' + endpoint,
		data:params
		});
}