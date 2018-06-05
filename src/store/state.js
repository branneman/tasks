import { STORAGE_KEY } from "./mutations";
import defaultState from "./state.default.js";

const storedState = window.localStorage.getItem(STORAGE_KEY);

// Initialize state from localStorage or default hardcoded
const state = {};
if (storedState) {
  Object.assign(state, JSON.parse(storedState));
} else {
  Object.assign(state, defaultState);
}

export default state;
