import { axiosInstanceApiMenu } from "../axiosInstance/axiosInstance";

export const getMenusTitle = async () => {
  await axiosInstanceApiMenu()
    .get("menus")
    .then((res) => {
      const data = res.data;
    //   console.log(data);
      return data;
    })
    .catch((err) => err.message);
};
