import axios from "../utils/axios";

export const usePosts = ()=>{
    function fetchPosts(){
        try{
            return axios.get("wp/v2/posts");
        }catch (error){
            return error;
        }
    }
    return { fetchPosts }
}
