import { useState, useEffect } from "react";

import { MENU_API } from "../constants";

const useMenuData = (resId) => {
  const [menuData, setMenuData] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    try {
      const data = await fetch(MENU_API + resId);
      const dataInJson = await data.json();
      if (dataInJson) {
        setMenuData(dataInJson.data);
        console.log(dataInJson.data);
      }
    } catch (error) {}
  };

  return menuData;
};

export default useMenuData;
