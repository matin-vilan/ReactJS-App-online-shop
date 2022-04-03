import axios from "axios";

 const axiosInstanceApi = axios.create({
    baseURL: "https://valiasrcs.com/fa/wp-json/wp/v2/"
})


export default axiosInstanceApi;
