import axios from "axios";

 const axiosInstanceApi = axios.create({
    baseURL: "https://valiasrcs.com/fa/wp-json/wp/v2/"
})

const axiosInstanceApiMenu = axios.create({
    baseURL: "https://valiasrcs.com/vApp/wp-json/wp-api-menus/v2/menus/"
})


export default axiosInstanceApi;
