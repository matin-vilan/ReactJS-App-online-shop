import { createStore } from "redux";
import { mobileReducer } from '../reducers/mobileReducer';

export const mobileStore = createStore(mobileReducer)