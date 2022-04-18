import axios from "../utils/axios";

export const useMenu = () => {
  function fetchMenus() {
    try {
      return axios.get("/wp-api-menus/v2/menus/");
    } catch (error) {
      return error;
    }
  }

  function fetchMenusItem(id) {
    try {
      return axios.get(`/wp-api-menus/v2/menus/${id}`);
    } catch (error) {
      return error;
    }
  }
  return { fetchMenus , fetchMenusItem };
};
