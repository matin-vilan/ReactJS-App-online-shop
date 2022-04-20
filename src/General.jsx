import React, { useEffect } from "react";
import { useMenu } from "./hooks/useMenu";
import { useDispatch, useSelector } from "react-redux";
import { getMenus, getPosts } from "./store/actions/actions";
import { usePosts } from "./hooks/usePosts";

const General = ({ children }) => {
  const dispatch = useDispatch();
  const { fetchMenus, fetchMenusItem } = useMenu();
  const { fetchPosts } = usePosts();

  const fetchAllMenus = async () => {
    const { data } = await fetchMenus();
    let menus =
      data?.filter((d) => d.name === "categories" || d.name === "main_menu") ||
      [];
    menus = menus?.map((m) => m.ID);
    const _menus = {};
    for await (const menu of menus) {
      const { data } = await fetchMenusItem(menu);
      _menus[data?.name] = data?.items;
    }
    dispatch(getMenus(_menus));
  };

  const fetchAllPosts = async () => {
    const { data } = await fetchPosts();
    dispatch(getPosts(data))
  };

  useEffect(() => {
    fetchAllMenus();
    fetchAllPosts();
  }, []);

  return <>{children}</>;
};

export default React.memo(General);
