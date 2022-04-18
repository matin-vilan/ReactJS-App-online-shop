import React, { useEffect, useState } from "react";
import { useMenu } from "./hooks/useMenu";
import { useDispatch, useSelector } from "react-redux";
import { getMenus } from './store/actions/actions';

const General = ({ children }) => {
  const dispatch = useDispatch();
  const { fetchMenus,fetchMenusItem } = useMenu();
  const state = useSelector(state=>state);

  const fetchAllMenus = async () => {
    const { data } = await fetchMenus();
    let menus = data?.filter(d=>d.name==='categories' || d.name==='main_menu') || []
    menus = menus?.map(m=>m.ID)
    const _menus = {};
    for await (const menu of menus){
      const {data} = await fetchMenusItem(menu)
      _menus[data?.name] = data?.items
    }
    dispatch(getMenus(_menus));
  };

  useEffect(() => {
    fetchAllMenus();
  }, []);
 
  // console.log(redux, "redux");

  return <>{children}</>;
};

export default React.memo(General);
