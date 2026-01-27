import * as types from "./actionTypes";

const prevState = {
	repos: [],
	allrepo: [],
	allLan: [],
	isLoading: false,
	isError: false,
};

const reducer = (state = prevState, action) => {
	const { type, payload } = action;

	switch (type) {
		case types.GET_GIT_REPOS_REQUEST:
			return {
				...state,
				isLoading: true,
			};
		case types.GET_GIT_REPOS_SUCCESS:
			return {
				...state,
				isLoading: false,
				repos: payload,
			};
		case types.GET_GIT_REPOS_FAILURE:
			return {
				...state,
				isLoading: false,
				isError: true,
			};
		case types.GET_ALL_GIT_REPOS_REQUEST:
			return {
				...state,
			};
		case types.GET_ALL_GIT_REPOS_SUCCESS:
			return {
				...state,
				allrepo: payload,
			};
		case types.GET_ALL_GIT_REPOS_FAILURE:
			return {
				...state,
			};
		case types.GET_ALL_LANGUAGE_REQUEST:
			return {
				...state,
			};
		case types.GET_ALL_LANGUAGE_SUCCESS:
			return {
				...state,
				allLan: payload,
			};
		case types.GET_ALL_LANGUAGE_FAILURE:
			return {
				...state,
			};
		default:
			return state;
	}
};

export { reducer };
