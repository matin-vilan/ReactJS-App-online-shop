import * as Types from "../types/types";

const initialState = {
  menus: null,
  posts: null,
};

export const reducer = (state = initialState, action) => {
  const {type,payload} = action
  switch (type) {
    case Types.MENUS:
      return {
        ...state,
        menus: payload,
      };
    case Types.POSTS:
      return{
        ...state , posts:payload
      }

    default:
      return state;
  }
};
