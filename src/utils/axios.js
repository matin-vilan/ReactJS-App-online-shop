import Axios from "axios";

const axios = Axios.create({
    baseURL: "https://valiasrcs.com/vApp/wp-json"
})
export default axios;