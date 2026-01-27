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

export {getRepos};
