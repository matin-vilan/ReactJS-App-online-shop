import axios from "axios";

const axiosInstanceApi = () => {
    return axios.create({
        baseURL: "https://valiasrcs.com/fa/wp-json/wp/v2/"
    })
}

export const axiosInstanceApiMenu = ()=>{
    return axios.create({
        baseURL:"https://valiasrcs.com/vApp/wp-json/wp-api-menus/v2/menus"
    })
}

export default axiosInstanceApi;



