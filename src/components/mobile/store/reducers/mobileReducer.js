import { SHOW_SLIDER_MENU } from "../types/types";

const initialState = {
  showSlider: false,
};

export const mobileReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_SLIDER_MENU:
      return { ...state, showSlider: action.payload };

    default:
      return state;
  }
};
