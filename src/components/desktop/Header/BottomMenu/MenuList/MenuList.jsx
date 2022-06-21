import React, { Fragment, useEffect, useState } from "react";
import MenuItem from "./MenuItem/MenuItem";
import styles from "./MenuList.module.css";
import { useSelector } from "react-redux";
import MenuItemSkeleton from "../../../../global/Skeleton/MenuItemSkeleton/MenuItemSkeleton";
import { Box } from "@chakra-ui/react";

const MenuList = () => {
  const state = useSelector((state) => state.menus);
  const mainMenu = state?.main_menu;
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    state ? setIsLoading(false) : setIsLoading(true);
  }, [mainMenu]);

  return (
    <div className={styles.menuList + " d-flex h-100"}>
      {isLoading && (
        <Fragment>
          <Box
            width={"100%"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <MenuItemSkeleton />
          </Box>
          <Box
            width={"100%"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            mr={"3rem"}
          >
            <MenuItemSkeleton />
          </Box>
        </Fragment>
      )}
      {mainMenu?.map((item) => {
        return (
          <MenuItem
            key={item.id}
            url={item.url}
            mainMenu={item}
            text={item?.title}
            items={item?.children}
          />
        );
      })}
    </div>
  );
};

export default MenuList;
