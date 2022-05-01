import axios from "../utils/axios";

export const usePost = () => {
  function getPost({queryKey}) {
    const id = queryKey[1];
    return axios.get(`wp/v2/posts/${id}`);
  }
  return { getPost };
};
