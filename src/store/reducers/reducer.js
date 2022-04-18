import * as Types from "../types/types";

const initialState = {
  menus: null,
};

export const reducer = (state = initialState, action) => {
  const {type,payload} = action
  switch (type) {
    case Types.MENUS:
      return {
        ...state,
        menus: payload,
      };

    default:
      return state;
  }
};
