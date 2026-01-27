import { applyMiddleware, compose, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import {reducer} from "./reducer";

const composeEnhancer = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;
const store = legacy_createStore(reducer, composeEnhancer(applyMiddleware(thunk)));
export {store};