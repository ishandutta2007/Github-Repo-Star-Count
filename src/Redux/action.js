import axios from "axios";
import * as types from "./actionTypes";

const getRepos = (page, lan) => (dispatch) => {
	dispatch({ type: types.GET_GIT_REPOS_REQUEST });
	return axios
		.get(
			`https://api.github.com/search/repositories?q=all+language:${lan}&sort=stars&order=desc&page=${page}&per_page=40`,
		)
		.then((res) => {
			dispatch({ type: types.GET_GIT_REPOS_SUCCESS, payload: res.data.items });
			localStorage.setItem("total", res.data.total_count);
		})
		.then((err) => {
			dispatch({ type: types.GET_GIT_REPOS_FAILURE, payload: err });
		});
};

const getAllLang = () => (dispatch) => {
	dispatch({ type: types.GET_ALL_LANGUAGE_REQUEST });
	return axios
		.get(
			`https://s3.us-west-2.amazonaws.com/secure.notion-static.com/a3830751-f16d-469b-8dc6-02c0948101e9/languages.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230308T023537Z&X-Amz-Expires=86400&X-Amz-Signature=276baa861afe3d4ade5f8b16c2bfc56e36be903c238449172796e30769026765&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22languages.json%22&x-id=GetObject`,
		)
		.then((res) => {
			dispatch({ type: types.GET_ALL_LANGUAGE_SUCCESS, payload: res.data });
		})
		.then((err) => {
			dispatch({ type: types.GET_ALL_LANGUAGE_FAILURE, payload: err });
		});
};

export { getRepos, getAllLang };
