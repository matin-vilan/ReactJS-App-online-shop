import * as Types from "../types/types"

export const getMenus = (menus) => {
  return {
    type: Types.MENUS,
    payload: menus,
  };
};