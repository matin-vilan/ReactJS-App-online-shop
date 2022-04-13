import { MENUS, SHOW_SLIDER } from "../types/types";

const initialState = {
  menus: [],
  showSlider: [false],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case MENUS:
      return { ...state, menus: action.payload };

    case SHOW_SLIDER:
      return { ...state, showSlider: action.payload };

    default:
      break;
  }
};
