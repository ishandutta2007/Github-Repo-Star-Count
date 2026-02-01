import axios from "axios";
import * as types from "./actionTypes";

const getRepos = (page, lan) => (dispatch) => {
	dispatch({ type: types.GET_GIT_REPOS_REQUEST });
	const searchQuery = lan ? `all+language:${lan}` : `stars`; // Default to 'stars' if no language is specified
	return axios
		.get(
			`https://api.github.com/search/repositories?q=${searchQuery}&sort=stars&order=desc&page=${page}&per_page=60`,
		)
		.then((res) => {
			dispatch({ type: types.GET_GIT_REPOS_SUCCESS, payload: res.data.items });
			localStorage.setItem("total", res.data.total_count);
		})
		.then((err) => {
			dispatch({ type: types.GET_GIT_REPOS_FAILURE, payload: err });
		});
};

export { getRepos };
