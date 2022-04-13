import axiosInstanceApi from "../../utils/axiosInstance/axiosInstance";
import { MENUS, MENUS_ITEM, SHOW_SLIDER } from "../types/types";

export const menus = (menus) => {
  return {
    type: MENUS,
    payload: menus,
  };
};

export const menusItem = () => {
  return {
    type: MENUS_ITEM,
  };
};

export const showSliderMenu = (show) => {
  return {
    type: SHOW_SLIDER,
    payload: show,
  };
};

export const getMenusRequestServer = () => {
  return async (dispatch) => {
    axiosInstanceApi()
      .get("/")
      .then((res) => {
        console.log("res", res);
        dispatch(menus(res.data));
      })
      .catch((err) => {
        dispatch(menus(err.message));
      });
  };
};
