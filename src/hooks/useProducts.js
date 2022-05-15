import axios from "../utils/axios";

export const useProducts = () => {
  function fetchAllProducts() {
    try {
      return axios.get("https://valiasrcs.com/vApp/wp-json/wp/v2/product");
    } catch (error) {
      return console.log(error);
    }
  }
  return { fetchAllProducts };
};
